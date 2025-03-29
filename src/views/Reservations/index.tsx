
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ReservationRecord from '../../models/ReservationRecord';
import service from '../../services/reservation.service';
import availableHours from './availableHours';
import S from './styled';

const Reservations: React.FC = observer(() => {
  const [reservations, setReservations] = React.useState<ReservationRecord[]>(
    []
  );
  const [, setSelectedReservation] = React.useState<ReservationRecord | null>();
  const handleClickDay = (date: Date) => {
    service.getReservationsByDate(date).then((result: Response) => {
      console.log(result);

      // setReservations(result);
    });
  };
  const getReservation = (hour: number) => {
    const [exactReservation] = reservations.filter(
      (item) => item?.date?.getHours() === hour
    );
    return exactReservation;
  };
  const handleCardClick = (reservation: ReservationRecord) => {
    const newReservations = [
      ...reservations.filter((item) => item?.id !== reservation?.id),
      reservation,
    ].sort((a, b) => a.date.getHours() - b.date.getHours());
    setReservations(newReservations);
    setSelectedReservation(reservation);
  };

  return (
    <>
      <h2>Reservas</h2>

      <select name="space" id="space">
        <option value="gym">Academia</option>
        <option value="grill1">Churrasqueira 1</option>
        <option value="grill2">Churrasqueira 2</option>
        <option value="court">Quadra</option>
        <option value="partyroom1">Salão de festas 1</option>
        <option value="partyroom2">Salão de festas 2</option>
      </select>
      <S.CalendarContainer>
        <Calendar onClickDay={handleClickDay} />
      </S.CalendarContainer>
      <S.ItemCardContainer>
        {availableHours().map((hour) => {
          const currentReservation = getReservation(hour);
          return (
            <S.ItemCard
              key={hour}
              onClick={() => handleCardClick(currentReservation)}
            >
              <S.ItemCardBody available={currentReservation === undefined}>
                <span>{hour}</span>
                {currentReservation?.date.toDateString()}
              </S.ItemCardBody>
            </S.ItemCard>
          );
        })}
      </S.ItemCardContainer>
    </>
  );
};

export default Reservations;

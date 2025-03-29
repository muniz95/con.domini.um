export const getReservationsByDate = async (date: Date) => {
  console.log(date);

  return await fetch({} as RequestInfo);
};

export default {
  getReservationsByDate,
};

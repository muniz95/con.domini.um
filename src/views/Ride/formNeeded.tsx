import React from "react";
import RideRecord from "../../models/RideRecord";
import service from "../../services/ride.service";
import RootStore from "../../store";
import { toBase64 } from "../../utils/file";

const FormNeeded = () => {
  const rootStore = React.useContext(RootStore);
  const [destiny, setDestiny] = React.useState("");
  const [town, setTown] = React.useState("");
  const [frequency, setFrequency] = React.useState("");
  const [departure, setDeparture] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [observation, setObservation] = React.useState("");
  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    service.post(
      new RideRecord({
        destiny,
        town,
        frequency,
        departure,
        phone,
        observation,
        category: "need",
      }),
      rootStore.jwt
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="destiny">Destino</label>
      <input
        type="text"
        id="destiny"
        name="destiny"
        onChange={({ target }) => setDestiny(target.value)}
      />

      <label htmlFor="town">Bairro e/ou cidade</label>
      <input
        type="text"
        id="town"
        name="town"
        onChange={({ target }) => setTown(target.value)}
      />

      <input
        type="radio"
        name="frequency"
        id="onetime"
        value="0"
        onChange={({ target }) => setFrequency(target.value)}
      />
      <label htmlFor="onetime">Apenas um dia</label>

      <input
        type="radio"
        name="frequency"
        id="recurring"
        value="1"
        onChange={({ target }) => setFrequency(target.value)}
      />
      <label htmlFor="recurring">Recorrente</label>

      <label htmlFor="departure">Horário de saída</label>
      <input
        type="text"
        id="departure"
        name="departure"
        onChange={({ target }) => setDeparture(target.value)}
      />

      <label htmlFor="phone">Telefone (opcional)</label>
      <input
        type="text"
        id="phone"
        name="phone"
        onChange={({ target }) => setPhone(target.value)}
      />

      <label htmlFor="observation">Observações</label>
      <input
        type="text"
        id="observation"
        name="observation"
        onChange={({ target }) => setObservation(target.value)}
      />

      <input type="submit" value="Enviar" />
    </form>
  );
};

export default FormNeeded;

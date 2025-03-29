import { FormControl, Input, InputLabel } from "@mui/material";
import React from "react";
import { Form } from "@/components/Form";
import RideRecord from "../../models/RideRecord";
import service from "../../services/ride.service";
import RootStore from "../../store";

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
    <Form onSubmit={handleSubmit}>
      <FormControl>
        <InputLabel htmlFor="destiny">Destino</InputLabel>
        <Input
          type="text"
          id="destiny"
          name="destiny"
          onChange={({ target }) => setDestiny(target.value)}
        />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="town">Bairro e/ou cidade</InputLabel>
        <Input
          type="text"
          id="town"
          name="town"
          onChange={({ target }) => setTown(target.value)}
          />
      </FormControl>
    
      <FormControl>
        <Input
          type="radio"
          name="frequency"
          id="onetime"
          value="0"
          onChange={({ target }) => setFrequency(target.value)}
        />
        <InputLabel htmlFor="onetime">Apenas um dia</InputLabel>
      
      </FormControl>

      <FormControl>
        <Input
          type="radio"
          name="frequency"
          id="recurring"
          value="1"
          onChange={({ target }) => setFrequency(target.value)}
        />
        <InputLabel htmlFor="recurring">Recorrente</InputLabel>
      </FormControl>
      
      <FormControl>
        <InputLabel htmlFor="departure">Horário de saída</InputLabel>
        <Input
          type="text"
          id="departure"
          name="departure"
          onChange={({ target }) => setDeparture(target.value)}
        />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="phone">Telefone (opcional)</InputLabel>
        <Input
          type="text"
          id="phone"
          name="phone"
          onChange={({ target }) => setPhone(target.value)}
        />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="observation">Observações</InputLabel>
        <Input
          type="text"
          id="observation"
          name="observation"
          onChange={({ target }) => setObservation(target.value)}
        />
      </FormControl>

      <Input type="submit" value="Enviar" />
    </Form>
  );
};

export default FormNeeded;

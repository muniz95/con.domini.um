<FormControl></FormControl>;
import { Form } from '@/components/form/styled';
import { FormControl, Input, InputLabel } from '@mui/material';
import React, { FormEvent, useState } from 'react';
import { useCreateRideRecord } from './api/create-ride-record';

const FormOffer = () => {
  const createRideRecord = useCreateRideRecord();
  const [destiny, setDestiny] = useState('');
  const [town, setTown] = useState('');
  const [departure, setDeparture] = useState('');
  const [phone, setPhone] = useState('');
  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    createRideRecord.mutate({
      destiny,
      town,
      departure,
      phone,
      category: 'need',
      place: '',
      route: '',
    });
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

      <Input type="submit" value="Enviar" />
    </Form>
  );
};

export default FormOffer;

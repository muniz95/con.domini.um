import { Form } from '@/shared/components/form/styled';
import { Button, TextInput } from '@mantine/core';
import { FormEvent, useState } from 'react';
import { useCreateRideRecord } from '../hooks';

export default function FormOffer() {
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
      category: 'offer',
      place: '',
      route: '',
      days: [],
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextInput
        type="text"
        id="destiny"
        name="destiny"
        label="Destino"
        onChange={({ target }) => setDestiny(target.value)}
      />

      <TextInput
        type="text"
        id="town"
        name="town"
        label="Bairro e/ou cidade"
        onChange={({ target }) => setTown(target.value)}
      />

      <TextInput
        type="text"
        id="departure"
        name="departure"
        label="Horário de saída"
        onChange={({ target }) => setDeparture(target.value)}
      />

      <TextInput
        type="text"
        id="phone"
        name="phone"
        label="Telefone (opcional)"
        onChange={({ target }) => setPhone(target.value)}
      />

      <Button mt="md" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

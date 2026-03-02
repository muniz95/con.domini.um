import { ActionIcon, Button, TextInput } from '@mantine/core';
import { FC, FormEvent, useState } from 'react';
import { Form } from '@/shared/components/form/styled';
import CDUModal from '@/shared/components/modal';
import { useCreateAdministrator } from './api/create-administrator';
import { useGetAdministrators } from './api/get-administrators';
import S from './styled';

const Administrators: FC = () => {
  const { data } = useGetAdministrators();
  const createAdministratorMutation = useCreateAdministrator();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    await createAdministratorMutation.mutate({ name, phone });
    handleModalClose();
  };

  const handleAddClick = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(evt);
    setOpen(true);
  };
  const handleModalClose = () => {
    setOpen(false);
  };
  const AddButton = (
    <ActionIcon onClick={handleAddClick} variant="filled" radius="xl" size="lg">
      +
    </ActionIcon>
  );

  return (
    <>
      <h2>Administradora</h2>
      <S.Center>
        <S.Table>
          <thead>
            <tr>
              <th>Administradora</th>
              <th>Telefone</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.Center>
      {AddButton}
      <CDUModal open={open} setOpen={setOpen} title="Nova administradora">
        <Form onSubmit={handleSubmit}>
          <TextInput
            type="text"
            name="name"
            id="name"
            label="Nome"
            onChange={({ target }) => setName(target.value)}
          />
          <TextInput
            type="text"
            name="phone"
            id="phone"
            label="Telefone"
            onChange={({ target }) => setPhone(target.value)}
          />
          <Button mt="md" type="submit">
            Enviar
          </Button>
        </Form>
      </CDUModal>
    </>
  );
};

export default Administrators;

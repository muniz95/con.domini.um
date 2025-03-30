import { Button, FormControl, Input, InputLabel, Modal } from '@mui/material';
import { FC, FormEvent, useState } from 'react';
import { Form } from '@/components/form/styled';
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
  const AddButton = <Button onClick={handleAddClick}>+</Button>;

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
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Form onSubmit={handleSubmit}>
          <FormControl>
            <InputLabel htmlFor="name">Nome</InputLabel>
            <Input
              type="text"
              name="name"
              id="name"
              onChange={({ target }) => setName(target.value)}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="phone">Telefone</InputLabel>
            <Input
              type="text"
              name="phone"
              id="phone"
              onChange={({ target }) => setPhone(target.value)}
            />
          </FormControl>

          <Input type="submit" value="Enviar" />
        </Form>
      </Modal>
    </>
  );
};

export default Administrators;

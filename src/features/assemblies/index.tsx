import { Form } from '@/shared/components/form/styled';
import CDUModal from '@/shared/components/modal';
import { Button, Group, TextInput } from '@mantine/core';
import { Button as MUIButton } from '@mui/material';
import React, { ChangeEvent } from 'react';
import { useGetAssemblies } from './api/get-assemblies';
import S from './styled';
import { useCreateAssembly } from './api/create-assembly';

const Assemblies: React.FC = () => {
  const { data } = useGetAssemblies();
  const createAssembly = useCreateAssembly();
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [date, setDate] = React.useState('');
  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    await createAssembly.mutate({
      title,
      date: new Date(date),
      confirmed: false,
    });
    handleModalClose();
  };
  const handleAddClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    console.log(evt);
    setOpen(true);
  };
  const handleModalClose = () => {
    setOpen(false);
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.currentTarget.id) {
      case 'title':
        setTitle(event.currentTarget.value);
        break;
      case 'date':
        setDate(event.currentTarget.value);
        break;
      default:
        break;
    }
  };
  const AddButton = <MUIButton onClick={handleAddClick}>+</MUIButton>;

  return (
    <React.Fragment>
      <h2>Assembleias</h2>
      <S.Center>
        <S.Table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Data</th>
              <th>Confirmou</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.date.toLocaleDateString('pt-br')}</td>
                <td>{item.confirmed ? 'Sim' : 'Não'}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.Center>
      {AddButton}
      <CDUModal open={open} setOpen={setOpen} title="Nova assembleia">
        <Form onSubmit={handleSubmit}>
          <TextInput
            id="title"
            label="Título"
            value={title}
            onChange={handleChange}
          />
          <TextInput
            type="date"
            id="date"
            label="Data"
            value={date}
            onChange={handleChange}
          />
          <Group mt="md">
            <Button variant="default" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit">Enviar</Button>
          </Group>
        </Form>
      </CDUModal>
    </React.Fragment>
  );
};

export default Assemblies;

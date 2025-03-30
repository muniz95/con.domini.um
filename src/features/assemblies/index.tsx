import { Form } from '@/components/Form';
import { Button, FormControl, Input, InputLabel, Modal } from '@mui/material';
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
  const AddButton = <Button onClick={handleAddClick}>+</Button>;

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
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Form onSubmit={handleSubmit}>
          <FormControl>
            <InputLabel htmlFor="title">Título</InputLabel>
            <Input id="title" value={title} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="date">Data</InputLabel>
            <Input type="date" id="date" value={date} onChange={handleChange} />
          </FormControl>
          <div>
            <Button color="secondary" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Input type="submit" value="Enviar" />
          </div>
        </Form>
      </Modal>
    </React.Fragment>
  );
};

export default Assemblies;

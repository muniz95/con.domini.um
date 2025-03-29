import { observer } from "mobx-react";
import React from "react";
import AdministratorStore from "./store";
import Administrator from '../../models/Administrator';
import RootStore from "../../store";
import S from "./styled";
import { Fab, FormControl, Input, InputLabel, Modal } from "@mui/material";
import { Form } from "../../components/Form";

const Administrators: React.FC<{}> = observer(() => {
  const store = React.useContext(AdministratorStore);
  const rootStore = React.useContext(RootStore);
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    await store.saveItem(new Administrator({name, phone}));
    handleModalClose();
    store.fetchItems();
  };

  const handleAddClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    console.log(evt);
    setOpen(true);
  }
  const handleModalClose = () => {
    setOpen(false);
  };
  const AddButton = (
    rootStore.isAdmin() && <Fab onClick={handleAddClick}>+</Fab>
  );
  
  React.useEffect(() => {
    store.fetchItems();
  }, [store]);

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
          {store.items.map((item) =>
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.phone}</td>
            </tr>,
          )}
          </tbody>
        </S.Table>
      </S.Center>
      { AddButton }
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Form onSubmit={handleSubmit}>
          <FormControl>
            <InputLabel htmlFor="name">Nome</InputLabel>
            <Input type="text" name="name" id="name"
              onChange={({target}) => setName(target.value)} />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="phone">Telefone</InputLabel>
            <Input type="text" name="phone" id="phone"
              onChange={({target}) => setPhone(target.value)} />
          </FormControl>

          <Input type="submit" value="Enviar"/>
        </Form>
      </Modal>
    </>
  );
});

export default Administrators;

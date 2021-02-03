import { Fab, FormControl, Input, InputLabel, Modal } from "@material-ui/core";
import { observer } from "mobx-react";
import React from "react";
import FirefighterBrigadeStore from "./store";
import RootStore from '../../store';
import S from "./styled";
import BrigadeMember from "../../models/BrigadeMember";
import { Form } from "../../components/Form";

const Administrator: React.FC<{}> = observer(() => {
  const store = React.useContext(FirefighterBrigadeStore);
  const rootStore = React.useContext(RootStore);
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [category, setCategory] = React.useState('');
  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    await store.saveItem(new BrigadeMember({name, category}));
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
    <React.Fragment>
      <h2>Brigada de incêndio</h2>
      <S.Center>
        <S.Table>
          <thead>
            <tr>
              <th>Membro</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
          {store.items.map((item) =>
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.category}</td>
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
            <InputLabel htmlFor="category">Data</InputLabel>
            <Input type="text" name="category" id="category"
              onChange={({target}) => setCategory(target.value)} />
          </FormControl>

          <Input type="submit" value="Enviar"/>
        </Form>
      </Modal>
    </React.Fragment>
  );
});

export default Administrator;

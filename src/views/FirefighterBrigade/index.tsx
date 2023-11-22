import { Button, Fab } from "@material-ui/core";
import { observer } from "mobx-react";
import React from "react";
import FirefighterBrigadeStore from "./store";
import RootStore from '../../store';
import S from "./styled";
import BrigadeMember from "../../models/BrigadeMember";
import FirefighterBrigadeForm from "./_form";
import CDUModal from "../../components/Modal";

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
  const handleEdit = () => {
    setOpen(false);
  };
  const handleRemove = async (id: number) => {
    await store.removeItem(id);
    handleModalClose();
    store.fetchItems();
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
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
          {store.items.map((item) =>
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>
                <Button onClick={handleEdit}>Editar</Button>
                <Button onClick={() => handleRemove(item.id!)}>Remover</Button>
              </td>
            </tr>,
          )}
          </tbody>
        </S.Table>
      </S.Center>
      { AddButton }
      <CDUModal
        open={open}
        setOpen={setOpen}
        >
        <FirefighterBrigadeForm
          handleSubmit={handleSubmit}
          setName={setName}
          setCategory={setCategory} />
      </CDUModal>
      {/* <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <FirefighterBrigadeForm
          handleSubmit={handleSubmit}
          setName={setName}
          setCategory={setCategory} />
      </Modal> */}
    </React.Fragment>
  );
});

export default Administrator;

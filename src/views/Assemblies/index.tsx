import { observer } from "mobx-react";
import React from "react";
import Assembly from "../../models/Assembly";
import AssembliesStore from "./store";
import RootStore from '../../store';
import S from "./styled";
import { Fab, Modal } from "@material-ui/core";

const Assemblies: React.FC<{}> = observer(() => {
  const store = React.useContext(AssembliesStore);
  const rootStore = React.useContext(RootStore);
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [date, setDate] = React.useState('');
  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    await store.saveItem(new Assembly({title, date}));
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
    store.fetchItems()
  }, [store]);

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
          {store.items.map((item) =>
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.dateToString}</td>
              <td>{item.isConfirmed}</td>
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
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Título</label>
          <input type="text" name="title" id="title"
            onChange={({target}) => setTitle(target.value)} />
          <label htmlFor="date">Data</label>
          <input type="date" name="date" id="date"
            onChange={({target}) => setDate(target.value)} />

          <input type="submit" value="Enviar"/>
        </form>
      </Modal>
    </React.Fragment>
  );
});

export default Assemblies;

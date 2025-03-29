import { Button, Fab } from '@mui/material';
import { observer } from 'mobx-react';
import React from 'react';
import FirefighterBrigadeStore from './store';
import RootStore from '../../store';
import S from './styled';
import BrigadeMember from '../../models/BrigadeMember';
import FirefighterBrigadeForm from './_form';
import CDUModal from '../../components/Modal';

const Administrator: React.FC<{}> = observer(() => {
  const store = React.useContext(FirefighterBrigadeStore);
  const rootStore = React.useContext(RootStore);
  const [currentItem, setCurrentItem] = React.useState<BrigadeMember | null>(
    null
  );
  const [id, setId] = React.useState<number | null>(null);
  const [newOpen, setNewOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [, setName] = React.useState('');
  const [, setCategory] = React.useState('');

  const handleNewSubmit = async (formName: string, formCategory: string) => {
    await store.saveItem(
      new BrigadeMember({ name: formName, category: formCategory })
    );
    handleModalClose();
    store.fetchItems();
  };
  const handleEditSubmit = async (formName: string, formCategory: string) => {
    await store.saveItem(
      new BrigadeMember({ id, name: formName, category: formCategory })
    );
    handleModalClose();
    store.fetchItems();
  };
  const handleAddClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    console.log(evt);
    setNewOpen(true);
  };
  const handleModalClose = () => {
    setNewOpen(false);
    setEditOpen(false);
  };
  const handleEdit = (item: BrigadeMember) => {
    setCurrentItem(item);
    setId(item.id!);
    setName(item.name!);
    setCategory(item.category!);
    setEditOpen(true);
  };
  const handleRemove = async (id: number) => {
    await store.removeItem(id);
    handleModalClose();
    store.fetchItems();
  };
  const AddButton = rootStore.isAdmin() && (
    <Fab onClick={handleAddClick}>+</Fab>
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
            {store.items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>
                  <Button onClick={() => handleEdit(item)}>Editar</Button>
                  <Button onClick={() => handleRemove(item.id!)}>
                    Remover
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.Center>
      {AddButton}
      <CDUModal open={editOpen} setOpen={setEditOpen}>
        <FirefighterBrigadeForm
          item={currentItem!}
          onSubmit={handleEditSubmit}
        />
      </CDUModal>
      <CDUModal open={newOpen} setOpen={setNewOpen}>
        <FirefighterBrigadeForm onSubmit={handleNewSubmit} />
      </CDUModal>
    </React.Fragment>
  );
});

export default Administrator;

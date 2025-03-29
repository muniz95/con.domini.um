import { Button, Fab } from '@mui/material';

import React from 'react';
import CDUModal from '../../components/Modal';
import BrigadeMember from '../../models/BrigadeMember';
import FirefighterBrigadeForm from './_form';
import { useCreateBrigadeMember } from './api/create-brigade-member';
import { useDeleteBrigadeMember } from './api/delete-brigade-member';
import { useGetBrigadeMembers } from './api/get-brigade-members';
import { useUpdateBrigadeMember } from './api/update-brigade-member';
import S from './styled';

const FirefighterBrigade = () => {
  const { data } = useGetBrigadeMembers();
  const createBrigadeMember = useCreateBrigadeMember();
  const updateBrigadeMember = useUpdateBrigadeMember();
  const deleteBrigadeMember = useDeleteBrigadeMember();

  const [currentItem, setCurrentItem] = React.useState<BrigadeMember>();
  const [id, setId] = React.useState<number>();
  const [newOpen, setNewOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [, setName] = React.useState('');
  const [, setCategory] = React.useState('');

  const handleNewSubmit = async (formName: string, formCategory: string) => {
    await createBrigadeMember.mutate({
      name: formName,
      category: formCategory,
    });
    handleModalClose();
  };
  const handleEditSubmit = async (formName: string, formCategory: string) => {
    await updateBrigadeMember.mutate({
      id,
      name: formName,
      category: formCategory,
    });
    handleModalClose();
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
    deleteBrigadeMember.mutate(id);
    handleModalClose();
  };
  const AddButton = <Fab onClick={handleAddClick}>+</Fab>;

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
            {data?.map((item) => (
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
};

export default FirefighterBrigade;

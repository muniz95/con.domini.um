import { Form } from '@/shared/components/form/styled';
import { Button, FileInput, TextInput, Textarea } from '@mantine/core';
import { toBase64 } from '../../utils/file';
import { useCreateLostFoundItem } from './api/create-lost-found-item';
import { useState, FormEvent } from 'react';

interface IProps {
  itemLabel: { [x: string]: string };
  itemCategory: string;
}

const LostFoundItemForm = ({ itemLabel, itemCategory = '' }: IProps) => {
  const createLostFoundItem = useCreateLostFoundItem();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    let image = '';
    if (imageFile) {
      image = await toBase64(imageFile);
    }
    createLostFoundItem.mutate({ name, description, image, foundBy: 'Admin' });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <TextInput
        type="text"
        id="item"
        name="item"
        label={`O que você ${itemLabel[itemCategory]}`}
        onChange={({ target }) => setName(target.value)}
      />
      <Textarea
        id="description"
        name="description"
        label="Faça uma descrição"
        onChange={({ target }) => setDescription(target.value)}
      />
      <FileInput
        id="image"
        name="image"
        label="Anexar imagem (opcional)"
        placeholder="Selecione uma imagem"
        accept="image/*"
        clearable
        onChange={setImageFile}
      />

      <Button mt="md" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export default LostFoundItemForm;

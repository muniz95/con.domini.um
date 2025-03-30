import { Form } from '@/components/form/styled';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
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
  const [images, setImages] = useState<FileList | null>(null);
  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    let file;
    let image = '';
    if (images) {
      [file] = [...Array.from(images)];
      image = await toBase64(file);
    }
    createLostFoundItem.mutate({ name, description, image, foundBy: 'Admin' });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormControl>
        <InputLabel htmlFor="item">
          O que você {itemLabel[itemCategory]}
        </InputLabel>
        <Input
          type="text"
          id="item"
          name="item"
          onChange={({ target }) => setName(target.value)}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="description">Faça uma descrição</InputLabel>
        <Input
          type="textarea"
          id="description"
          name="description"
          onChange={({ target }) => setDescription(target.value)}
        />
      </FormControl>
      <FormControl>
        <label htmlFor="image">Anexar imagem (opcional)</label>
        <Button variant="contained" component="label">
          Upload File
          <input
            type="file"
            id="image"
            name="image"
            hidden
            onChange={({ currentTarget }) => setImages(currentTarget.files)}
          />
        </Button>
      </FormControl>

      <Input type="submit" value="Enviar" />
    </Form>
  );
};

export default LostFoundItemForm;

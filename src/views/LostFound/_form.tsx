import { Button, FormControl, Input, InputLabel } from '@mui/material';
import React from 'react';
import { Form } from '../../components/Form';
import LostFoundItem from '../../models/LostFoundItem';
import service from '../../services/lostFound.service';
import RootStore from '../../store';
import { toBase64 } from '../../utils/file';

interface IProps {
  itemLabel: any;
  itemCategory: string;
}

const LostFoundItemForm = ({itemLabel, itemCategory = ''}: IProps) => {
  const rootStore = React.useContext(RootStore);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [images, setImages] = React.useState<FileList | null>(null);
  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    let file;
    let image = '';
    if (images) {
      [file] = [...Array.from(images)];
      image = await toBase64(file);
    }
    service.post(new LostFoundItem({name, description, image}), rootStore.jwt);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormControl>
        <InputLabel htmlFor="item">O que você {itemLabel[itemCategory]}</InputLabel>
        <Input type="text" id="item" name="item"
          onChange={({target}) => setName(target.value)} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="description">Faça uma descrição</InputLabel>
        <Input type="textarea" id="description" name="description"
          onChange={({target}) => setDescription(target.value)} />
      </FormControl>
      <FormControl>
        <label htmlFor="image">Anexar imagem (opcional)</label>
        <Button
          variant="contained"
          component="label"
        >
          Upload File
          <input type="file" id="image" name="image" hidden
            onChange={({currentTarget}) => setImages(currentTarget.files)} />
        </Button>
      </FormControl>

      <Input type="submit" value="Enviar"/>
    </Form>
  );
}

export default LostFoundItemForm;

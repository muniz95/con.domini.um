import React from 'react';
import LostFoundItem from '../../models/LostFoundItem';
import service from '../../services/lostFound.service';
import RootStore from '../../store';

interface IProps {
  itemLabel: any;
  itemCategory: string;
}

const Form = ({itemLabel, itemCategory = ''}: IProps) => {
  const rootStore = React.useContext(RootStore);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [image, setImage] = React.useState<FileList | null>(null);
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(name, description);
    console.log(image);
    service.post(new LostFoundItem({name, description, image}), rootStore.jwt);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="item">O que você {itemLabel[itemCategory]}</label>
      <input type="text" id="item" name="item"
        onChange={({target}) => setName(target.value)} />
      <label htmlFor="description">Faça uma descrição</label>
      <input type="textarea" id="description" name="description"
        onChange={({target}) => setDescription(target.value)} />
      <label htmlFor="image">Anexar imagem (opcional)</label>
      <input type="file" id="image" name="image"
        onChange={({currentTarget}) => setImage(currentTarget.files)} />

      <input type="submit" value="Enviar"/>
    </form>
  );
}

export default Form;

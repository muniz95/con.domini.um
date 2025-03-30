import React, { ChangeEvent } from 'react';
import { Form } from '@/components/form/styled';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Input,
} from '@mui/material';

const SmallAdForm = () => {
  const [category, setCategory] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [text, setText] = React.useState('');
  const [price, setPrice] = React.useState(0.0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.currentTarget.id) {
      case 'category':
        setCategory(event.currentTarget.value);
        break;
      case 'title':
        setTitle(event.currentTarget.value);
        break;
      case 'text':
        setText(event.currentTarget.value);
        break;
      case 'price':
        setPrice(Number.parseFloat(event.currentTarget.value));
        break;
      default:
        break;
    }
  };

  return (
    <Form onSubmit={() => {}}>
      <FormControl>
        <InputLabel htmlFor="category">Categoria</InputLabel>
        <Select id="category" value={category}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="title">Título</InputLabel>
        <Input id="title" value={title} onChange={handleChange} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="text">Texto</InputLabel>
        <Input id="text" type="textarea" value={text} onChange={handleChange} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="price">Preço</InputLabel>
        <Input id="price" value={price} onChange={handleChange} />
      </FormControl>
      <div>
        <Input type="submit" value="Enviar" />
      </div>
    </Form>
  );
};

export default SmallAdForm;

import React, { ChangeEvent } from 'react';
import { Form } from '@/shared/components/form/styled';
import { Button, NumberInput, Select, TextInput, Textarea } from '@mantine/core';

const SmallAdForm = () => {
  const [category, setCategory] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [text, setText] = React.useState('');
  const [price, setPrice] = React.useState(0.0);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    switch (event.currentTarget.id) {
      case 'title':
        setTitle(event.currentTarget.value);
        break;
      case 'text':
        setText(event.currentTarget.value);
        break;
      default:
        break;
    }
  };

  return (
    <Form onSubmit={() => {}}>
      <Select
        id="category"
        label="Categoria"
        value={category}
        onChange={(value) => setCategory(value ?? '')}
        data={[
          { value: '', label: 'None' },
          { value: '10', label: 'Ten' },
          { value: '20', label: 'Twenty' },
          { value: '30', label: 'Thirty' },
        ]}
      />
      <TextInput id="title" label="Título" value={title} onChange={handleChange} />
      <Textarea id="text" label="Texto" value={text} onChange={handleChange} />
      <NumberInput
        id="price"
        label="Preço"
        value={price}
        min={0}
        decimalScale={2}
        onChange={(value) =>
          setPrice(typeof value === 'number' ? value : Number.parseFloat(String(value)) || 0)
        }
      />
      <Button mt="md" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export default SmallAdForm;

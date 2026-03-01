import { Form, Text } from '@/shared/components/form/styled';
import { Button, TextInput } from '@mantine/core';
import { Formik } from 'formik';
import BrigadeMember from '../../models/BrigadeMember';

interface IProps {
  item?: BrigadeMember;
  onSubmit: (name: string, category: string) => void;
}

const FirefighterBrigadeForm = ({ item, onSubmit }: IProps) => {
  return (
    <Formik
      initialValues={{
        name: (item && item!.name) || '',
        category: (item && item!.category) || '',
      }}
      onSubmit={({ name, category }) => {
        console.log(name, category);

        onSubmit(name, category);
      }}
      validate={(values) => {
        const errors: { [x: string]: string } = {};
        console.log(values);

        if (!values.name) {
          errors.name = 'Nome é obrigatório.';
        }

        if (!values.category) {
          errors.category = 'Categoria é obrigatória.';
        }

        return errors;
      }}
      render={({ errors, values, handleChange, handleBlur, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <TextInput
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            type="text"
            name="name"
            label="Nome *"
            placeholder="Nome"
            error={errors.name && <Text color="red">{errors.name}</Text>}
          />
          <TextInput
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.category}
            type="text"
            name="category"
            label="Categoria *"
            placeholder="Categoria"
            error={errors.category && <Text color="red">{errors.category}</Text>}
          />

          <Button mt="md" type="submit">
            Enviar
          </Button>
        </Form>
      )}
    />
  );
};

export default FirefighterBrigadeForm;

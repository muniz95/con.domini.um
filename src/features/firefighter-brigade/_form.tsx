import { Form, Text } from '@/components/form/styled';
import { FormControl, Input, InputLabel } from '@mui/material';
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
          <FormControl>
            <InputLabel htmlFor="name">
              Nome *{errors.name && <Text color="red">{errors.name}</Text>}
            </InputLabel>
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              type="text"
              name="name"
              placeholder="Nome"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="category">
              Categoria *
              {errors.category && <Text color="red">{errors.category}</Text>}
            </InputLabel>
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.category}
              type="text"
              name="category"
              placeholder="Categoria"
            />
          </FormControl>

          <Input type="submit" value="Enviar" />
        </Form>
      )}
    />
  );
};

export default FirefighterBrigadeForm;

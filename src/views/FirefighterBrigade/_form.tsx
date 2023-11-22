import { FormControl, InputLabel, Input } from "@material-ui/core";
import { Form } from "../../components/Form";
import React from "react";

interface IProps {
  handleSubmit: (evt: React.FormEvent<HTMLFormElement>) => void
  setName: (name: string) => void
  setCategory: (category: string) => void
}

const FirefighterBrigadeForm = ({ handleSubmit, setName, setCategory }: IProps) => {  
  return (
    <Form onSubmit={handleSubmit}>
      <FormControl>
        <InputLabel htmlFor="name">Nome</InputLabel>
        <Input type="text" name="name" id="name"
          onChange={({target}) => setName(target.value)} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="category">Categoria</InputLabel>
        <Input type="text" name="category" id="category"
          onChange={({target}) => setCategory(target.value)} />
      </FormControl>

      <Input type="submit" value="Enviar"/>
    </Form>
  );
}

export default FirefighterBrigadeForm;
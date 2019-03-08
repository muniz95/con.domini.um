import React, { Component } from 'react';
import { ErrorMessage, Field, Form, Formik, FormikActions } from "formik";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import CDUTable from '../components/CDUTable';
import sc from "styled-components";

export default class LostFound extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Achados e perdidos</h1>
        <p>Comunique perdas ou avise se porventura encontrar objetos ou valores nas dependências do condomínio.</p>
        <p>Pratique a cidadania!</p>
        <SmilesContainer>
          <SmileBox>Achou</SmileBox>
          <SmileBox>Perdeu</SmileBox>
        </SmilesContainer>
        <Formik onSubmit={this.onSubmit} initialValues={{found: "", description: ""}}>
          {({ isSubmitting }) => (
            <Form style={{width: "100%"}}>
              <FormRow>
                <label htmlFor="found">Found</label>
                <Input type="text" name="found" />
                <ErrorMessage name="found" component="div" />
              </FormRow>
              <FormRow>
                <label htmlFor="description">Description</label>
                <Input type="textarea" name="description" />
                <ErrorMessage name="description" component="div" />
              </FormRow>
              <FormRow>
                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </FormRow>
            </Form>
          )}
        </Formik>
        <CDUTable></CDUTable>
      </React.Fragment>
    )
  }
  
  private onSubmit() {
    console.log("submit");
  }
}

const SmilesContainer = sc.div`
  display: flex;
  height: 200px;
  justify-content: center;
`;

const SmileBox = sc.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 100%;
`;

const FormRow = sc.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  width: 100%;
`;

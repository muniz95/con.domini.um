import styled from 'styled-components';

export const Form = styled.form`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffffed;
  flex-flow: column;
`;

export const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  color: ${(props) => props.color || '#4d4d4d'};
`;

export default {
  Form,
  Text,
};

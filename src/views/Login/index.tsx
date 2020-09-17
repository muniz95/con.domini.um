import { observer } from "mobx-react";
import React from "react";
import Store from '../../store';
import S from './styled';
import { useHistory } from "react-router-dom";

const Login: React.FC<{}> = observer(() => {
  const store = React.useContext(Store);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    store.authenticate(email, password);
    if (store.authenticated) {
      history.replace('/');
    }
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="text" name="email" id="email"
            onChange={({target}) => setEmail(target.value)} />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password"
            onChange={({target}) => setPassword(target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Entrar"/>
        </div>
      </form>
    </>
  );
});

export default Login;

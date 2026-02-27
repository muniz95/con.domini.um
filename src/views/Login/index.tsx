import React from 'react';
// import S from './styled';

const Login = () => {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Entrar" />
        </div>
      </form>
    </>
  );
};

export default Login;

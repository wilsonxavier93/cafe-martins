import React from 'react';
import '../styles/Login.css';
import logoCafe from '../assets/logo-cafe.png'; // Importa a imagem logo


const Login = () => {
  return (
    <div className="container">
      <div className="logo">
      <img src={logoCafe} alt="Logo" />
      </div>
      <div className="login-box">
        <form action="/login" method="post">
          <div className="input-group">
            <label htmlFor="cpf">Usuário</label>
            <input type="text" id="cpf" name="cpf" placeholder="Digite seu CPF" maxLength="11" pattern="\d{11}" inputMode="numeric" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" placeholder="Digite sua senha" maxLength="6" pattern="\d{6}" inputMode="numeric" required />
          </div>
          <div className="forgot-password">
            <a href=" ">Esqueci minha senha</a>
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="register">
          <a href=" ">Novo usuário? <strong>Registro</strong></a>
        </div>
      </div>
    </div>
  );
};

export default Login;

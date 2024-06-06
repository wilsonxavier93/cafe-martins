import React from 'react';
import '../styles/Login.css'; // Importa o arquivo CSS
import logoCafe from '../assets/logo-cafe.png'; // Importa a imagem logo

const Register = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src={logoCafe} alt="Logo" />
      </div>
      <div className="register-box">
        <form action="/register" method="post">
          <div className="input-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Digite seu nome"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="cpf">CPF</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              placeholder="Digite seu CPF"
              maxLength="11"
              pattern="\d{11}"
              inputMode="numeric"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu e-mail"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha"
              maxLength="6"
              pattern="\d{6}"
              inputMode="numeric"
              required
            />
          </div>
          <button type="submit">Registrar</button>
        </form>
        <div className="back-to-login">
          <a href="Login">Voltar para Login</a>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React from 'react';
import '../styles/Login.css';
import logoCafe from '../assets/logo-cafe.png'; // Importa a imagem logo

const EsqueciSenha = () => {
    return (
        <div className="container">
            <div className="logo">
            <img src={logoCafe} alt="Logo" />
            </div>
            <div className="forgot-password-box">
                <form action="/reset-password" method="post">
                    <div className="input-group">
                        <label htmlFor="email">Digite seu e-mail para enviarmos a sua nova senha:</label>
                        <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
                <div className="back-to-login">
                    <a href=" ">Voltar para Login</a>
                </div>
            </div>
        </div>
    );
};

export default EsqueciSenha;

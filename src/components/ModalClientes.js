import React from 'react';
import { BsXCircleFill, BsTrash, BsPencilSquare, BsSave } from "react-icons/bs";

const Modal = ({ visible, onClose }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        onClose(); // Chamando a função onClose para fechar o modal
    }

    if (!visible) {
        return null;
    }

    return (
        <div id="modal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}><BsXCircleFill /></span> {/* Utilizando a função onClose para fechar o modal */}
                <h2>Cadastrar Novo Cliente</h2>
                <form onSubmit={handleSubmit} id="clientForm">
                    <div className="form-group">
                        <div className="form-half">
                            <label htmlFor="nome">Nome Completo:</label>
                            <input type="text" id="nome" name="nome" />
                        </div>
                        <div className="form-half">
                            <label htmlFor="tipoPessoa">Tipo de Pessoa:</label>
                            <select id="tipoPessoa" name="tipoPessoa">
                                <option value="fisica">Pessoa Física</option>
                                <option value="juridica">Pessoa Jurídica</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-half">
                            <label htmlFor="cpfCnpj">CPF/CNPJ:</label>
                            <input type="text" id="cpfCnpj" name="cpfCnpj" />
                        </div>
                        <div className="form-half">
                            <label htmlFor="dataNascimento">Data de Nascimento:</label>
                            <input type="date" id="dataNascimento" name="dataNascimento" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="telefone">Telefone para Contato:</label>
                        <input type="text" id="telefone" name="telefone" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="observacao">Observação:</label>
                        <textarea id="observacao" name="observacao"></textarea>
                    </div>
                    <div className="modal-buttons">
                        <button type="button" className="delete"><BsTrash /><span>Excluir</span></button>
                        <button type="button" className="edit"><BsPencilSquare /><span>Editar</span></button>
                        <button type="submit" className="save"><BsSave /><span>Salvar</span></button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Modal;

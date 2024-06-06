import React, { useState } from 'react';
import '../styles/Clientes.css'; // Importar o arquivo CSS local
import logoCafe from '../assets/logo-cafe.png'; // Importa a imagem logo
import Modal from '../components/ModalClientes'; // Importar o componente Modal
import { BsPeople, BsCart2, BsBox2, BsCurrencyDollar, BsTruck, BsPower, BsPersonPlus, BsSearch, BsFunnel } from "react-icons/bs";

const Clientes = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    }

    const closeModal = () => {
        setModalVisible(false);
    }

    return (
        <div className='pagina-container'>
            <div className="sidebar">
                <div className="logo-container">
                    <img src={logoCafe} alt="Logo" />
                </div>
                <a href=" " className="menu-item"><BsPeople /> <span>Clientes</span></a>
                <a href=" " className="menu-item"><BsCart2 /> <span>Vendas</span></a>
                <a href=" " className="menu-item"><BsBox2 /> <span>Estoque</span></a>
                <a href=" " className="menu-item"><BsCurrencyDollar /> <span>Financeiro</span></a>
                <a href=" " className="menu-item"><BsTruck /> <span>Fornecedores</span></a>
                <button className="logout"><BsPower /><span>Sair</span></button>
            </div>
            <div className="conteudo-pagina">
                <div className="actions">
                    <button className="add-client" onClick={openModal}><BsPersonPlus /><span>Novo Cliente</span></button>
                    <div className="search-container">
                        <input type="text" placeholder="Pesquisar" />
                        <button className="search"><BsSearch /></button>
                    </div>
                    <button className="filter"><BsFunnel /><span>Filtrar</span></button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Código Cliente</th>
                            <th>Nome</th>
                            <th>CPF/CNPJ</th>
                            <th>Pendências</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>001</td>
                            <td>Maria Silva</td>
                            <td>123.456.789-00</td>
                            <td>Nenhuma</td>
                        </tr>
                        <tr>
                            <td>002</td>
                            <td>João Souza</td>
                            <td>987.654.321-00</td>
                            <td>Nenhuma</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Modal visible={modalVisible} onClose={closeModal} />
        </div>
    );
}

export default Clientes;

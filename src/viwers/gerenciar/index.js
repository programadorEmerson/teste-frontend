/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import Imagem from '../../images/gerenciar.png';
import { changeCliente } from '../../store/actions/cliente.action';

function Gerenciar({ updateCliente }) {
  const deleteAllUsers = (prop) => {
    try {
      const url = 'http://localhost:3333/delete-all-users';
      const method = 'POST';

      const dadosRequisicao = new Request(url, {
        method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      return fetch(dadosRequisicao).then(
        (response) => {
          response.json().then((result) => {
            if (response.status === 200) {
              prop({});
              alert('Todos os usuários foram deletados');
              return result;
            }
            return alert(result);
          });
        },
      ).catch((erro) => erro);
    } catch (error) {
      return console.log(error);
    }
  };

  const deleteAllposts = () => {
    try {
      const url = 'http://localhost:3333/delete-all-posts';
      const method = 'POST';

      const dadosRequisicao = new Request(url, {
        method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      return fetch(dadosRequisicao).then(
        (response) => {
          response.json().then((result) => {
            if (response.status === 200) {
              alert('Todos os posts foram deletados');
              return result;
            }
            return alert(result);
          });
        },
      ).catch((erro) => erro);
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <section className="gerenciar">
      <img className="imgGerenciar" src={Imagem} alt="Gerenciar" />
      <span className="msgmGerenciar">Utilize os botões abaixo para zerar todas as informações</span>
      <button onClick={() => deleteAllposts()} className="zerarInformacoes" type="button">Apagar Postagens</button>
      <button onClick={() => deleteAllUsers(updateCliente)} className="zerarInformacoes" type="button">Apagar Usuários</button>
    </section>
  );
}
// envia o valor para a Action
const mapDispatchToProps = (dispatch) => ({
  updateCliente: (value) => dispatch(changeCliente(value)),
});

// Faz a conexão Redux
export default connect(null, mapDispatchToProps)(Gerenciar);

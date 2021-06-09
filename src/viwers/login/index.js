/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { changeCliente } from '../../store/actions/cliente.action';
import './style.css';

function Login({ updateCliente, retornoCliente }) {
  const [cliente, setCliente] = useState({ username: '', password: '' });
  const { username } = retornoCliente.cliente;
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setCliente((prevState) => ({
      ...prevState, [name]: value,
    }));
  };

  const signin = (prop) => {
    if (!cliente.username || !cliente.password) return alert('Usuário/Senha obrigatório');

    const url = 'http://localhost:3333/sign-in';
    const method = 'POST';

    const dadosRequisicao = new Request(url, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cliente),
    });

    return fetch(dadosRequisicao).then(
      (response) => {
        response.json().then((result) => {
          if (response.status === 200) {
            prop(cliente);
            setCliente({ username: '', password: '' });
            return result;
          }
          return alert(result);
        });
      },
    ).catch((erro) => erro);
  };

  const signup = async (prop) => {
    if (!cliente.username || !cliente.password) return alert('Usuário/Senha obrigatório');

    const url = 'http://localhost:3333/sign-up';
    const method = 'POST';

    const dadosRequisicao = new Request(url, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cliente),
    });

    return fetch(dadosRequisicao).then(
      (response) => {
        response.json().then((result) => {
          if (response.status === 200) {
            prop(cliente);
            setCliente({ username: '', password: '' });
            return result;
          }
          return result;
        });
      },
    ).catch((erro) => erro);
  };

  const esqueceuSenha = async () => {
    if (!cliente.username) return alert('Informe o email');

    const url = `http://localhost:3333/forgot-password/${cliente.username}`;
    const method = 'GET';

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
            return alert(`Senha: ${result.password}`);
          }
          return alert(result);
        });
      },
    ).catch((erro) => alert(erro));
  };

  return (
    <section className="mainLogin">
      {username ? <Redirect to="/" />
        : (
          <div className="formLogin">
            <div className="formTitle">
              <span data-testid="login-de-acesso">LOGIN DE ACESSO</span>
            </div>
            <div className="formMain">
              <input
                name="username"
                className="styleInput"
                data-testid="input-email"
                type="text"
                onChange={(e) => handleChange(e)}
                value={cliente.username}
                placeholder="Digite seu Email"
              />
              <input
                name="password"
                className="styleInput"
                data-testid="input-password"
                type="password"
                onChange={(e) => handleChange(e)}
                value={cliente.password}
                placeholder="Digite sua senha"
              />
              <div className="formFooter">
                <button onClick={() => signin(updateCliente)} type="button">Fazer Login</button>
                <button onClick={() => signup(updateCliente)} type="button">Cadastre-se</button>
              </div>
              <div className="containnerButtons">
                <Link onClick={() => esqueceuSenha()} to="#">
                  {' '}
                  Esqueci minha senha
                  {' '}
                </Link>
              </div>
            </div>
          </div>
        )}

    </section>
  );
}

// Recebe o valor via props
const mapStateToProps = (state) => ({
  retornoCliente: state.clienteReducer,
});

// envia o valor para a Action
const mapDispatchToProps = (dispatch) => ({
  updateCliente: (value) => dispatch(changeCliente(value)),
});

// Faz a conexão Redux
export default connect(mapStateToProps, mapDispatchToProps)(Login);

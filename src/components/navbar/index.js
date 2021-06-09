/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeCliente } from '../../store/actions/cliente.action';
import './style.css';

function NavBar({ retornoCliente, updateCliente }) {
  const { username } = retornoCliente.cliente;
  const [loading, setLoading] = useState(true);

  const carregamentoInicial = () => {
    setLoading(false);
  };

  useEffect(() => {
    carregamentoInicial();
  }, []);

  const logout = (props) => {
    props({});
      <Link to="/login" />;
  };

  const itensDoMenuLogin = [
    {
      key: '01',
      nome: 'SOBRE O TESTE',
      icone: <i className="fas fa-question" />,
      rota: '/',
    },
    {
      key: '02',
      nome: 'TESTAR PROJETO',
      icone: <i className="fas fa-vials" />,
      rota: '/opinar',
    },
    {
      key: '03',
      nome: 'GERENCIAR',
      icone: <i className="fas fa-cog" />,
      rota: '/gerenciar',
    },
    {
      key: '04',
      nome: 'LOGIN',
      icone: <i className="fas fa-user" />,
      rota: '/login',
    },
  ];

  const itensDoMenuLogout = [
    {
      key: '01',
      nome: 'SOBRE O TESTE',
      icone: <i className="fas fa-question" />,
      rota: '/',
    },
    {
      key: '02',
      nome: 'TESTAR PROJETO',
      icone: <i className="fas fa-vials" />,
      rota: '/opinar',
    },
    {
      key: '03',
      nome: 'GERENCIAR',
      icone: <i className="fas fa-cog" />,
      rota: '/gerenciar',
    },
    {
      key: '04',
      nome: 'LOGOUT',
      icone: <i className="fas fa-user" />,
      rota: '/gerenciar',
    },
  ];

  function clickMenu() {
    let menu = document.querySelector('.barraOculta');
    try {
      if (menu && menu.classList.contains('barraOculta')) {
        menu.classList.remove('barraOculta');
        menu.classList.add('barraOcultaShow');
      } else {
        menu = document.querySelector('.barraOcultaShow');
        menu.classList.remove('barraOcultaShow');
        menu.classList.add('barraOculta');
      }
    } catch (error) {
      const menu1 = document.querySelector('.barraInvisivel');
      menu1.classList.remove('barraInvisivel');
      menu1.classList.add('barraOcultaShow');
    }
  }

  return (
    <>
      { loading ? <h1> Carregando </h1>
        : (
          <section className="navbar">
            <section className="barraInvisivel">
              {
              username ? itensDoMenuLogout.map((item) => (
                <section
                  key={item.key}
                  onClick={() => (item.nome === 'LOGOUT' ? logout(updateCliente) : <Link to={item.rota} />)}
                  className="itemDoMenu"
                >
                  <span>
                    {item.icone}
                    <Link onClick={() => clickMenu()} to={item.rota}>
                      {' '}
                      {item.nome}
                      {' '}
                    </Link>
                  </span>
                </section>
              )) : itensDoMenuLogin.map((item) => (
                <section
                  key={item.key}
                  className="itemDoMenu"
                >
                  <span>
                    {item.icone}
                    <Link onClick={() => clickMenu()} to={item.rota}>
                      {' '}
                      {item.nome}
                      {' '}
                    </Link>
                  </span>
                </section>
              ))
            }
            </section>
            <section className="barraVisivel">

              <div className="menu">
                <i onClick={() => clickMenu()} className="fas fa-bars" />
              </div>

              <span className="centerNavbar">
                TESTE SEGWARE DO BRASIL
              </span>

              <span className="saldoRestante">
                {
                  !username
                    ? 'USUARIO DESLOGADO'
                    : username
                }
              </span>
            </section>
          </section>
        )}
    </>
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
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

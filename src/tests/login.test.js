import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from '../helpers/renderWithRouterAndRedux';
import App from '../App';

describe('Testa a página de login', () => {
  test('renderiza a página inicial ao entrar no app', () => {
    renderWithRouterAndRedux(
      <App />,
      {
        initialEntries: ['/'],
        initialState: {
          clienteReducer: {
            cliente: {
              email: 'qualquer@qualquer.com',
              password: '12345',
            },
          },
        },
      },
    );

    const pageTitle = screen.getByText('A aplicação precisa permitir:');
    expect(pageTitle).toBeInTheDocument();
  });

  test('faz o login após digitar o email e a senha', () => {
    renderWithRouterAndRedux(
      <App />,
      {
        initialEntries: ['/login'],
        initialState: {
          clienteReducer: {
            cliente: {},
          },
        },
      },
    );

    const emailInput = screen.getByTestId('input-email');
    const passwordInput = screen.getByTestId('input-password');

    userEvent.type(emailInput, 'exemplo@exemplo.com');
    userEvent.type(passwordInput, 'exemplo');

    const loginButton = screen.getByText('Fazer Login');
    userEvent.click(loginButton);
  });
});

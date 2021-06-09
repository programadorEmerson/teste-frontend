import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import renderWithRouterAndRedux from '../helpers/renderWithRouterAndRedux';

describe('Pagina renderizada ao carregar a aplicação no caminho `/`', () => {
  test('Verifica se existe um título`', () => {
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
    const elementTitulo = screen.getByTestId('titulo');
    expect(elementTitulo).toBeInTheDocument();
  });

  test('Verifica se existe uma imagem de ilustração`', () => {
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
    const imagem = screen.getByRole('img');
    expect(imagem).toBeInTheDocument();
  });
});

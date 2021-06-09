import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderWithRouterAndRedux from '../helpers/renderWithRouterAndRedux';
import App from '../App';
import Opinar from '../viwers/teste/opinar';

describe('Testa a página de opinar', () => {
  test('Testa se a página renderiza pela rota com parâmetro', () => {
    const { history } = renderWithRouterAndRedux(
      <App />,
      {
        initialEntries: ['/opinar/60bf9b50478db11a0cf7529d'],
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

    expect(history.location.pathname).toBe('/opinar/60bf9b50478db11a0cf7529d');
  });

  test('Testa se a página renderiza utiliza mock', async () => {
    const mensagem = {
      texto: 'A religião é um dos fenômenos mais importantes...',
    };

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mensagem),
    });

    const { findByText } = renderWithRouterAndRedux(
      <Opinar />,
      {
        initialEntries: ['/opinar/60bf9b50478db11a0cf7529d'],
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

    await findByText('A religião é um dos fenômenos mais importantes...');
  });
});

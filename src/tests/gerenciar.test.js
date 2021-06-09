import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gerenciar from '../viwers/gerenciar';
import renderWhithRedux from '../helpers/renderWithRedux';

describe('Testando a viwer gerenciar', () => {
  test('verifica se existe o botão apagar postagens`', () => {
    renderWhithRedux(<Gerenciar />);
    const botaoApagar = screen.getByRole('button', { name: /apagar postagens/i });
    const callback = {
      status: 200,
    };
    const response = { json: jest.fn().mockResolvedValue(callback) };
    fireEvent.click(botaoApagar);
    expect(botaoApagar).toBeInTheDocument();
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(response),
    });
  });

  test('verifica se existe o botão apagar usuários`', () => {
    renderWhithRedux(<Gerenciar />);
    const botaoApagar = screen.getByRole('button', { name: /Apagar Usuários/i });
    const callback = {
      status: 200,
    };
    const response = { json: jest.fn().mockResolvedValue(callback) };
    fireEvent.click(botaoApagar);
    expect(botaoApagar).toBeInTheDocument();
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(response),
    });
  });
});

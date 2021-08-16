import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
   // Acessa os elementos da tela
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);

  // Faz o teste nos elementos acessados
  expect(linkElement).toBeInTheDocument();
});

test('Verificando se existe o campo Email.', () => {
  // Acessa os elementos da tela
  const { getByLabelText } = render(<App />);
  const inputEmail = getByLabelText('Email');

  // Faz o teste nos elementos acessados
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email');
});

test('Verificando se existe um botão de enviar', () => {
  // Acessa os elementos da tela
  const { getByTestId } = render(<App />);
  const btnSend = getByTestId('id-send');

  // Faz o teste nos elementos acessados
  expect(btnSend).toBeInTheDocument();
  expect(btnSend.type).toBe('button');
  expect(btnSend).toHaveValue('Enviar');
});

test('Verificando se existe dois botões', () => {
  // Acessa os elementos da tela
  const { getAllByRole } = render(<App />);
  const buttons = getAllByRole('button');

  // Faz o teste nos elementos acessados
  expect(buttons.length).toBe(2);
});
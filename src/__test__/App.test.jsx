import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App Component', () => {
  // vite logo
  test('render vite logo', () => {
    render(<App />);
    const viteLogo = screen.getByAltText('Vite logo');
    expect(viteLogo).toBeInTheDocument();
  });

  // react logo
  test('render react logo', () => {
    render(<App />);
    const reactLogo = screen.getByAltText('React logo');
    expect(reactLogo).toBeInTheDocument();
  });

  // display count is 0
  test("display count is 0", () => {
    render(<App />);
    const count = screen.getByText('count is 0');
    expect(count).toBeInTheDocument();
  });

  // increment count
  test("increment count", () => {
    render(<App />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const count = screen.getByText('count is 1');
    expect(count).toBeInTheDocument();
  })

  // render h1
  test('render h1', () => {
    render(<App />);
    const h1 = screen.getByText('Vite + React');
    expect(h1).toBeInTheDocument();
  });

});

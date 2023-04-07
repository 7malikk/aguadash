import { screen, render } from '@testing-library/react';
import { Home } from './pages';
import { BrowserRouter } from 'react-router-dom';

it('renders homepage', () => {
  // Arrange
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  // Act
  const hompage = screen.queryByLabelText(/homepage/i);

  // Assert
  expect(hompage).toBeInTheDocument();
});

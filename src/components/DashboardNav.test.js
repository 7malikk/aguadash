import { screen, render } from '@testing-library/react';
import DashboardNav from './DashboardNav';
import { AppContext } from '../context/AppContext';
import { BrowserRouter } from 'react-router-dom';
import { formatPrice } from '../helpers/helperFunctions';

it('renders username and current rate', () => {
  // Arrange
  const mockData = { userData: { name: 'malikk' }, settings: { rate: 234 } };

  render(
    <BrowserRouter>
      <AppContext.Provider value={{ ...mockData }}>
        <DashboardNav />
      </AppContext.Provider>
    </BrowserRouter>
  );

  // Act
  const username = screen.getByRole('heading', {
    name: `Hello, ${mockData.userData.name}`,
  });
  const rate = screen.getByRole('heading', {
    name: `Current Selling Rate: ${formatPrice(mockData.settings.rate)}`,
  });

  //Assert
  expect(username.innerHTML).toEqual(`Hello, ${mockData.userData.name}`);
  expect(rate.innerHTML).toEqual(
    `Current Selling Rate: ${formatPrice(mockData.settings.rate)}`
  );
});

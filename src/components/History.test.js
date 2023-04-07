import { screen, render } from '@testing-library/react';
import History from './History';
import { AppContext } from '../context/AppContext';
import { BrowserRouter } from 'react-router-dom';
import { formatPrice } from '../helpers/helperFunctions';

it('renders user total spent, total orders, total bags and deliveredOrders', () => {
  // Arrange
  const mockData = {
    deliveredOrders: [
      {
        'number of bags': 12,
        date: '2023-04-07',
        time: '16:38',
        amount: 2300,
        status: 'Delivered',
        address: '2, Ejiwumni Street, Alabgado',
      },
    ],
  };
  render(
    <BrowserRouter>
      <AppContext.Provider value={{ ...mockData }}>
        <History />
      </AppContext.Provider>
    </BrowserRouter>
  );

  // Act
  const numOfBags = screen.getByRole('heading', {
    name: `${mockData.deliveredOrders[0]['number of bags']} Bag(s)`,
  });
  const date = screen.getByRole('heading', {
    name: mockData.deliveredOrders[0].date,
  });
  const time = screen.getByRole('heading', {
    name: mockData.deliveredOrders[0].time,
  });
  const amount = screen.getByRole('heading', {
    name: formatPrice(mockData.deliveredOrders[0].amount),
  });
  const address = screen.getByRole('heading', {
    name: mockData.deliveredOrders[0].address,
  });
  const status = screen.getByRole('heading', {
    name: mockData.deliveredOrders[0].status,
  });

  // Assert
  expect(numOfBags.innerHTML).toEqual(
    `${mockData.deliveredOrders[0]['number of bags']} Bag(s)`
  );
  expect(date.innerHTML).toEqual(mockData.deliveredOrders[0].date);
  expect(time.innerHTML).toEqual(mockData.deliveredOrders[0].time);
  expect(address.innerHTML).toEqual(mockData.deliveredOrders[0].address);
  expect(status.innerHTML).toEqual(mockData.deliveredOrders[0].status);
  expect(amount.innerHTML).toEqual(
    formatPrice(mockData.deliveredOrders[0].amount)
  );
});

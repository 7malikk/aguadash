import { screen, render } from '@testing-library/react';
import Overview from './Overview';
import { AppContext } from '../context/AppContext';
import { BrowserRouter } from 'react-router-dom';
import { formatPrice } from '../helpers/helperFunctions';

test('renders user total spent, total orders, total bags and deliveredOrders', () => {
  // Arrange
  const mockData = {
    userData: {
      totalSpent: 30023,
      totalOrders: 5,
      totalBags: 34,
    },
    deliveredOrders: [
      {
        'number of bags': 12,
        date: '2023-04-07',
        time: '16:38',
        amount: 2300,
      },
    ],
  };
  render(
    <BrowserRouter>
      <AppContext.Provider value={{ ...mockData }}>
        <Overview />
      </AppContext.Provider>
    </BrowserRouter>
  );

  // Act
  const totalSpent = screen.getByRole('heading', {
    name: formatPrice(mockData.userData.totalSpent),
  });
  const totalOrders = screen.getByRole('heading', {
    name: mockData.userData.totalOrders,
  });
  const totalBags = screen.getByRole('heading', {
    name: mockData.userData.totalBags,
  });
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

  // Assert
  expect(totalSpent.innerHTML).toEqual(
    formatPrice(mockData.userData.totalSpent)
  );
  expect(Number(totalOrders.innerHTML)).toEqual(mockData.userData.totalOrders);
  expect(Number(totalBags.innerHTML)).toEqual(mockData.userData.totalBags);
  expect(numOfBags.innerHTML).toEqual(
    `${mockData.deliveredOrders[0]['number of bags']} Bag(s)`
  );
  expect(date.innerHTML).toEqual(mockData.deliveredOrders[0].date);
  expect(time.innerHTML).toEqual(mockData.deliveredOrders[0].time);
  expect(amount.innerHTML).toEqual(
    formatPrice(mockData.deliveredOrders[0].amount)
  );
});

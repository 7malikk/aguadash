import { screen, render } from '@testing-library/react';
import AdminOverview from './AdminOverview';
import { AppContext } from '../context/AppContext';
import { BrowserRouter } from 'react-router-dom';
import { formatPrice } from '../helpers/helperFunctions';

test('renders total users, total orders, and ongoinOrders', () => {
  // Arrange
  const mockData = {
    allUsers: [1, 2, 3, 4],
    allOrders: [
      {
        'number of bags': 12,
        date: '2023-04-07',
        time: '16:38',
        amount: 2300,
        status: 'Delivered',
      },
      {
        'number of bags': 12,
        date: '2023-04-07',
        time: '16:38',
        amount: 2300,
        status: 'In Transit',
      },
      {
        'number of bags': 12,
        date: '2023-04-07',
        time: '16:38',
        amount: 2300,
        status: 'Processing',
      },
    ],
  };
  const delivered = mockData.allOrders?.filter(
    (order) => order.status === 'Delivered'
  );
  const ongoingOrders = mockData.allOrders?.filter(
    (order) => order.status !== 'Delivered'
  );

  render(
    <BrowserRouter>
      <AppContext.Provider value={{ ...mockData }}>
        <AdminOverview />
      </AppContext.Provider>
    </BrowserRouter>
  );

  // Act
  const allDelivered = screen.getByTestId('allDelivered');
  const allUsers = screen.getByTestId('allUsers');
  const bags = screen.getAllByTestId('bags');
  const date = screen.getAllByTestId('date');
  const time = screen.getAllByTestId('time');
  const amount = screen.getAllByTestId('amount');
  const status = screen.getAllByTestId('status');

  // Assert
  expect(Number(allDelivered.innerHTML)).toEqual(delivered.length);
  expect(Number(allUsers.innerHTML)).toEqual(mockData.allUsers.length);
  expect(bags[0].innerHTML).toEqual(
    `${ongoingOrders[0]['number of bags']} Bag(s)`
  );
  expect(date[0].innerHTML).toEqual(ongoingOrders[0].date);
  expect(time[0].innerHTML).toEqual(ongoingOrders[0].time);
  expect(amount[0].innerHTML).toEqual(formatPrice(ongoingOrders[0].amount));
  expect(status[0].innerHTML).toEqual(ongoingOrders[0].status);
});

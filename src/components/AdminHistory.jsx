import React from 'react';
import { empty } from '../assets';
import { formatPrice } from '../helpers/helperFunctions';
import { useAppContext } from '../context/AppContext';

const AdminHistory = () => {
  const { allOrders } = useAppContext();
  const deliveredOrders = allOrders?.filter(
    (order) => order.status === 'Delivered'
  );
  return (
    <main className="bg-white m-6 p-6 rounded-2xl space-y-6  ">
      <h1 className="font-semibold text-4xl">History</h1>
      <div className="cards  grid grid-cols-1 gap-8">
        {deliveredOrders.length > 0 ? (
          deliveredOrders.map((order, i) => {
            return (
              <div
                key={i}
                className="cardOne grid grid-cols-1 tablet:grid-cols-2 gap-8 shadow-md p-6 rounded-xl bg-black text-white">
                <div>
                  <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-xl">
                    Order
                  </h4>
                  <h1 className="text-2xl font-semibold mt-2">
                    {order['number of bags']} Bag(s)
                  </h1>
                </div>
                <div>
                  <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-xl">
                    User Phone number
                  </h4>
                  <h1 className="text-2xl font-semibold mt-2">
                    {order.phone}{' '}
                  </h1>
                </div>
                <div>
                  <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-xl">
                    User name
                  </h4>
                  <h1 className="text-2xl font-semibold mt-2">{order.name} </h1>
                </div>
                <div>
                  <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-xl">
                    Status
                  </h4>
                  <h1 className="text-2xl font-semibold mt-2">
                    {order.status}
                  </h1>
                </div>

                <div>
                  <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-xl">
                    Date
                  </h4>
                  <h1 className="text-2xl font-semibold mt-2">{order.date}</h1>
                </div>
                <div>
                  <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-xl">
                    Time
                  </h4>
                  <h1 className="text-2xl font-semibold mt-2">{order.time}</h1>
                </div>
                <div>
                  <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-xl">
                    Amount Paid
                  </h4>
                  <h1 className="text-2xl font-semibold mt-2">
                    {formatPrice(order.amount)}
                  </h1>
                </div>
                <div>
                  <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-xl">
                    User email
                  </h4>
                  <h1 className="text-2xl font-semibold mt-2">{order.email}</h1>
                </div>
                <div className="col-span-2">
                  <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-xl">
                    Address
                  </h4>
                  <h1 className="text-2xl font-semibold mt-2">
                    {order.address}
                  </h1>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col justify-center items-center space-y-2">
            <img src={empty} alt="empty" />
            <h4 className="text-lg font-semibold">
              No order has been completed, yet!
            </h4>
          </div>
        )}
      </div>
    </main>
  );
};

export default AdminHistory;

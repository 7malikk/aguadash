import React from 'react';
import { useAppContext } from '../context/AppContext';
import { empty } from '../assets';
import { Link } from 'react-router-dom';
import { formatPrice } from '../helpers/helperFunctions';

const History = () => {
  const { deliveredOrders } = useAppContext();

  return (
    <main className="bg-white m-2 p-2 tablet:m-4 tablet:p-4 laptop:m-6 laptop:p-6rounded-2xl space-y-6  ">
      <h1 className="font-semibold text-4xl">History</h1>
      <div className="cards  grid grid-cols-1 gap-8">
        {deliveredOrders.length > 0 ? (
          deliveredOrders.map((order, i) => {
            return (
              <div
                key={i}
                className="cardOne grid grid-cols-1  tablet:grid-cols-2 gap-8 shadow-md p-6 rounded-xl">
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
                    Status
                  </h4>
                  <h1 className="text-2xl font-semibold mt-2">
                    {order.status}
                  </h1>
                </div>
                <div>
                  <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-xl">
                    Address
                  </h4>
                  <h1 className="text-2xl font-semibold mt-2">
                    {order.address}
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
              </div>
            );
          })
        ) : (
          <div className="flex flex-col justify-center items-center space-y-2">
            <img src={empty} alt="empty" />
            <h4 className="text-lg font-semibold">
              You have not had a complete order, yet!
            </h4>
            <Link to="/dashboard/orders">
              <button className="bg-primary py-2 px-8 desktop:py-3 desktop:px-10 text-white  rounded-full hover:bg-hover">
                Order Now
              </button>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default History;

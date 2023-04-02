import React from 'react';
import { Link } from 'react-router-dom';
import { totalAmount, totalBags, amountOfOrders, empty } from '../assets';
import { useAppContext } from '../context/AppContext';
import { formatPrice } from '../helpers/helperFunctions';

const Overview = () => {
  const { userData, deliveredOrders } = useAppContext();
  return (
    <main className="bg-white m-6 p-6 rounded-2xl space-y-6  ">
      <h1 className="font-semibold text-4xl">Overview</h1>
      <section className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="cardOne shadow-[8px_8px_15px_-15px_rgba(0,0,0,0.3)] px-3 py-4 rounded-xl">
          <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-base">
            Total Amount Spent
            <img src={totalAmount} alt="total amount spent" />
          </h4>
          <h1 className="text-4xl font-bold mt-2">
            {userData?.totalSpent
              ? formatPrice(userData.totalSpent)
              : formatPrice(0)}
          </h1>
        </div>
        <div className="cardTwo shadow-[8px_8px_15px_-15px_rgba(0,0,0,0.3)] px-3 py-4 rounded-xl">
          <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-base">
            Total Amount Of Orders
            <img src={amountOfOrders} alt="amount of orders" />
          </h4>
          <h1 className="text-4xl font-bold mt-2">
            {userData.totalOrders ? userData.totalOrders : 0}
          </h1>
        </div>
        <div className="cardThree shadow-[8px_8px_15px_-15px_rgba(0,0,0,0.3)] px-3 py-4 rounded-xl">
          <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-base">
            Total Amount Of Bags
            <img src={totalBags} alt="total bags" />
          </h4>
          <h1 className="text-4xl font-bold mt-2">
            {userData.totalBags ? userData.totalBags : 0}
          </h1>
        </div>
      </section>
      <section className="history hidden md:block">
        <div className="flex justify-between items-baseline">
          <h1 className="font-semibold text-4xl">History</h1>
          <Link to="/dashboard/history">
            <h6 className="text-xl">See all</h6>
          </Link>
        </div>
        {deliveredOrders.length > 0 ? (
          <section className="space-y-4 mt-4">
            <div className="grid grid-cols-4 gap-8 px-6 py-4 text-left bg-lightAsh text-lg font-semibold  text-darkAsh  rounded-xl">
              <h3>NO. OF BAGS</h3>
              <h3>DATE</h3>
              <h3>TIME</h3>
              <h3>AMOUNT</h3>
            </div>
            {deliveredOrders.map((order, i) => {
              return (
                <div
                  key={i}
                  className="border  border-darkAsh grid grid-cols-4 text-lg  text-left rounded-xl">
                  <h5 className="px-6 py-4">
                    {order['number of bags']} Bag(s)
                  </h5>
                  <h5 className="px-6 py-4">{order.date}</h5>
                  <h5 className="px-6 py-4">{order.time}</h5>
                  <h5 className="px-6 py-4">{formatPrice(order.amount)}</h5>
                </div>
              );
            })}
            <div className="border  border-darkAsh grid grid-cols-4 text-lg  text-left rounded-xl">
              <h5 className="px-6 py-4">12 Bags</h5>
              <h5 className="px-6 py-4">12/2/2023</h5>
              <h5 className="px-6 py-4">12:00pm</h5>
              <h5 className="px-6 py-4">₦1200</h5>
            </div>
            <div className="border  border-darkAsh grid grid-cols-4  text-lg  text-left rounded-xl">
              <h5 className="px-6 py-4">12 Bags</h5>
              <h5 className="px-6 py-4">12/2/2023</h5>
              <h5 className="px-6 py-4">12:00pm</h5>
              <h5 className="px-6 py-4">₦1200</h5>
            </div>
            <div className="border  border-darkAsh grid grid-cols-4  text-lg  text-left rounded-xl">
              <h5 className="px-6 py-4">12 Bags</h5>
              <h5 className="px-6 py-4">12/2/2023</h5>
              <h5 className="px-6 py-4">12:00pm</h5>
              <h5 className="px-6 py-4">₦1200</h5>
            </div>
            <div className="border  border-darkAsh grid grid-cols-4  text-lg  text-left rounded-xl">
              <h5 className="px-6 py-4">12 Bags</h5>
              <h5 className="px-6 py-4">12/2/2023</h5>
              <h5 className="px-6 py-4">12:00pm</h5>
              <h5 className="px-6 py-4">₦1200</h5>
            </div>
            <div className="border  border-darkAsh grid grid-cols-4  text-lg  text-left rounded-xl">
              <h5 className="px-6 py-4">12 Bags</h5>
              <h5 className="px-6 py-4">12/2/2023</h5>
              <h5 className="px-6 py-4">12:00pm</h5>
              <h5 className="px-6 py-4">₦1200</h5>
            </div>
            <div className="border  border-darkAsh grid grid-cols-4  text-lg  text-left rounded-xl">
              <h5 className="px-6 py-4">12 Bags</h5>
              <h5 className="px-6 py-4">12/2/2023</h5>
              <h5 className="px-6 py-4">12:00pm</h5>
              <h5 className="px-6 py-4">₦1200</h5>
            </div>
          </section>
        ) : (
          <div className="flex flex-col justify-center items-center space-y-2">
            <img src={empty} alt="empty" />
            <h4 className="text-lg font-semibold">
              You have not had a successful order, yet!
            </h4>
            <Link to="/dashboard/orders">
              <button className="bg-primary py-2 px-8 xl:py-3 xl:px-10 text-white  rounded-full hover:bg-hover">
                Order Now
              </button>
            </Link>
          </div>
        )}
      </section>
    </main>
  );
};

export default Overview;

import React from 'react';
import { Link } from 'react-router-dom';
import { totalBags, people, empty } from '../assets';
import { formatPrice } from '../helpers/helperFunctions';
import { useAppContext } from '../context/AppContext';

const AdminOverview = () => {
  const { allUsers, allOrders } = useAppContext();
  const delivered = allOrders?.filter((order) => order.status === 'Delivered');
  const ongoingOrders = allOrders?.filter(
    (order) => order.status !== 'Delivered'
  );

  return (
    <main className="bg-white m-6 p-6 rounded-2xl space-y-6  ">
      <h1 className="font-semibold text-4xl">Overview</h1>
      <section className="cards grid grid-cols-1 tablet:grid-cols-2 gap-8">
        <div className="cardThree shadow-[8px_8px_15px_-15px_rgba(0,0,0,0.3)] px-3 py-4 rounded-xl">
          <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-base">
            Total Orders Delivered
            <img src={totalBags} alt="total bags" className="w-12 h-12" />
          </h4>
          <h1 data-testid="allDelivered" className="text-4xl font-bold mt-2">
            {delivered.length ? delivered.length : 0}
          </h1>
        </div>
        <div className="cardOne shadow-[8px_8px_15px_-15px_rgba(0,0,0,0.3)] px-3 py-4 rounded-xl">
          <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-base">
            Number Of Users
            <img src={people} alt="total amount spent" className="w-12 h-11" />
          </h4>
          <h1 data-testid="allUsers" className="text-4xl font-bold mt-2">
            {allUsers?.length ? allUsers?.length : 0}
          </h1>
        </div>
      </section>
      <section className="history hidden tablet:block">
        <div className="flex justify-between items-baseline">
          <h1 className="font-semibold text-4xl">Ongoing Orders</h1>
          <Link to="/merchant/orders">
            <h6 className="text-xl">See all</h6>
          </Link>
        </div>
        {ongoingOrders.length > 0 ? (
          <section className="space-y-4 mt-4">
            <div className="grid grid-cols-5 gap-4 laptop:gap-8 px-6 py-4 text-left bg-black text-base laptop:text-lg  font-semibold  text-white  rounded-md">
              <h3>NO. OF BAGS</h3>
              <h3>DATE</h3>
              <h3>TIME</h3>
              <h3>AMOUNT</h3>
              <h3>STATUS</h3>
            </div>
            {ongoingOrders.map((order, i) => {
              return (
                <div
                  key={i}
                  className=" bg-lightAsh grid grid-cols-5 text-base text-center laptop:text-left laptop:text-lg rounded-md ">
                  <h5
                    data-testid="bags"
                    className="m-2 laptop:mx-6 laptop:my-4">
                    {order['number of bags']} Bag(s)
                  </h5>
                  <h5
                    data-testid="date"
                    className="m-2 laptop:mx-6 laptop:my-4 ">
                    {order.date}
                  </h5>
                  <h5
                    data-testid="time"
                    className="m-2 laptop:mx-6 laptop:my-4 ">
                    {order.time}
                  </h5>
                  <h5
                    data-testid="amount"
                    className="m-2 laptop:mx-6 laptop:my-4 ">
                    {formatPrice(order.amount)}
                  </h5>

                  <h5
                    data-testid="status"
                    className={`${
                      order.status === 'Processing'
                        ? 'bg-processing '
                        : order.status === 'In Transit'
                        ? 'bg-inTransit'
                        : ''
                    } m-1 laptop:mx-6 laptop:my-4 text-center p-1 laptop:p-1 rounded-lg`}>
                    {order.status}
                  </h5>
                </div>
              );
            })}
          </section>
        ) : (
          <div className="flex flex-col justify-center items-center space-y-2">
            <img src={empty} alt="empty" />
            <h4 className="text-lg font-semibold">No ongoin orders for now</h4>
          </div>
        )}
      </section>
    </main>
  );
};

export default AdminOverview;

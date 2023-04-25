import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { totalAmount, totalBags, amountOfOrders, empty } from '../assets';
import { useAppContext } from '../context/AppContext';
import { formatPrice } from '../helpers/helperFunctions';
import { toast, ToastContainer } from 'react-toastify';

const Overview = () => {
  const { userData, deliveredOrders, dispatch } = useAppContext();

  useEffect(() => {
    if (userData.phone === '') {
      toast.info(
        'Navigate to the settings page and set your phone number, for easier reach during delivery'
      );
      dispatch({ type: 'TOGGLE_SIDEBAR', payload: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main
      onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR', payload: false })}
      className="bg-white m-2 p-2 tablet:m-4 tablet:p-4 laptop:m-6 laptop:p-6 rounded-2xl space-y-2 tablet:space-y-6">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
      />
      <h1 className="font-semibold text-xl  tablet:text-4xl">Overview</h1>
      <section className="cards grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-2 tablet:gap-8">
        <div className="cardOne shadow-[8px_8px_15px_-15px_rgba(0,0,0,0.3)] px-3 py-4 rounded-xl">
          <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-sm tablet:text-base">
            Total Amount Spent
            <img
              src={totalAmount}
              alt="total amount spent"
              className="w-6 h-6 tablet:w-auto tablet:h-auto"
            />
          </h4>
          <h1 className=" text-xl tablet:text-4xl font-bold tablet:mt-2">
            {userData?.totalSpent
              ? formatPrice(userData.totalSpent)
              : formatPrice(0)}
          </h1>
        </div>
        <div className="cardTwo shadow-[8px_8px_15px_-15px_rgba(0,0,0,0.3)] px-3 py-4 rounded-xl">
          <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-sm tablet:text-base">
            Total Amount Of Orders
            <img
              src={amountOfOrders}
              alt="amount of orders"
              className="w-6 h-6 tablet:w-auto tablet:h-auto"
            />
          </h4>
          <h1 className="text-xl tablet:text-4xl font-bold tablet:mt-2">
            {userData.totalOrders ? userData.totalOrders : 0}
          </h1>
        </div>
        <div className="cardThree col-start-auto tablet:card-start-1 laptop:card-start-auto shadow-[8px_8px_15px_-15px_rgba(0,0,0,0.3)] px-3 py-4 rounded-xl">
          <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-sm tablet:text-base">
            Total Amount Of Bags
            <img
              src={totalBags}
              alt="total bags"
              className="w-6 h-6 tablet:w-auto tablet:h-auto"
            />
          </h4>
          <h1 className="text-xl tablet:text-4xl font-bold tablet:mt-2">
            {userData.totalBags ? userData.totalBags : 0}
          </h1>
        </div>
      </section>
      <section className="history">
        <div className="flex justify-between items-baseline">
          <h1 className="font-semibold text-xl  tablet:text-4xl">History</h1>
          <Link to="/dashboard/history">
            <h6 className="text-base tablet:text-xl">See all</h6>
          </Link>
        </div>
        {deliveredOrders.length > 0 ? (
          <section className="overflow-x-auto">
            <section className="space-y-4 mt-4 w-max tablet:w-auto ">
              <div className="grid grid-cols-4 gap-4 laptop:gap-8 px-6 py-4 text-center bg-black text-base laptop:text-lg  font-semibold  text-white  rounded-md">
                <h3>NO. OF BAGS</h3>
                <h3>DATE</h3>
                <h3>TIME</h3>
                <h3>AMOUNT</h3>
              </div>
              {deliveredOrders.map((order, i) => {
                return (
                  <div
                    key={i}
                    className=" bg-lightAsh grid grid-cols-4 text-base text-center laptop:text-lg rounded-md ">
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
                      data-testid="status"
                      className={' m-2 laptop:mx-6 laptop:my-4'}>
                      {order.time}
                    </h5>

                    <h5
                      data-testid="amount"
                      className="m-2 laptop:mx-6 laptop:my-4">
                      {formatPrice(order.amount)}
                    </h5>
                  </div>
                );
              })}
            </section>
          </section>
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
      </section>
    </main>
  );
};

export default Overview;

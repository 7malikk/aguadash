import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { formatPrice } from '../../helpers/helperFunctions';

function OngoingOrder({ setOrder, handleButtonclicked }) {
  const { processingOrders } = useAppContext();

  return (
    <div className="mt-[10px] shadow border p-[10px] space-y-3 tablet:space-y-6 ">
      {processingOrders.length > 0 ? (
        processingOrders.map((order, i) => {
          return (
            <div
              key={i}
              className="cardOne grid grid-cols-2 gap-2 tablet:gap-8 shadow-md p-3 tablet:p-6 rounded-xl bg-lightAsh text-black">
              <div>
                <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-sm tablet:text-xl">
                  Order
                </h4>
                <h1 className="text-base tablet:text-2xl font-semibold tablet:mt-2 ">
                  {order['number of bags']} Bag(s)
                </h1>
              </div>
              <div>
                <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-sm tablet:text-xl">
                  Status
                </h4>
                <h1 className="text-base tablet:text-2xl font-semibold tablet:mt-2 ">
                  {order.status}
                </h1>
              </div>

              <div>
                <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-sm tablet:text-xl">
                  Date
                </h4>
                <h1 className="text-base tablet:text-2xl font-semibold tablet:mt-2 ">
                  {order.date}
                </h1>
              </div>
              <div>
                <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-sm tablet:text-xl">
                  Time
                </h4>
                <h1 className="text-base tablet:text-2xl font-semibold tablet:mt-2 ">
                  {order.time}
                </h1>
              </div>
              <div>
                <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-sm tablet:text-xl">
                  Address
                </h4>
                <h1 className="text-base tablet:text-2xl font-semibold tablet:mt-2  break-words">
                  {order.address}
                </h1>
              </div>
              <div>
                <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-sm tablet:text-xl">
                  Amount Paid
                </h4>
                <h1 className="text-base tablet:text-2xl font-semibold tablet:mt-2 ">
                  {formatPrice(order.amount)}
                </h1>
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex flex-col justify-center items-center space-y-2">
          <h4 className="text-lg font-semibold">No ongoing orders</h4>
          <button
            onClick={() => {
              setOrder('compo1');
              handleButtonclicked(1);
            }}
            className="bg-primary py-2 px-8 desktop:py-3 desktop:px-10 text-white  rounded-full hover:bg-hover">
            Order Now
          </button>
        </div>
      )}
    </div>
  );
}

export default OngoingOrder;

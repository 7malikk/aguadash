import React, { useState } from 'react';
import InputOrder from './input.order';
import OngoingOrder from './ongoing.order';
import { useAppContext } from '../../context/AppContext';

function Order() {
  const [buttonClicked, setButtonclicked] = useState(1);
  const [order, setOrder] = useState('compo1');
  const { processingOrders } = useAppContext();

  const handleButtonclicked = (number) => {
    setButtonclicked(number);
  };

  return (
    <div className="bg-white m-6 p-6 rounded-2xl space-y-6 font-semibold flex flex-col justify-center">
      <nav className=" bg-white flex justify-evenly border-black border py-2 px-4 rounded-md  text-base tablet:text-xl desktop:text-4xl">
        <button
          className={`${
            buttonClicked === 1
              ? 'bg-primary text-white '
              : 'bg-white text-black'
          } w-1/2 rounded  h-auto desktop:h-[75px]`}
          onClick={() => {
            setOrder('compo1');
            handleButtonclicked(1);
          }}>
          Place Order
        </button>
        <button
          className={`${
            buttonClicked === 2
              ? 'bg-black text-white '
              : 'bg-white text-darkAsh'
          } w-1/2 rounded px-3 py-2`}
          onClick={() => {
            setOrder('compo2');
            handleButtonclicked(2);
          }}>
          Ongoing Orders
          {processingOrders.length ? (
            <span
              className={`${
                order === 'compo2'
                  ? 'bg-white text-black'
                  : 'bg-black text-lightAsh'
              } rounded-full px-1 py-0 tablet:px-4 tablet:py-1 text-base tablet:text-2xl ml-2 tablet:ml-3`}>
              {processingOrders.length}
            </span>
          ) : null}
        </button>
      </nav>
      {order === 'compo1' && <InputOrder />}
      {order === 'compo2' && (
        <OngoingOrder
          setOrder={setOrder}
          handleButtonclicked={handleButtonclicked}
        />
      )}
    </div>
  );
}

export default Order;

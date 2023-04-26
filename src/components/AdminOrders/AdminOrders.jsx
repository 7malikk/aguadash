import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import Processing from './Processing';
import InTransit from './InTransit';

const AdminOrders = () => {
  const [buttonClicked, setButtonclicked] = useState(1);
  const [order, setOrder] = useState('compo1');
  const { allOrders, dispatch } = useAppContext();

  const inTransit = allOrders?.filter((order) => order.status === 'In Transit');
  const processing = allOrders?.filter(
    (order) => order.status === 'Processing'
  );

  const handleButtonclicked = (number) => {
    setButtonclicked(number);
  };
  return (
    <div
      onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR', payload: false })}
      className="bg-white  m-2 p-2 tablet:m-4 tablet:p-4 laptop:m-6 laptop:p-6 space-y-6  rounded-2xl  font-semibold flex flex-col justify-center">
      <nav className=" bg-white flex justify-evenly border-black border p-2 rounded-md  text-sm tablet:text-xl desktop:text-4xl">
        {/* processing */}
        <button
          className={`${
            buttonClicked === 1
              ? 'bg-primary text-white '
              : 'bg-white text-black'
          } w-1/2 rounded  h-auto desktop:h-[75px] `}
          onClick={() => {
            setOrder('compo1');
            handleButtonclicked(1);
          }}>
          Processing
          {processing.length ? (
            <span
              className={`${
                order === 'compo2'
                  ? 'bg-primary text-white'
                  : 'bg-white text-black'
              } rounded-full px-1 py-0 laptop:px-4 laptop:py-1 text-base laptop:text-2xl ml-2 laptop:ml-3`}>
              {processing.length}
            </span>
          ) : null}
        </button>

        {/* in transit */}
        <button
          className={`${
            buttonClicked === 2
              ? 'bg-primary text-white '
              : 'bg-white text-black'
          } w-1/2 rounded py-1 tablet:px-3 tablet:py-2`}
          onClick={() => {
            setOrder('compo2');
            handleButtonclicked(2);
          }}>
          In Transit
          {inTransit.length ? (
            <span
              className={`${
                order === 'compo1'
                  ? 'bg-primary text-white'
                  : 'bg-white text-black'
              } rounded-full px-1 py-0 laptop:px-4 laptop:py-1 text-base laptop:text-2xl ml-2 laptop:ml-3`}>
              {inTransit.length}
            </span>
          ) : null}
        </button>
      </nav>
      {order === 'compo1' && <Processing processing={processing} />}
      {order === 'compo2' && <InTransit inTransit={inTransit} />}
    </div>
  );
};

export default AdminOrders;

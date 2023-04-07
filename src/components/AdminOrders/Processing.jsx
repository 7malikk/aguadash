import React from 'react';
import { formatPrice } from '../../helpers/helperFunctions';
import { useAppContext } from '../../context/AppContext';

const Processing = ({ processing }) => {
  const { allOrders, handleUpdatedOrder } = useAppContext();
  const handleChange = (e, orderUpdate) => {
    const value = e.target.value;
    const getOrderToBeUpdated = allOrders.filter(
      (order) => order.id === orderUpdate.id
    );
    const updatedOrder = { ...getOrderToBeUpdated[0], status: value };
    handleUpdatedOrder(updatedOrder);
  };
  return (
    <div className="mt-[10px] shadow border p-[10px] space-y-6 ">
      {processing.length > 0 ? (
        processing.map((order, i) => {
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
                <h1 className="text-2xl font-semibold mt-2">{order.phone} </h1>
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
                <select
                  data-testid="select"
                  onChange={(e) => handleChange(e, order)}
                  className="text-2xl font-semibold text-black  mt-2 outline-none border-none">
                  <option value={order.status}>{order.status}</option>
                  <option value="In Transit">In Tranist</option>
                </select>
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
              <div className="cols-span-1 tablet:col-span-2">
                <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-xl">
                  Address
                </h4>
                <h1 className="text-2xl font-semibold mt-2">{order.address}</h1>
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex flex-col justify-center items-center space-y-2">
          <h4 className="text-lg font-semibold">No processing orders</h4>
        </div>
      )}
    </div>
  );
};

export default Processing;

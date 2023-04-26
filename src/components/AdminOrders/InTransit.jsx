import React from 'react';
import { formatPrice } from '../../helpers/helperFunctions';
import { useAppContext } from '../../context/AppContext';

const InTransit = ({ inTransit }) => {
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
    <>
      <div className="mt-[10px] shadow border p-[10px] space-y-3 tablet:space-y-6 ">
        {inTransit.length > 0 ? (
          inTransit.map((order, i) => {
            return (
              <div
                key={i}
                className="cardOne grid grid-cols-2 gap-2 tablet:gap-8 shadow-md p-3 tablet:p-6  rounded-xl bg-lightAsh text-black">
                <div>
                  <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-sm tablet:text-xl">
                    Order
                  </h4>
                  <h1 className="text-base tablet:text-2xl font-semibold tablet:mt-2">
                    {order['number of bags']} Bag(s)
                  </h1>
                </div>
                <div>
                  <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-sm tablet:text-xl">
                    User Phone
                  </h4>
                  <h1 className="text-base tablet:text-2xl font-semibold tablet:mt-2">
                    {order.phone}{' '}
                  </h1>
                </div>
                <div>
                  <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-sm tablet:text-xl">
                    Username
                  </h4>
                  <h1 className="text-base tablet:text-2xl font-semibold tablet:mt-2">
                    {order.name}{' '}
                  </h1>
                </div>
                <div>
                  <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-sm tablet:text-xl">
                    Status
                  </h4>
                  <select
                    data-testid="select"
                    onChange={(e) => handleChange(e, order)}
                    className="text-base tablet:text-2xl font-semibold text-black  tablet:mt-2 outline-none border-none">
                    <option value={order.status}>{order.status}</option>
                    <option value="Processing">Processing</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>

                <div>
                  <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-sm tablet:text-xl">
                    Date
                  </h4>
                  <h1 className="text-base tablet:text-2xl font-semibold tablet:mt-2">
                    {order.date}
                  </h1>
                </div>
                <div>
                  <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-sm tablet:text-xl">
                    Time
                  </h4>
                  <h1 className="text-base tablet:text-2xl font-semibold tablet:mt-2">
                    {order.time}
                  </h1>
                </div>
                <div>
                  <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-sm tablet:text-xl">
                    Amount Paid
                  </h4>
                  <h1 className="text-base tablet:text-2xl font-semibold tablet:mt-2">
                    {formatPrice(order.amount)}
                  </h1>
                </div>
                <div>
                  <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-sm tablet:text-xl">
                    User email
                  </h4>
                  <h1 className="text-base tablet:text-2xl font-semibold tablet:mt-2 break-words">
                    {order.email}
                  </h1>
                </div>
                <div className="col-span-2">
                  <h4 className="flex justify-between items-center  text-darkAsh font-semibold text-sm tablet:text-xl">
                    Address
                  </h4>
                  <h1 className="text-base tablet:text-2xl font-semibold tablet:mt-2 break-words">
                    {order.address}
                  </h1>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col justify-center items-center space-y-2">
            <h4 className="text-lg font-semibold">No orders in transit</h4>
          </div>
        )}
      </div>
    </>
  );
};

export default InTransit;

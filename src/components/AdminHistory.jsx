import React, { useState } from 'react';
import { empty } from '../assets';
import { formatPrice } from '../helpers/helperFunctions';
import { useAppContext } from '../context/AppContext';
import HistoryModal from './Modals/HistoryModal';

const AdminHistory = () => {
  const { allOrders } = useAppContext();
  const deliveredOrders = allOrders?.filter(
    (order) => order.status === 'Delivered'
  );
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [data, setData] = useState({});

  const handleClick = (order) => {
    setShowHistoryModal(true);
    setData(order);
  };

  return (
    <>
      <main className="bg-white  m-2 p-2 tablet:m-4 tablet:p-4 laptop:m-6 laptop:p-6 rounded-2xl space-y-3 laptop:space-y-6  ">
        <h1 className="font-semibold text-4xl">History</h1>
        {deliveredOrders.length > 0 ? (
          <section className="overflow-x-auto">
            <section className="space-y-4 mt-4 w-max tablet:w-auto ">
              <div className="grid grid-cols-5 gap-4 laptop:gap-8 px-6 py-4 text-left bg-black text-base laptop:text-lg  font-semibold  text-white  rounded-md">
                <h3>USERNAME</h3>
                <h3>NO. OF BAGS</h3>
                <h3>DATE</h3>
                <h3>AMOUNT</h3>
                <h3>STATUS</h3>
              </div>
              {deliveredOrders.map((order, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => handleClick(order)}
                    className=" bg-lightAsh grid grid-cols-5 text-base text-left laptop:text-lg rounded-md hover:cursor-pointer hover:bg-[#6D6D6D30]">
                    <h5
                      data-testid="time"
                      className="m-2 laptop:mx-6 laptop:my-4">
                      {order.name}
                    </h5>
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
                      data-testid="amount"
                      className="m-2 laptop:mx-6 laptop:my-4">
                      {formatPrice(order.amount)}
                    </h5>

                    <h5
                      data-testid="status"
                      className={' m-2 laptop:mx-6 laptop:my-4'}>
                      {order.status}
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
              No order has been completed, yet!
            </h4>
          </div>
        )}
      </main>
      <HistoryModal
        data={data}
        setShowHistoryModal={setShowHistoryModal}
        showHistoryModal={showHistoryModal}
      />
    </>
  );
};

export default AdminHistory;

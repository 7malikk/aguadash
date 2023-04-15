import React from 'react';
import Modal from '../Modal';
import { formatPrice } from '../../helpers/helperFunctions';

const HistoryModal = ({ data, setShowHistoryModal, showHistoryModal }) => {
  return (
    <Modal
      showModal={showHistoryModal}
      closeModal={() => setShowHistoryModal(false)}>
      <section className="flex flex-col ">
        <h4 className="font-semibold px-3 pb-3 text-lg">Order Info</h4>
        <hr />
        <div className="p-6 grid grid-cols-1 tablet:grid-cols-2 gap-4 ">
          <div>
            <h4 className=" text-darkAsh">Order:</h4>
            <h4 className="font-semibold text-lg">
              {data['number of bags']} Bag(s)
            </h4>
          </div>
          <div>
            <h4 className=" text-darkAsh">User Phone number:</h4>
            <h4 className="font-semibold text-lg">{data.phone}</h4>
          </div>
          <div>
            <h4 className=" text-darkAsh">Username:</h4>
            <h4 className="font-semibold text-lg">{data.name}</h4>
          </div>
          <div>
            <h4 className=" text-darkAsh">Status:</h4>
            <h4 className="font-semibold text-lg">{data.status}</h4>
          </div>
          <div>
            <h4 className=" text-darkAsh">Date:</h4>
            <h4 className="font-semibold text-lg">{data.date}</h4>
          </div>
          <div>
            <h4 className=" text-darkAsh">Time:</h4>
            <h4 className="font-semibold text-lg">{data.time}</h4>
          </div>
          <div>
            <h4 className=" text-darkAsh">Amount:</h4>
            <h4 className="font-semibold text-lg">
              {formatPrice(data.amount)}
            </h4>
          </div>
          <div>
            <h4 className=" text-darkAsh">User email:</h4>
            <h4 className="font-semibold text-lg">{data.email}</h4>
          </div>
          <div className="cols-span-1 tablet:col-span-2">
            <h4 className=" text-darkAsh">Address:</h4>
            <h4 className="font-semibold text-lg">{data.address}</h4>
          </div>
        </div>
        <hr />
        <button
          className="font-semibold my-3 p-2 bg-primary w-1/3 text-white self-center rounded-full"
          onClick={() => setShowHistoryModal(false)}>
          Close
        </button>
      </section>
    </Modal>
  );
};

export default HistoryModal;

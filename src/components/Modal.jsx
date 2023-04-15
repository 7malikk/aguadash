import React from 'react';
import { VscChromeClose } from 'react-icons/vsc';

const Modal = ({ showModal, closeModal, children }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center ">
      <div className="bg-white w-11/12 tablet:w-3/4 laptop:w-1/2  mx-auto p-2 rounded flex flex-col  h-2/3 tablet:h-auto">
        <button
          className="self-end outline-none text-[#80808040] hover:text-red-500"
          onClick={() => closeModal()}>
          <VscChromeClose className="w-6 h-6" />
        </button>
        <div className="overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

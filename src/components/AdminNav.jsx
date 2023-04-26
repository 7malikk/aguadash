import React from 'react';
import { RxChevronRight } from 'react-icons/rx';
import { useAppContext } from '../context/AppContext';

const AdminNav = () => {
  const { dispatch } = useAppContext();
  return (
    <nav className="h-14 tablet:h-28 border-b bg-white flex items-center  px-2 tablet:px-11 shadow-[0_8px_15px_-15px_rgba(0,0,0,0.3)]">
      <RxChevronRight
        onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
        className="block tablet:hidden w-6 h-6 border border-darkAsh rounded-full mr-2 cursor-pointer"
      />
      <div
        onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR', payload: false })}
        className="flex flex-col justify-evenly items-start ">
        <h1 className="font-semibold text-base tablet:text-4xl flex justify-start tablet:justify-center items-center">
          Hello, Admin
        </h1>
        <h4 className="text-sm tablet:text-xl text-darkAsh font-semibold">
          Here's your dashboard
        </h4>
      </div>
    </nav>
  );
};

export default AdminNav;

import React from 'react';
import { useAppContext } from '../context/AppContext';
import { CgSpinnerAlt } from 'react-icons/cg';

const DashboardNav = () => {
  const { userData } = useAppContext();

  return (
    <nav className="h-28 border-b bg-white flex flex-col tablet:flex-row justify-evenly tablet:justify-between items-start tablet:items-center px-11 shadow-[0_8px_15px_-15px_rgba(0,0,0,0.3)]">
      <div className="">
        <h1 className="font-semibold text-2xl tablet:text-4xl flex justify-center items-center">
          Hello,{' '}
          {userData?.name?.split(' ')[0] ? (
            userData?.name?.split(' ')[0]
          ) : (
            <CgSpinnerAlt className="w-10 h-10 text-darkAsh animate-spin ml-4" />
          )}
        </h1>
        <h4 className="text-base tablet:text-xl text-darkAsh font-semibold">
          Here's your dashboard
        </h4>
      </div>
      <h4 className="font-semibold text-[#1C1C1C] text-base tablet:text-xl bg-[#DA910A40] px-4 py-2 rounded-3xl ">
        Current Selling Rate: ₦230
      </h4>
    </nav>
  );
};

export default DashboardNav;

import React from 'react';
import { useAppContext } from '../context/AppContext';
import { CgSpinnerAlt } from 'react-icons/cg';
import { formatPrice } from '../helpers/helperFunctions';
import { RxChevronRight } from 'react-icons/rx';

const DashboardNav = () => {
  const { userData, settings, dispatch } = useAppContext();

  return (
    <nav className=" h-14 tablet:h-28 border-b bg-white flex items-center  px-2 tablet:px-11 shadow-[0_8px_15px_-15px_rgba(0,0,0,0.3)]">
      <RxChevronRight
        onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
        className="block tablet:hidden w-6 h-6 border border-darkAsh rounded-full mr-2 cursor-pointer"
      />
      <div className=" flex flex-col tablet:flex-row justify-evenly tablet:justify-between items-center w-full">
        <div>
          <h1 className=" capitalize font-semibold text-base tablet:text-4xl flex justify-start  tablet:justify-center items-center">
            Hello,{' '}
            {userData?.name?.split(' ')[0] ? (
              `${userData?.name?.split(' ')[0]}.`
            ) : (
              <CgSpinnerAlt className=" w-6 h-6 tablet:w-10 tablet:h-10 text-darkAsh animate-spin ml-4" />
            )}
          </h1>
          <h4 className="text-base hidden tablet:block tablet:text-xl text-darkAsh font-semibold ">
            Here's your dashboard
          </h4>
        </div>
        <h4 className="font-semibold text-[#1C1C1C] text-sm tablet:text-lg laptop:text-xl tablet:bg-[#DA910A40]  tablet:px-4  tablet:py-2 rounded-3xl ">
          <span className="hidden laptop:inline"> Current Selling </span> Rate:{' '}
          {settings.rate ? formatPrice(Number(settings.rate)) : 0}
        </h4>
      </div>
    </nav>
  );
};

export default DashboardNav;

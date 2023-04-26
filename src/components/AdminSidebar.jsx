import React from 'react';
import { useAppContext } from '../context/AppContext';
import { NavLink } from 'react-router-dom';
import {
  RxDashboard,
  RxActivityLog,
  RxCounterClockwiseClock,
  RxGear,
  RxExit,
  RxChevronLeft,
} from 'react-icons/rx';

const AdminSidebar = () => {
  const { handleAdminLogout, dispatch, sidebarOpen } = useAppContext();
  return (
    <div
      className={`${
        sidebarOpen
          ? 'translate-x-0 transition ease-in-out duration-300 delay-150'
          : '-translate-x-full transition ease-in-out duration-300 delay-150 '
      } w-52 tablet:w-60 h-full tablet:h-[92vh] bg-white z-55 fixed tablet:relative tablet:translate-x-0  transition ease-in-out duration-300 delay-150`}>
      <h1 className=" text-lg tablet:text-5xl font-extrabold text-primary font-play h-14 tablet:h-28 border-b text-center flex justify-between tablet:justify-center p-3 tablet:p-0 items-center">
        <span className="hidden tablet:inline">AD</span>
        <span className="inline tablet:hidden">Aguadash</span>
        <span className="inline tablet:hidden cursor-pointer">
          {' '}
          <RxChevronLeft
            onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
            className="  w-6 h-6 tablet:w-6 tablet:h-6 border border-darkAsh rounded-full"
          />
        </span>
      </h1>
      <div className="flex flex-col justify-between  items-stretch  h-full px-4 py-6 font-semibold  text-base tablet:text-lg">
        <ul className="space-y-4">
          <NavLink
            to="/merchant/home"
            onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
            className={({ isActive }) =>
              isActive
                ? 'flex justify-start  items-center bg-black text-white px-1  py-2 rounded-lg'
                : 'flex justify-start   items-center bg-white text-black px-1  py-2'
            }>
            <RxDashboard className=" w-6 h-6 mr-2 tablet:mr-3" />
            <h4>Overview</h4>
          </NavLink>
          <NavLink
            to="/merchant/orders"
            onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
            className={({ isActive }) =>
              isActive
                ? 'flex justify-start  items-center bg-black text-white px-1  py-2 rounded-lg'
                : 'flex justify-start   items-center bg-white text-black px-1  py-2'
            }>
            <RxActivityLog className=" w-6 h-6 mr-2 tablet:mr-3" />
            <h4>Orders</h4>
          </NavLink>
          <NavLink
            to="/merchant/history"
            onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
            className={({ isActive }) =>
              isActive
                ? 'flex justify-start  items-center bg-black text-white px-1  py-2 rounded-lg'
                : 'flex justify-start   items-center bg-white text-black px-1  py-2'
            }>
            <RxCounterClockwiseClock className=" w-6 h-6 mr-2 tablet:mr-3" />
            <h4>History</h4>
          </NavLink>
        </ul>
        <ul className="space-y-2 tablet:space-y-4 mb-10 ">
          <NavLink
            to="/merchant/settings"
            onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
            className={({ isActive }) =>
              isActive
                ? 'flex justify-start  items-center bg-black text-white px-1  py-2 rounded-lg'
                : 'flex justify-start   items-center bg-white text-black px-1  py-2'
            }>
            <RxGear className=" w-6 h-6 mr-2 tablet:mr-3" />
            <h4>Settings</h4>
          </NavLink>
          <li
            className="flex items-center bg-white text-black hover:bg-black hover:text-white px-1  py-2 rounded-lg hover:cursor-pointer"
            onClick={handleAdminLogout}>
            <RxExit className=" w-6 h-6 mr-2 tablet:mr-3 rotate-180" />
            <h4> Logout</h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;

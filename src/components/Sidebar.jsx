import React from 'react';
import { useAppContext } from '../context/AppContext';
import { NavLink } from 'react-router-dom';
import {
  RxDashboard,
  RxActivityLog,
  RxCounterClockwiseClock,
  RxGear,
  RxExit,
} from 'react-icons/rx';

const Sidebar = () => {
  const { handleLogout } = useAppContext();

  return (
    <div className="w-20 md:w-60 h-[85vh] bg-white ">
      <h1 className="text-2xl md:text-5xl font-extrabold text-primary font-play h-28 border-b text-center flex justify-center items-center">
        AD
      </h1>
      <div className="flex flex-col justify-between h-full px-4 py-6 font-semibold text-lg">
        <ul className="space-y-4">
          <NavLink
            to="/dashboard/home"
            className={({ isActive }) =>
              isActive
                ? 'flex justify-center md:justify-start items-center bg-black text-white px-1  py-2 rounded-lg'
                : 'flex justify-center md:justify-start  items-center bg-white text-black px-1  py-2'
            }>
            <RxDashboard className=" w-6 h-6 mr-0 md:mr-3" />
            <h4 className="hidden md:block">Overview</h4>
          </NavLink>
          <NavLink
            to="/dashboard/orders"
            className={({ isActive }) =>
              isActive
                ? 'flex justify-center md:justify-start items-center bg-black text-white px-1  py-2 rounded-lg'
                : 'flex justify-center md:justify-start  items-center bg-white text-black px-1  py-2'
            }>
            <RxActivityLog className=" w-6 h-6 mr-0 md:mr-3" />
            <h4 className="hidden md:flex">Orders</h4>
          </NavLink>
          <NavLink
            to="/dashboard/history"
            className={({ isActive }) =>
              isActive
                ? 'flex justify-center md:justify-start items-center bg-black text-white px-1  py-2 rounded-lg'
                : 'flex justify-center md:justify-start  items-center bg-white text-black px-1  py-2'
            }>
            <RxCounterClockwiseClock className=" w-6 h-6 mr-0 md:mr-3" />
            <h4 className="hidden md:flex">History</h4>
          </NavLink>
        </ul>
        <ul className="space-y-4">
          <li className="flex items-center bg-white text-black hover:bg-black hover:text-white px-1  py-2 rounded-lg hover:cursor-pointer">
            <RxGear className=" w-6 h-6 mr-0 md:mr-3" />
            <h4 className="hidden md:flex">Settings</h4>
          </li>
          <li
            className="flex items-center bg-white text-black hover:bg-black hover:text-white px-1  py-2 rounded-lg hover:cursor-pointer"
            onClick={handleLogout}>
            <RxExit className=" w-6 h-6 mr-0 md:mr-3 rotate-180" />
            <h4 className="hidden md:block"> Logout</h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

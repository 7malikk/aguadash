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

const AdminSidebar = () => {
  const { handleAdminLogout } = useAppContext();
  return (
    <div className="w-20 tablet:w-60 h-[85vh] bg-white ">
      <h1 className="text-2xl tablet:text-5xl font-extrabold text-primary font-play h-28 border-b text-center flex justify-center items-center">
        AD
      </h1>
      <div className="flex flex-col justify-between h-full px-4 py-6 font-semibold text-lg">
        <ul className="space-y-4">
          <NavLink
            to="/merchant/home"
            className={({ isActive }) =>
              isActive
                ? 'flex justify-center tablet:justify-start items-center bg-black text-white px-1  py-2 rounded-lg'
                : 'flex justify-center tablet:justify-start  items-center bg-white text-black px-1  py-2'
            }>
            <RxDashboard className=" w-6 h-6 mr-0 tablet:mr-3" />
            <h4 className="hidden tablet:block">Overview</h4>
          </NavLink>
          <NavLink
            to="/merchant/orders"
            className={({ isActive }) =>
              isActive
                ? 'flex justify-center tablet:justify-start items-center bg-black text-white px-1  py-2 rounded-lg'
                : 'flex justify-center tablet:justify-start  items-center bg-white text-black px-1  py-2'
            }>
            <RxActivityLog className=" w-6 h-6 mr-0 tablet:mr-3" />
            <h4 className="hidden tablet:flex">Orders</h4>
          </NavLink>
          <NavLink
            to="/merchant/history"
            className={({ isActive }) =>
              isActive
                ? 'flex justify-center tablet:justify-start items-center bg-black text-white px-1  py-2 rounded-lg'
                : 'flex justify-center tablet:justify-start  items-center bg-white text-black px-1  py-2'
            }>
            <RxCounterClockwiseClock className=" w-6 h-6 mr-0 tablet:mr-3" />
            <h4 className="hidden tablet:flex">History</h4>
          </NavLink>
        </ul>
        <ul className="space-y-4">
          <NavLink
            to="/merchant/settings"
            className={({ isActive }) =>
              isActive
                ? 'flex justify-center tablet:justify-start items-center bg-black text-white px-1  py-2 rounded-lg'
                : 'flex justify-center tablet:justify-start  items-center bg-white text-black px-1  py-2'
            }>
            <RxGear className=" w-6 h-6 mr-0 tablet:mr-3" />
            <h4 className="hidden tablet:flex">Settings</h4>
          </NavLink>
          <li
            className="flex items-center bg-white text-black hover:bg-black hover:text-white px-1  py-2 rounded-lg hover:cursor-pointer"
            onClick={handleAdminLogout}>
            <RxExit className=" w-6 h-6 mr-0 tablet:mr-3 rotate-180" />
            <h4 className="hidden tablet:block"> Logout</h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;

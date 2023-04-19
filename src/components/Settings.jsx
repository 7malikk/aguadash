import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useAppContext } from '../context/AppContext';
import { CgSpinnerAlt } from 'react-icons/cg';

const Settings = () => {
  const [phone, setPhone] = useState('');
  const { userData, error, phoneUpdateloading, phoneUpdateError, updatePhone } =
    useAppContext();

  const handlePhoneUpdate = (e) => {
    e.preventDefault();
    updatePhone(phone);
    setPhone('');
  };

  useEffect(() => {
    if (phoneUpdateError) {
      toast.error(error);
    }
    if (error === 'Success') {
      toast.success(error);
    }
  }, [error, phoneUpdateError]);

  return (
    <main className="bg-white m-2 p-2 tablet:m-4 tablet:p-4 laptop:m-6 laptop:p-6 rounded-2xl space-y-6  ">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
      />
      <h1 className="font-semibold text-4xl">Settings</h1>
      <section className="flex justify-center items-center">
        <form
          onSubmit={handlePhoneUpdate}
          className="flex flex-col justify-center items-center space-y-4 p-4 w-full tablet:w-[25rem] shadow-xl py-4 rounded-xl">
          <label className="self-start place-self-start text-2xl font-semibold">
            Phone Number
          </label>
          <input
            className=" p-1 text-xl"
            required
            type="tel"
            name="phone"
            placeholder={userData.phone ? userData.phone : 'Enter phone number'}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button
            disabled={phoneUpdateloading}
            type="submit"
            className="flex justify-center items-center w-1/2  laptop:w-1/3 text-xl font-semibold bg-primary py-2 px-10 desktop:py-3 desktop:px-6 text-white  rounded-xl hover:bg-hover">
            {phoneUpdateloading ? (
              <CgSpinnerAlt className="w-6 h-6 text-white animate-spin ml-4" />
            ) : (
              'Update'
            )}
          </button>
        </form>
      </section>
    </main>
  );
};

export default Settings;

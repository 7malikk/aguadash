import React, { useState, useEffect } from 'react';
import { formatPrice } from '../../helpers/helperFunctions';
import { useAppContext } from '../../context/AppContext';
import { toast, ToastContainer } from 'react-toastify';
import { CgSpinnerAlt } from 'react-icons/cg';

function InputOrder() {
  const {
    handlePayment,
    paymentSuccessful,
    paymentLoading,
    error,
    dispatch,
    settings,
    userData,
  } = useAppContext();

  const [order, setOrder] = useState({
    address: '',
    amount: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setOrder({ ...order, [e.target.name]: value });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    if (settings.stock === 'true') {
      toast.info('We are out of stock, try again later, Thank you!');
    } else {
      if (userData.phone === '') {
        toast.info(
          'Navigate to the settings page and set your phone number, for easier reach during delivery'
        );
      } else {
        handlePayment(order);
      }
    }
  };
  useEffect(() => {
    if (settings.stock === 'true') {
      toast.info('We are out of stock, try again later, Thank you!');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (paymentSuccessful) {
      toast.success(error);
      setOrder({
        address: '',
        amount: '',
        date: '',
        'number of bags': 0,
        time: '',
      });
      dispatch({ type: 'PAYMENT_COMPLETE' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paymentSuccessful, error]);

  return (
    <form
      onSubmit={handleSumbit}
      className="mt-1 tablet:mt-3 shadow border p-2 tablet:p-6 flex flex-col space-y-3 rounded-md w-full ">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
      />
      <label className="text-lg desktop:text-2xl ml-2 shadow p-1 border  flex items-center rounded-md">
        Bags:
        <input
          type="number"
          required
          className="border-none outline-none rounded w-[80%] p-2 pl-1 font-normal"
          name="number of bags"
          value={order['number of bags']}
          onChange={handleChange}
          min={0}
        />
      </label>
      <label
        title="Click the clock icon"
        className="text-lg desktop:text-2xl ml-2 shadow p-1 border   flex items-center rounded-md">
        Time:
        <input
          type="time"
          required
          className="border-none outline-none rounded  ml-1 p-2 pl-1 font-normal"
          name="time"
          value={order?.time}
          onChange={handleChange}
          min="08:00"
          max="16:00"
        />
      </label>

      <label
        title="Click the calender icon"
        className="text-lg desktop:text-2xl ml-2 shadow p-1 border  flex items-center rounded-md">
        Date:
        <input
          type="date"
          className="border-none outline-none rounded  font-normal ml-1 p-2 pl-1"
          name="date"
          required
          value={order?.date}
          onChange={handleChange}
        />
      </label>

      <label className="text-lg desktop:text-2xl ml-2 shadow p-1 border-black  flex items-center rounded-md">
        Address:
        <input
          type="text"
          required
          className="border-none outline-none rounded w-full p-2 pl-1 font-normal"
          name="address"
          value={order?.address}
          onChange={handleChange}
        />
      </label>

      <label className="text-lg desktop:text-2xl ml-2 shadow p-1 border  flex items-center rounded-md">
        Total Cost:
        <input
          type="text"
          className="border-none outline-none rounded w-[80%] font-normal p-2 pl-1"
          name="amount"
          value={formatPrice(
            order['number of bags'] === undefined
              ? 0 * Number(settings.rate)
              : order['number of bags'] * Number(settings.rate)
          )}
          readOnly
        />
      </label>
      <button
        disabled={settings.stock === 'true' || paymentLoading ? true : false}
        role="tooltip"
        className="flex justify-center items-center h-auto desktop:h-20 text-lg desktop:text-2xl shadow p-2 rounded-md bg-primary text-white font-semibold w-1/2 laptop:w-1/3 self-center"
        type="submit">
        {paymentLoading ? (
          <CgSpinnerAlt className="w-6 h-6 text-white animate-spin ml-4" />
        ) : (
          'Order'
        )}
      </button>
    </form>
  );
}

export default InputOrder;

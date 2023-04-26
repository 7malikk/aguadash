import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useAppContext } from '../context/AppContext';
import { CgSpinnerAlt } from 'react-icons/cg';

const AdminSettings = () => {
  const {
    handleSettingsUpdate,
    error,
    adminSettingsLoading,
    adminSettingsError,
    adminSettings,
    dispatch,
  } = useAppContext();
  const [settings, setSettings] = useState(adminSettings);

  const handleChange = (e) => {
    const value = e.target.value;
    setSettings({ ...settings, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSettingsUpdate(settings);
  };

  useEffect(() => {
    if (adminSettingsError) {
      toast.error(error);
    }
    if (error === 'Success') {
      toast.success(error);
    }
    dispatch({ type: 'SETTINGS_COMPLETE' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminSettingsError, error]);

  return (
    <main
      className="bg-white m-2 p-2 tablet:m-4 tablet:p-4 laptop:m-6 laptop:p-6 rounded-2xl space-y-3 tablet:space-y-6"
      onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR', payload: false })}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
      />
      <h1 className="font-semibold text-xl tablet:text-4xl">Settings</h1>
      <section className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-lightAsh flex flex-col justify-center items-center space-y-4 p-4 w-full tablet:w-[25rem] shadow-xl py-4 rounded-xl">
          <label className=" w-full text-lg tablet:text-2xl font-semibold space-y-2">
            <h4>Rate</h4>
            <input
              className="  w-full  p-1 text-base tablet:text-xl"
              required
              type="number"
              name="rate"
              placeholder={settings.rate}
              value={settings.rate}
              onChange={handleChange}
              min="0"
            />
          </label>
          <div className="w-full flex flex-col tablet:flex-row items-start  tablet:items-center justify-between tablet:justify-between text-2xl font-semibold">
            <h4 className=" text-lg tablet:text-2xl">Out of Stock</h4>
            <label className="  text-lg tablet:text-2xl font-semibold">
              <input
                required
                type="radio"
                value="true"
                checked={settings.stock === 'true'}
                name="stock"
                onChange={handleChange}
              />
              Yes
            </label>
            <label className="  text-lg tablet:text-2xl font-semibold">
              <input
                required
                type="radio"
                value="false"
                checked={settings.stock === 'false'}
                name="stock"
                onChange={handleChange}
              />
              No
            </label>
          </div>
          <button
            disabled={adminSettingsLoading}
            type="submit"
            className="flex justify-center items-center w-1/2  laptop:w-1/3 text-base tablet:text-xl font-semibold bg-primary py-2 px-10 desktop:py-3 desktop:px-6 text-white  rounded-xl hover:bg-hover">
            {adminSettingsLoading ? (
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

export default AdminSettings;

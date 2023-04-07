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
    <main className="bg-white m-6 p-6 rounded-2xl space-y-6  ">
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
          onSubmit={handleSubmit}
          className="bg-lightAsh flex flex-col justify-center items-center space-y-6 p-9 w-full tablet:w-[32rem] h-full shadow-xl py-4 rounded-xl">
          <label className=" w-full text-2xl font-semibold space-y-2">
            <h4>Rate</h4>
            <input
              className="  w-full h-14 pl-4 text-2xl"
              required
              type="number"
              name="rate"
              placeholder={settings.rate}
              value={settings.rate}
              onChange={handleChange}
            />
          </label>
          <div className="w-full flex flex-col tablet:flex-row items-start  tablet:items-center justify-between tablet:justify-between text-2xl font-semibold">
            <h4>Out of Stock</h4>
            <label className=" text-2xl font-semibold">
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
            <label className=" text-2xl font-semibold">
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
            className="flex justify-center items-center w-full text-xl font-semibold bg-primary py-4 px-10 desktop:py-5 desktop:px-14 text-white  rounded-xl hover:bg-hover">
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

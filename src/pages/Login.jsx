import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FiPhone } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';
import {
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsFillEnvelopeFill,
} from 'react-icons/bs';
import { useAppContext } from '../context/AppContext';
import { CgSpinnerAlt } from 'react-icons/cg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const {
    handleEmailLogin,
    handleGoogleLogin,
    loginLoading,
    loginError,
    error,
    noAcct,
    dispatch,
    clearLogin,
  } = useAppContext();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({ ...data, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleEmailLogin(data);
    if (clearLogin) {
      setData({
        email: '',
        password: '',
      });
    }
  };

  useEffect(() => {
    if (loginError || noAcct) {
      toast.error(error);
      dispatch({ type: 'LOGIN_ISSUE_COMPLETE' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, loginError, noAcct]);

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
      />
      <div className="flex justify-auto item-auto tablet:justify-center tablet:item-center laptop:justify-auto laptop:item-auto ">
        <div className=" hidden laptop:flex bg-login-bg bg-cover bg-center flex-col w-1/2 p-5 h-screen">
          <h2 className="text-5xl font-extrabold text-white font-play laptop:pl-5 laptop:py-[3rem]">
            AD
          </h2>
          <p className="w-full laptop:w-[90%] text-center text-white mt-2 mb-8 font-loto text-base tablet:text-xl laptop:text-xl">
            "Thirsty for hassle-free hydration? Look no more! Our water delivery
            service brings crisp, refreshing water straight to your door step.
            say goodbye to lugging heavy jugs from store or waiting in long
            line. with our easy online ordering system, you can get the water
            you need in with just a few clicks Plus, with our convenient
            subscription serivces, you'll never have to worry about running out
            of water again. Trust us to keep you hydrated and refreshed!!!. "
          </p>
        </div>

        <div className="bg-white  w-full flex flex-col items-center laptop:w-2/3   tablet:px-[6.25rem] laptop:pl-[6.25rem] mt-[3.75rem]">
          <Link to="/" className="text-base pb-5 flex items-centers self-start">
            <IoIosArrowBack className="w-6 h-6" />
            <span className="pl-2">Back</span>
          </Link>
          <div className="p-5 w-full  flex flex-col ">
            <h2 className="text-center border-b pb-5 w-full   text-black text-xl  tablet:text-left">
              Login
            </h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col pt-5  w-2/3 self-center ">
              <label>Email</label>
              <input
                required
                name="email"
                value={data.email}
                onChange={handleChange}
                type="email"
                placeholder="Enter Your Email"
                className="placeholder-[#334155] w-full text-black-900 text-xs pl-3 outline-none  rounded shadow border p-2 mt-1 mb-2"
              />

              <label>Password</label>
              <input
                required
                value={data.password}
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="Enter Your Password"
                className="placeholder-[#334155] w-full text-black-900 text-xs pl-3 outline-none  rounded shadow border p-2 mt-1 mb-2"
              />
              <button
                disabled={loginLoading}
                type="submit"
                className="w-full rounded-full text-white p-2 mt-5 self-auto tablet:self-center tablet:w-1/2 laptop:w-2/3  bg-[#0e7490] flex justify-center items-center">
                {loginLoading ? (
                  <CgSpinnerAlt className="w-6 h-6 text-white animate-spin ml-4" />
                ) : (
                  'Login'
                )}
              </button>
              <div className="flex items-center py-3 w-full  ">
                <div className="flex-grow bg bg-[#334155] h-0.5"></div>
                <div className="flex-grow-0 mx-5 text-dark">OR</div>
                <div className="flex-grow bg bg-[#334155] h-0.5"></div>
              </div>
              <br />
              <button
                onClick={handleGoogleLogin}
                className="w-full border flex flex-row justify-center items-center p-2 rounded shadow  ">
                <img src={logo} alt="logo" width={20} height={30} />
                <span>Login With Google</span>
              </button>
              <h3 className="text-sm tablet:text-xs text-center tablet:text-right w-full ">
                Don't have a registerd Account?{' '}
                <Link to="/signup" className="text-[#0e7490]">
                  Signup
                </Link>{' '}
              </h3>
            </form>
          </div>

          {/* for moblile */}
          <footer
            id="footer"
            className="bg-black text-white mt-[1.8rem] px-5 tablet:hidden tablet:px-11  grid grid-cols-1 laptop:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-14 pb-14">
            <div className="company  tablet:w-96 space-y-5 mt-9 ">
              <h4 className="font-play text-3xl tablet:text-6xl font-bold">
                AGUADASH
              </h4>
              <div className="space-y-2 tablet:space-y-4">
                <h5 className="w-[80%] tablet:w-auto">
                  Here at Aguadash we give our customers the best services they
                  need, which makes us a reliable company to work with.
                </h5>
                <div className="flex space-x-2 items-center justify-start">
                  <BsFacebook className="w-6 h-6 hover:cursor-pointer" />{' '}
                  <BsLinkedin className="w-6 h-6 hover:cursor-pointer" />{' '}
                  <BsTwitter className="w-6 h-6 hover:cursor-pointer" />
                </div>
              </div>
            </div>

            <div className="links space-y-5 mt-9 ml-0 laptop:mt-14 laptop:ml-56">
              <h6 className="text-3xl font-play font-bold">Links</h6>
              <ul className="text-xl">
                <li className=" hover:cursor-pointer">Home</li>
                <li className=" hover:cursor-pointer">About</li>
                <li className=" hover:cursor-pointer">Serivces</li>
              </ul>
            </div>
            <div className="contactUs space-y-5  mt-9 ml-0 laptop:mt-14  xl:ml-56 flex flex-col justify-start items-start">
              <h6 className="text-3xl font-play font-bold">Contact Us</h6>
              <div className="flex flex-col justify-start items-start space-y-2">
                <h1 className="flex justify-center items-center">
                  <BsFillEnvelopeFill className="w-6 h-6" />{' '}
                  <span className="ml-2">ad@gmail.com</span>
                </h1>
                <h1 className="flex justify-center items-center ">
                  <FiPhone className="w-6 h-6" />{' '}
                  <span className="ml-2">+(234) 903 3223 232</span>
                </h1>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Login;

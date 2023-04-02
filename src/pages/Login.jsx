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
  } = useAppContext();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({ ...data, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEmailLogin(data);
    setData({
      email: '',
      password: '',
    });
  };

  useEffect(() => {
    if (loginError || noAcct) {
      toast.error(error);
    }
  }, [error, loginError, noAcct]);

  return (
    <div className=" w-[100%] h-[100vh]">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
      />
      <div className="flex pl-[10px]">
        <div className=" hidden md:flex bg-login-bg bg-cover bg-center flex-col w-[50%] p-5 h-screen">
          <h2 className="text-5xl font-extrabold text-white font-play lg:pl-[20px] lg:py-[50px]">
            AD
          </h2>
          <p className="w-[100%] lg:w-[90%] text-center text-white mt-2 mb-8 font-loto text-base md:text-xl lg:text-xl">
            "Thirsty for hassle-free hydration? Look no more! Our water delivery
            service brings crisp, refreshing water straight to your door step.
            say goodbye to lugging heavy jugs from store or waiting in long
            line. with our easy online ordering system, you can get the water
            you need in with just a few clicks Plus, with our convenient
            subscription serivces, you'll never have to worry about running out
            of water again. Trust us to keep you hydrated and refreshed!!!. "
          </p>
        </div>

        <div className="bg-white  w-[100%] flex flex-col  md:w-[65%] md:pl-[100px] mt-[60px]">
          <Link to="/" className="text-[11px] pb-[20px] flex">
            <IoIosArrowBack className="mt-[4px]" />
            <span className="pl-[6px]">back</span>
          </Link>
          <div className="pl-[6px] flex flex-col">
            <h2 className="text-center border-b pb-[20px] w-[100%]  text-black text-[20px] md:w-[50%] md:text-left">
              Login
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col pt-[20px] ">
              <label>Email</label>
              <input
                required
                name="email"
                value={data.email}
                onChange={handleChange}
                type="email"
                placeholder="Enter Your Email"
                className="placeholder-[#334155] w-[100%] text-black-900 text-[12px] pl-[10px] outline-none md:w-[50%] rounded shadow border p-[8px] mt-[10px] mb-[6px]"
              />

              <label>Password</label>
              <input
                required
                value={data.password}
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="Enter Your Password"
                className="placeholder-[#334155] w-[100%] text-black-900 text-[12px] pl-[10px] outline-none md:w-[50%] rounded shadow border p-[8px] mt-[10px] mb-[6px]"
              />
              <button
                disabled={loginLoading}
                type="submit"
                className="w-[100%] border rounded-[20px] p-[4px] mt-[20px] md:w-[50%] bg-[#0e7490] flex justify-center items-center">
                {loginLoading ? (
                  <CgSpinnerAlt className="w-6 h-6 text-white animate-spin ml-4" />
                ) : (
                  'Login'
                )}
              </button>
            </form>

            <span className="text-[14px] md:w-[50%] text-center md:text-right">
              Forgot Password?
              <button className="text-blue-500">Reset</button>
            </span>
            <div className="flex items-center py-[10px] md:w-[50%]">
              <div className="flex-grow bg bg-[#334155] h-0.5"></div>
              <div className="flex-grow-0 mx-5 text dark:text-white">OR</div>
              <div className="flex-grow bg bg-[#334155] h-0.5"></div>
            </div>
            <br />
            <button
              onClick={handleGoogleLogin}
              className="w-[100%] border flex flex-row justify-between p-[4px] rounded shadow md:w-[50%]">
              <img
                className="ml-[10px]"
                src={logo}
                alt="logo"
                width={20}
                height={30}
              />
              <span className="text-[14px] mr-[30%] md:mr-[60px]">
                Register With Google
              </span>
            </button>
            <h3 className="text-[14px]  md:text-[12px] text-center md:text-right md:w-[50%]">
              Don't have a registerd Account?{' '}
              <Link to="/signup" className="text-[#0e7490]">
                Signup
              </Link>{' '}
            </h3>
          </div>

          {/* for moblile */}
          <footer
            id="footer"
            className="bg-black text-white mt-[30px] px-5 md:hidden md:px-11  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-14 pb-14">
            <div className="company w-96 space-y-5 mt-9 ">
              <h4 className="font-play text-3xl md:text-6xl font-bold">
                AGUADASH
              </h4>
              <div className="space-y-2 md:space-y-4">
                <h5 className="w-[80%] md:w-auto">
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

            <div className="links space-y-5 mt-9 ml-0 lg:mt-14 lg:ml-56">
              <h6 className="text-3xl font-play font-bold">Links</h6>
              <ul className="text-xl">
                <li className=" hover:cursor-pointer">Home</li>
                <li className=" hover:cursor-pointer">About</li>
                <li className=" hover:cursor-pointer">Serivces</li>
              </ul>
            </div>
            <div className="contactUs space-y-5  mt-9 ml-0 lg:mt-14  xl:ml-56 flex flex-col justify-start items-start">
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

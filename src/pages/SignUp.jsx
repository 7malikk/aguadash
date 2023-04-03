import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CgSpinnerAlt } from 'react-icons/cg';
import { FiPhone } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';
import {
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsFillEnvelopeFill,
} from 'react-icons/bs';

const SignUp = () => {
  const {
    handleEmailSignUp,
    handleGoogleSignUp,
    signUpError,
    error,
    userError,
    signUpLoading,
  } = useAppContext();
  const [data, setData] = useState({
    name: '',
    password: '',
    phone: '',
    confirmPwd: '',
    email: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({ ...data, [e.target.name]: value });
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    if (data.password === data.confirmPwd) {
      handleEmailSignUp(data);
      setData({
        name: '',
        password: '',
        phone: '',
        confirmPwd: '',
        email: '',
      });
    } else {
      //toast passwords must match
      toast.info('Passwords must match');
    }
  };

  useEffect(() => {
    if (signUpError || userError) {
      toast.error(error);
    }
  }, [error, signUpError, userError]);
  return (
    <div className="flex flex-col   bg-white w-[100%] h-[90%]">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
      />
      <div className=" flex mobile:flex-col md:flex-row">
        <div className=" hidden  bg-login-bg md:flex  bg-cover bg-center  flex-col p-4 w-4/12 h-screen">
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

        <div className="bg-white  flex-col w-[100%] pl-[6px] p-5 md:flex md:flex-col  md:w-[65%]  md:pl-[80px]">
          <Link to="/" className="text-[11px] pb-[20px] flex">
            <IoIosArrowBack className="mt-[4px]" />
            <span className="pl-[6px]">back</span>
          </Link>
          <div className="bg-white h-[600px] w-[100%] md:w-[50%] md:h-[90%] pl-[10px]">
            <h2 className="text-center border-b pb-[20px] w-[100%] font-2xl  text-black text-[20px] md:w-[90%] md:text-left">
              Register Your Account
            </h2>
            <form onSubmit={handleSignUp} className="flex flex-col mt-[15px]">
              <label>Name</label>
              <input
                required
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="placeholder-[#334155] w-[100%] text-black-900 text-[12px] pl-[10px] outline-none md:w-[90%] rounded shadow border p-[8px] mt-[10px] mb-[6px]"
              />

              <label className="text-[15px] font-[90px] text-[#1e293b]">
                Phone number
              </label>
              <input
                required
                type="tel"
                name="phone"
                value={data.phone}
                onChange={handleChange}
                placeholder="Enter Your Phone Number"
                className="placeholder-[#334155] w-[100%] text-black-900 text-[12px] pl-[10px] outline-none md:w-[90%] rounded shadow border p-[8px] mt-[10px] mb-[6px]"
              />

              <label>Email Address</label>
              <input
                required
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Enter Your Email Address"
                className="placeholder-[#334155] w-[100%] text-black-900 text-[12px] pl-[10px] outline-none md:w-[90%] rounded shadow border p-[8px] mt-[10px] mb-[6px]"
              />

              <label>Create Password</label>
              <input
                required
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Enter Your Password"
                className="placeholder-[#334155] w-[100%] text-black-900 text-[12px] pl-[10px] outline-none md:w-[90%] rounded shadow border p-[8px] mt-[10px] mb-[6px]"
              />

              <label>Confirm Password</label>
              <input
                required
                name="confirmPwd"
                value={data.confirmPwd}
                onChange={handleChange}
                type="password"
                placeholder="Re-Enter Your Password"
                className="placeholder-[#334155] w-[100%] text-black-900 text-[12px] pl-[10px] outline-none md:w-[90%] rounded shadow border p-[8px] mt-[10px] mb-[6px]"
              />

              <label className="pb-[10px]">
                <input required type="checkbox" className="h-[10px]" />
                <span className="text-[11px] ml-[10px]">
                  I agree with{' '}
                  <Link to="/signup" className="text-[#0e7490]">
                    terms
                  </Link>
                  &{' '}
                  <Link to="/signup" className="text-[#0e7490]">
                    Condition
                  </Link>
                </span>
              </label>
              <button
                disabled={signUpLoading}
                className="w-[100%] border rounded-[20px] p-[4px]  md:w-[90%] bg-[#0e7490] flex justify-center items-center">
                {signUpLoading ? (
                  <CgSpinnerAlt className="w-6 h-6 text-white animate-spin ml-4" />
                ) : (
                  '  Register Account'
                )}
              </button>
              <div className="flex items-center py-[10px] md:w-[90%]">
                <div className="flex-grow bg bg-[#334155] h-0.5"></div>
                <div className="flex-grow-0 mx-5 text dark:text-white">OR</div>
                <div className="flex-grow bg bg-[#334155] h-0.5"></div>
              </div>
              <button
                onClick={handleGoogleSignUp}
                className="w-[100%] border flex flex-row justify-between p-[4px] rounded shadow md:w-[90%]">
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
              <h3 className="text-[11px] text-center  md:text-[11px] md:w-[90%] md:text-end">
                Already a registerd user?{' '}
                <Link to="/login" className="text-blue-600">
                  Login
                </Link>
              </h3>
            </form>
          </div>

          {/* for mobile version */}

          <footer
            id="footer"
            className="bg-black text-white  px-5 md:hidden md:px-11 mt-[60px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-14 pb-14">
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

export default SignUp;

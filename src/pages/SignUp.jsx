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
  BsEyeSlash,
  BsEye,
} from 'react-icons/bs';

const SignUp = () => {
  const {
    handleEmailSignUp,
    handleGoogleSignUp,
    signUpError,
    error,
    userError,
    signUpLoading,
    dispatch,
    clearSignup,
  } = useAppContext();
  const [data, setData] = useState({
    name: '',
    password: '',
    phone: '',
    confirmPwd: '',
    email: '',
  });
  const [pwdEye, setPwdEye] = useState(false);
  const [confirmEye, setConfirmEye] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setData({ ...data, [e.target.name]: value });
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (data.password === data.confirmPwd) {
      await handleEmailSignUp(data);
      if (clearSignup) {
        setData({
          name: '',
          password: '',
          phone: '',
          confirmPwd: '',
          email: '',
        });
      }
    } else {
      toast.info('Passwords must match');
    }
  };

  useEffect(() => {
    if (signUpError || userError) {
      toast.error(error);
      dispatch({ type: 'SIGNUP_ISSUE_COMPLETE' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, signUpError, userError]);
  return (
    <div className="flex flex-col   bg-white w-full ">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
      />
      <div className=" flex flex-col tablet:flex-row">
        <div className=" hidden  bg-login-bg laptop:flex  justify-center bg-cover bg-center  flex-col p-4  w-1/2 ">
          <h2 className="text-5xl font-extrabold text-white font-play laptop:pl-[20px] laptop:py-[50px]">
            AD
          </h2>
          <p className="w-full laptop:w-[90%] text-center text-white mt-2 mb-8 font-lato text-base tablet:text-xl laptop:text-xl">
            "Thirsty for hassle-free hydration? Look no more! Our water delivery
            service brings crisp, refreshing water straight to your door step.
            say goodbye to lugging heavy jugs from store or waiting in long
            line. with our easy online ordering system, you can get the water
            you need in with just a few clicks Plus, with our convenient
            subscription serivces, you'll never have to worry about running out
            of water again. Trust us to keep you hydrated and refreshed!!!. "
          </p>
        </div>

        <div className="bg-white  w-full flex flex-col items-center font-lato laptop:w-2/3 tablet:px-[6.25rem] laptop:pl-[6.25rem] mt-[3.75rem]">
          <Link to="/" className="text-base pb-5 flex items-center self-start">
            <IoIosArrowBack className="w-6 h-6" />
            <span className="pl-2">Back</span>
          </Link>
          <div className="bg-white  w-full tablet:h-full p-5 flex flex-col">
            <h2 className="text-center border-b pb-5 w-full  font-2xl  text-black text-xl tablet:w-[90%] tablet:text-left">
              Register Your Account
            </h2>
            <form
              onSubmit={handleSignUp}
              className="flex flex-col mt-4 w-full self-center ">
              <label className="text-sm font-semibold">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="placeholder-[#334155] w-full text-base pl-5 outline-none   rounded shadow border p-2 mt-1 mb-4"
              />

              <label className="  text-[#1e293b] text-sm font-semibold">
                Phone number <span className="text-red-500">*</span>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={data.phone}
                  onChange={handleChange}
                  placeholder="Enter Your Phone Number"
                  className="placeholder-[#334155] w-full text-base pl-5 outline-none font-normal  rounded shadow border p-2 mt-1 mb-4"
                />
              </label>
              <label className="text-sm font-semibold">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Enter Your Email Address"
                className="placeholder-[#334155] w-full text-base pl-5 outline-none   rounded shadow border p-2 mt-1 mb-4"
              />

              <label className="text-sm font-semibold relative">
                Create Password <span className="text-red-500">*</span>
                <input
                  required
                  type={pwdEye ? 'text' : 'password'}
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  placeholder="Enter Your Password"
                  className="placeholder-[#334155] w-full text-black text-base pl-5 outline-none font-normal  rounded shadow border p-2 mt-1 mb-4"
                />{' '}
                {pwdEye ? (
                  <BsEyeSlash
                    className="absolute top-9 right-3 w-4 h-4 hover:cursor-pointer"
                    onClick={() => setPwdEye(!pwdEye)}
                  />
                ) : (
                  <BsEye
                    className="absolute top-9 right-3 w-4 h-4 hover:cursor-pointer"
                    onClick={() => setPwdEye(!pwdEye)}
                  />
                )}
              </label>

              <label className="text-sm font-semibold relative">
                Confirm Password <span className="text-red-500">*</span>
                <input
                  required
                  name="confirmPwd"
                  value={data.confirmPwd}
                  onChange={handleChange}
                  type={confirmEye ? 'text' : 'password'}
                  placeholder="Re-Enter Your Password"
                  className="placeholder-[#334155] w-full text-black text-base pl-5 outline-none font-normal  rounded shadow border p-2 mt-1 mb-4"
                />{' '}
                {confirmEye ? (
                  <BsEyeSlash
                    className="absolute top-9 right-3 w-4 h-4 hover:cursor-pointer"
                    onClick={() => setConfirmEye(!confirmEye)}
                  />
                ) : (
                  <BsEye
                    className="absolute top-9 right-3 w-4 h-4 hover:cursor-pointer"
                    onClick={() => setConfirmEye(!confirmEye)}
                  />
                )}
              </label>

              <label className="pb-5 flex items-center">
                <input required type="checkbox" className="h-5" />
                <span className="text-[11px] ml-5">
                  I agree with{' '}
                  <Link to="/signup" className="text-[#0e7490]">
                    terms
                  </Link>{' '}
                  &{' '}
                  <Link to="/signup" className="text-[#0e7490]">
                    Condition
                  </Link>
                </span>{' '}
                <span className="text-red-500">*</span>
              </label>
              <button
                disabled={signUpLoading}
                className="w-full rounded-full text-white p-2 self-auto tablet:self-center tablet:w-1/2 laptop:w-2/3  bg-[#0e7490] flex justify-center">
                {signUpLoading ? (
                  <CgSpinnerAlt className="w-6 h-6 text-white animate-spin ml-4" />
                ) : (
                  'Register Account'
                )}
              </button>
              <div className="flex items-center py-2 w-full ">
                <div className="flex-grow bg bg-[#334155] h-0.5"></div>
                <div className="flex-grow-0 mx-5  text-dark">OR</div>
                <div className="flex-grow bg bg-[#334155] h-0.5"></div>
              </div>
              <button
                onClick={handleGoogleSignUp}
                className="w-full border flex flex-row justify-center items-start p-1 rounded shadow">
                <img src={logo} alt="logo" width={20} height={30} />
                <span className="text-sm">Register With Google</span>
              </button>
              <h3 className="text-xs text-center  tablet:text-end">
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
            className="bg-black text-white  px-5 tablet:hidden tablet:px-11 mt-[60px] grid grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-3 gap-8 desktop:gap-14 pb-14">
            <div className="company tablet:w-96 space-y-5 mt-9 ">
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
            <div className="contactUs space-y-5  mt-9 ml-0 laptop:mt-14  desktop:ml-56 flex flex-col justify-start items-start">
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

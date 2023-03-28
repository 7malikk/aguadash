import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import twitter from '../assets/twitter.png';
import github from '../assets/github.png';
import facebook from '../assets/Facebook.png';
import emailLogo from '../assets/email.jpeg';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CgSpinnerAlt } from 'react-icons/cg';

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
    <div className="flex flex-col   bg-white w-[100%] h-[100vh]">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
      />
      <Link to="/">back home</Link>
      <div className=" flex mobile:flex-col md:flex-row pl-[10px]">
        <div className=" hidden  bg-login-bg mobile:  bg-cover bg-center md:flex flex-col p-4 w-4/12 h-[600px]">
          <h2>AD</h2>
          <p className="">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quis
            ut,mmodi est ullam dicta soluta optio obcaecati, perferendis
            voluptate eius corrupti nostrum odit asperiores aspernatur
            necessitatibus! Amet, officiis incidun"t.
          </p>
        </div>

        <div className="bg-white flex-col w-[100%] pl-[6px] p-5 mobile:flex md:flex-col  md:w-[65%]  md:pl-[80px]">
          <h2 className="border-b pb-[20px] w-[100%] pl-[90px] md:pl-[6px] mobile:w-[90%]">
            Register Your Account
          </h2>
          <form onSubmit={handleSignUp} className="flex flex-col mt-[15px]">
            <label>Name</label>
            <input
              required
              type="text"
              className="w-[100%] outline-none mobile:w-[90%] rounded shadow border p-[4px] mt-[10px] mb-[6px]"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
            <label>Phone number</label>
            <input
              required
              type="text"
              className="w-[100%] outline-none mobile:w-[90%] rounded shadow border p-[4px] mt-[10px] mb-[6px]"
              name="phone"
              value={data.phone}
              onChange={handleChange}
            />
            <label>Email</label>
            <input
              required
              type="email"
              className="w-[100%] outline-none mobile:w-[90%] rounded shadow border p-[4px] mt-[10px] mb-[6px]"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
            <label>Create Password</label>
            <input
              required
              type="password"
              className="w-[100%] outline-none mobile:w-[90%] rounded shadow border p-[4px] mt-[10px] mb-[6px]"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            <label>Confirm Password</label>
            <input
              required
              type="password"
              className="w-[100%] outline-none mobile:w-[90%] rounded shadow border p-[4px] mt-[10px] mb-[6px]"
              name="confirmPwd"
              value={data.confirmPwd}
              onChange={handleChange}
            />
            <label className="pb-[10px]">
              <input required type="checkbox" />
              <span>
                I agree with{' '}
                <Link to="/signup" className="text-blue-500">
                  terms
                </Link>
                &{' '}
                <Link to="/signup" className="text-blue-500">
                  Condition
                </Link>
              </span>
            </label>

            <button className=" mobile:w-[40%] border mobile:ml-[100px] rounded-[20px] p-[4px]  md:w-[60%] bg-blue-900 ">
              Register Account
              {signUpLoading ? (
                <CgSpinnerAlt className="w-7 h-7 animate-spin" />
              ) : null}
            </button>
            <h4>or</h4>
            <button
              onClick={handleGoogleSignUp}
              className="w-[100%] border flex flex-row justify-between p-[4px] rounded shadow md:w-[60%] md:ml-[100px]">
              <img
                className="ml-[10px]"
                src={logo}
                alt="logo"
                width={20}
                height={30}
              />
              <span className="mr-[100px] md:mr-[160px] ">
                Register With Google
              </span>
            </button>
            <h3 className="text-[15px] ml-[20px] pb-[30px] md:ml-[32%] md:text-[15px]">
              Already have a registered account?{' '}
              <Link to="/login" className="text-blue-800">
                Login
              </Link>
            </h3>
          </form>
          {/* for mobile version */}

          <div className="bg-black text-white p-[20px] md:hidden">
            <h2 className="text-[30px] pb-[20px]">AGUADASH</h2>

            <p>
              Here at aguadash we give our customers the best services they
              need, which makes us a reliable company to work with.
            </p>
            <div className="flex flex-row">
              <Link to="/signup">
                <img
                  alt="facebook"
                  src={facebook}
                  width={20}
                  height={30}
                  className="bg-white rounded-[50%] p-[4px]"
                />
              </Link>
              <Link to="/signup">
                {' '}
                <img
                  alt="twitter"
                  src={twitter}
                  width={20}
                  height={30}
                  className="bg-white rounded-[50%] p-[4px] ml-[7px]"
                />
              </Link>
              <Link to="/signup">
                <img
                  alt="github"
                  src={github}
                  width={20}
                  height={30}
                  className="bg-white rounded-[50%] p-[4px] ml-[7px]"
                />
              </Link>
            </div>
            <div>
              <h2 className="text-[30px] pt-[10px]">Links</h2>
              <ul>
                <li className="text-[14px] pt-[10px]">Home</li>
                <li className="text-[14px] pt-[10px]">About</li>
                <li className="text-[14px] pt-[10px]">Services</li>
                <li className="text-[14px] pt-[10px]">Merchant</li>
              </ul>
            </div>

            <div className="mt-[15px]">
              <h2 className="text-[30px] pt-[10px]">Contact Us</h2>
              <i>+234-7007089994</i>
              <p>park je Sung street</p>
              <p className="flex flex-row rounded-[40%]">
                <img alt="email" src={emailLogo} width={20} height={20} />
                info@augudash.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"

const Login = () => {
  return (
   

  <div className=' w-[100%] h-[100vh]'>
   
      <h2 className=''>Login</h2>
      <div className='flex pl-[10px]'>
          <div className="bg-login-bg bg-cover bg-center flex flex-col w-6/12 p-5 h-[600px]">
              <h2 className='text-base ml-4'>AD</h2>
              <p className="">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quis
                ut, commodi est ullam dicta soluta optio obcaecati, perferendis
                voluptate eius corrupti nostrum odit asperiores aspernatur
                necessitatibus! Amet, officiis incidunt".
              </p>
          </div>

          <div className='bg-white flex flex-col  w-[65%] pl-5 mt-[40px]'>
          <Link to="/" className='pb-[20px] ml-[30px]'>back</Link>

                <h2 className="pb-[20px] text-[20px] border-b-2 border-black-300 w-[70%]">Login</h2>
              <form className='flex flex-col pt-[20px] '>
                <label>Email</label>
                <input type="text" className='w-[70%] outline-none rounded border border-black-600 mt-[10px] mb-[6px]'/>

                <label>Password</label>
                <input type="password" className='w-[70%] outline-none rounded border border-black-600 mt-[10px] mb-[6px]'/>
              </form>

                <br/><button className='bg-blue-800 ml-[100px]  p-1 px-2 rounded-[10px] hover:bg-blue-500 hover:text-white w-[50%]'>
                  login Account
                </button><span className='text-[12px] ml-[45%]'>Forgot Password? <button className='text-blue-500'>Reset</button></span>
               <i></i> <span>or</span><i></i>
                <br/><button className='border-2 rounded p-[4px] w-[40%] flex justify-between ml-[100px]  hover:bg-blue-700 hover:text-white w-[50%]'>
            <img
            className='ml-[10px]'
            src={logo}
            alt='logo'
            width={20}
            height={30}
             />
            <span className='mr-[70px]'>Register With Google</span>
          </button>
          </div>
      </div>
  </div>
  );
};

export default Login;

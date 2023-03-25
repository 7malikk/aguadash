import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"

const SignUp = () => {
  return (
    <div className="bg-white w-[100%] h-[100vh]">
      <h2>Signup</h2>
      <Link to="/">back home</Link>
      <div className=" flex pl-[10px]">
        <div className="bg-login-bg bg-cover bg-center flex flex-col p-4 w-4/12 h-[600px]">
          <h2>AD</h2>
          <p className="">
            "Lorem ipsum dolor 
            sit amet consectetur adipisicing elit. Cum, quis
            ut, commodi est ullam dicta soluta optio obcaecati, perferendis
            voluptate eius corrupti nostrum odit asperiores aspernatur
            necessitatibus! Amet, officiis incidun"t.
          </p>
        </div>

        <div className="bg-white flex flex-col  w-[65%] p-5 pl-7">
          <h2 className='border-b pb-[20px] w-[70%]'>Register Your Account</h2>
           <form className='flex flex-col mt-[15px]'>
              <label>Name</label>
              <input type="text" className='w-[70%] outline-none rounded border border-black mt-[10px]  mb-[6px]'/>

              <label>Phone number</label>
              <input type="text" className='w-[70%]  outline-none rounded border border-black mt-[10px]  mb-[6px]'/>

              <label>Email</label>
              <input type="email" className='w-[70%]  outline-none rounded border border-black mt-[10px]  mb-[6px]'/>

              
              <label>Create Password</label>
              <input type="text" className='w-[70%] outline-none rounded border border-black mt-[10px]  mb-[6px]'/>

              <label>Confirm Password</label>
              <input type="text" className='w-[70%] outline-none rounded border border-black mt-[10px] mb-[6px]'/>
              <label>
            <input type="checkbox" />
            <span>
              I agree with <Link to="/signup" className='text-blue-500'>terms</Link>&{' '}
              <Link to="/signup" className='text-blue-500'>Condition</Link>
            </span>
          </label>
          <button className='border ml-[100px] rounded-[20px] p-[4px] w-[40%] bg-blue-500 '>Register Account</button>
          <h4>or</h4>
          <button className='border-2 rounded p-[4px] w-[40%] flex justify-between ml-[100px]'>
            <img
            className='ml-[10px]'
            src={logo}
            alt='logo'
            width={20}
            height={30}
             />
            <span className='mr-[60px]'>Register With Google</span>
          </button>
           </form>

        </div>
      </div>
    </div>
  );
};

export default SignUp;

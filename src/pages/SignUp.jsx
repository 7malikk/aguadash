import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="pl-5">
      <h2>Signup</h2>
      <div className=" flex">
        <div className="bg-login-bg bg-cover bg-center flex flex-col w-4/12 p-5">
          <h2 className='text-base ml-4'>AD</h2>
          <p className="">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quis
            ut, commodi est ullam dicta soluta optio obcaecati, perferendis
            voluptate eius corrupti nostrum odit asperiores aspernatur
            necessitatibus! Amet, officiis incidunt".
          </p>
        </div>

        <div className="bg-blue-100 flex flex-col  w-4/12 p-5 pl-7">
        <Link className='ml-4 p-2' to="/">back</Link>
          <h2 className='mb-4 border-b border-black pb-7'>Register Your Account</h2>
           <form className='flex flex-col'>
              <label className=''>Name</label>
              <input type="text"   className='border-2 border-black-400 outline-none w-4/5'/>

              <label>Phone Number</label>
              <input type="text"   className='border-2 border-black-400 outline-none w-4/5'/>

              <label>Email</label>
              <input type="text"   className='border-2 border-black-400 outline-none w-4/5'/>

              <label>Password</label>
              <input type="password"  className='border-2 border-black-400 outline-none w-4/5'/>

              <label>confirm Password</label>
              <input type="password"   className='border-2 border-black-400 outline-none w-4/5'/>

              <label className='p-2'>
                <input type="checkbox" />
                <span className='ml-2'>
                  I agree with <Link to="/signup">terms</Link>&{' '}
                  <Link to="/signup">Condition</Link>
                </span>
              </label>
              <button className='bg-blue-800 p-1 px-2 mt-10 rounded hover:bg-blue-500 hover:text-white'>Register Account</button>
              <span>or</span>
              <button className=' p-1 px-2 mt-10 rounded hover:bg-blue-500 hover:text-white'>
                {/* <img /> */}
                <span>Register With Google</span>
              </button>
           </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

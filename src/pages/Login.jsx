import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
   

  <div className=' p-5 h-screen bg-blue-500'>
      <Link to="/">back home</Link>
      <h2>Login</h2>
      <div className='flex'>
          <div className="bg-login-bg bg-cover bg-center flex flex-col w-6/12 p-5 h-6/12">
              <h2 className='text-base ml-4'>AD</h2>
              <p className="">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quis
                ut, commodi est ullam dicta soluta optio obcaecati, perferendis
                voluptate eius corrupti nostrum odit asperiores aspernatur
                necessitatibus! Amet, officiis incidunt".
              </p>
          </div>

          <div className=' w-4/12 pl-5'>

                <h2>Login</h2>

                  <label>
                  Email
                <br></br> <input className='border-2 border-black-400 outline-none' type="text"/>
              <br/> </label>
                <label>
                  Password
                  <br></br><input className='border-2 border-black-400 outline-none' type="password"/>
                </label>

                <br/><button className='bg-blue-800 p-1 px-2 mt-10 rounded hover:bg-blue-500 hover:text-white'>
                  login
                </button>
          </div>
      </div>
  </div>
  );
};

export default Login;

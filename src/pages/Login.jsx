import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"

const Login = () => {

  
  return (
   

  <div className=' w-[100%] h-[100vh] flex flex-row '>
      <div className='flex flex-col pl-[10px] md:flex-row'>
          <div className="hidden  md:bg-login-bg bg-cover md:block bg-center flex flex-col w-6/12 p-5 h-[600px]">
              <h2 className='text-base ml-4'>AD</h2>
              <p className="">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quis
                ut, commodi est ullam dicta soluta optio obcaecati, perferendis
                voluptate eius corrupti nostrum odit asperiores aspernatur
                necessitatibus! Amet, officiis incidunt".
              </p>
          </div>

          <div className='w-[100%] ml-[4px] md:w-[65%]  bg-white flex flex-col  md:pl-5 mt-[40px]'>
              <Link to="/" className='pb-[20px] ml-[30px]'>back</Link>

                    <h2 className=" w-[100%] pl-[40%] mr-5 md:w-[70%] pb-[20px] md:pl-[0] text-[20px] border-b-2 border-black-300 ">Login</h2>
                  <form className='flex flex-col pt-[20px] '>
                    <label>Email</label>
                    <input type="text" className='w-[100%] md:w-[70%] outline-none rounded border border-black-600 mt-[10px] mb-[6px]'/>

                    <label>Password</label>
                    <input type="password" className='w-[100%] md:w-[70%] outline-none rounded border border-black-600 mt-[10px] mb-[6px]'/>
                  </form>

                    <br/><button className='w-[100%] ml-[0] bg-blue-800 md:ml-[100px]  p-1 px-2 rounded-[10px] hover:bg-blue-500 hover:text-white md:w-[50%]'>
                      login Account
                    </button><span className='text-[12px] ml-[45%]'>Forgot Password? <button className='text-blue-500'>Reset</button></span>
                  <i></i> <span>or</span><i></i>
                    <br/><button className='w-[100%] ml-[0]  md:w-[40%] border-2 rounded p-[4px]  flex justify-between md:ml-[100px]  hover:bg-blue-700 hover:text-white'>
                <img
                className='ml-[10px]'
                src={logo}
                alt='logo'
                width={20}
                height={30}
                />
                <span className=' mr-[80px] md:mr-[70px]'>Register With Google</span>
              </button>
          </div>
          <div className='bg-black text-white md:hidden'>
            <h2>AGUADASH</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ab accusantium tempore accusamus autem, animi, neque unde minus veritatis ullam iusto sequi explicabo suscipit. Repellat corporis laborum dicta cumque incidunt!</p>
            <div>
              <h2>Links</h2>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Merchant</li>
              </ul>
            </div>

            <div>
              <h2>Contact Us</h2>
              <i>+234-7007089994</i>
              <p>park je Sung street</p>
              <p>info@augudash.com</p>
            </div>

          
          </div>
      </div>
  </div>
  );
};

export default Login;

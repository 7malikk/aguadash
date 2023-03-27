import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"
import twitter from "../assets/twitter.png"
import github from "../assets/github.png"
import facebook from "../assets/Facebook.png"
import emailLogo from "../assets/email.jpeg"


const Login = () => {
  
  return (
   
  <div className=' w-[100%] h-[100vh]'>
      <div className='flex pl-[10px]'>
          <div className=" hidden md:flex bg-login-bg bg-cover bg-center flex-col w-[50%] p-5 h-[600px]">
              <h2 className='text-base ml-4'>AD</h2>
              <p className="">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quis
                ut, commodi est ullam dicta soluta optio obcaecati, perferendis
                voluptate eius corrupti nostrum odit asperiores aspernatur
                necessitatibus! Amet, officiis incidunt".
              </p>
          </div>

          <div className='bg-white  w-[100%] flex flex-col  md:w-[65%] md:pl-[80px] mt-[40px]'>
            <Link to="/" className='pb-[20px] ml-[30px]'>back</Link>
              <div className='pl-[6px] flex flex-col'>
                  <h2 className=" w-[100%] pb-[20px] pr-[20px]text-[20px] border-b-2 border-black-300 md:w-[70%]">Login</h2>
                  <form className='flex flex-col pt-[20px] '>
                    <label>Email</label>
                    <input type="text" className='w-[100%] shadow  p-[6px] md:w-[70%] outline-none rounded border border-black-600 mt-[10px] mb-[6px]'/>

                    <label>Password</label>
                    <input type="password" className='w-[100%] shadow  p-[6px] md:w-[70%] outline-none rounded border border-black-600 mt-[10px] mb-[6px]'/>
                  </form>

                        <br/><button className='w-[100%] ml-[0] bg-blue-800 md:ml-[60px]  p-1 px-2 rounded-[10px]  hover:bg-blue-500 hover:text-white md:w-[50%]'>
                          login Account
                        </button><span className='text-[14px] ml-[63%] md:ml-[34%]'>Forgot Password? <button className='text-blue-500'>Reset</button></span>
                      <i></i> <span>or</span><i></i>
                        <br/><button className='w-[100%] ml-[0]  border-2 rounded p-[4px] md:w-[50%] flex justify-between md:ml-[60px]  hover:bg-blue-700 hover:text-white'>
                    <img
                    className='ml-[10px]'
                    src={logo}
                    alt='logo'
                    width={20}
                    height={30}
                    />
                    <span className=' mr-[120px] md:mr-[40px]'>Register With Google</span>
                  </button>
                  <h3 className='text-[14px] ml-[80px]  md:text-[12px] md:ml-[110px] pb-[30px]'>Don't have a registered account? <a className='text-blue-800'>Sign Up</a></h3>
              </div>
                  
              {/* for moblile */}

              <div className='w-[100%] bg-black text-white p-[20px] md:hidden'>
                    <h2 className='text-[30px] pb-[20px]'>AGUADASH</h2>
                    <p>Here at aguadash we give our customers the best services they need, which makes us a reliable company to work with.</p>
                    <div className='flex flex-row'>
                      <Link to="/signup"><img src={facebook} width={20}  height={30}className="bg-white rounded-[50%] p-[4px]" /></Link>
                      <Link to="/signup"> <img src={twitter} width={20}  height={30} className="bg-white rounded-[50%] p-[4px] ml-[7px]"/></Link>
                      <Link to="/signup"><img src={github} width={20}  height={30} className="bg-white rounded-[50%] p-[4px] ml-[7px]"/></Link>
                    </div>
                    <div>
                      <h2 className='text-[30px] pt-[10px]'>Links</h2>
                      <ul>
                        <li className='text-[14px] pt-[10px]'>Home</li>
                        <li className='text-[14px] pt-[10px]'>About</li>
                        <li className='text-[14px] pt-[10px]'>Services</li>
                        <li className='text-[14px] pt-[10px]'>Merchant</li>
                      </ul>
                    </div>

                    <div className='mt-[15px]'>
                      <h2 className='text-[30px] pt-[10px]'>Contact Us</h2>
                      <i>+234-7007089994</i>
                      <p>park je Sung street</p>
                      <p>info@augudash.com</p>
                    </div>
              </div>
            </div>

      </div>
  </div>
  );
};

export default Login;

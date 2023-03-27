import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"
import twitter from "../assets/twitter.png"
import github from "../assets/github.png"
import facebook from "../assets/Facebook.png"
import emailLogo from "../assets/email.jpeg"



const SignUp = () => {
  return (
    <div className="flex flex-col   bg-white w-[100%] h-[100vh]">
      <Link to="/">back home</Link>
      <div className=" flex mobile:flex-col md:flex-row pl-[10px]">
        <div className=" hidden  bg-login-bg mobile:  bg-cover bg-center md:flex flex-col p-4 w-4/12 h-[600px]">
          <h2>AD</h2>
          <p className="">
            "Lorem ipsum dolor 
            sit amet consectetur adipisicing elit. Cum, quis
            ut,mmodi est ullam dicta soluta optio obcaecati, perferendis
            voluptate eius corrupti nostrum odit asperiores aspernatur
            necessitatibus! Amet, officiis incidun"t.
          </p>
        </div>

        <div className="bg-white flex-col w-[100%] pl-[6px] p-5 mobile:flex md:flex-col  md:w-[65%]  md:pl-[80px]">
          <h2 className='border-b pb-[20px] w-[100%] pl-[90px] md:pl-[6px] mobile:w-[90%]'>Register Your Account</h2>
           <form className='flex flex-col mt-[15px]'>
              <label>Name</label>
              <input type="text" className='w-[100%] outline-none mobile:w-[90%] rounded shadow border p-[4px] mt-[10px] mb-[6px]'/>

              <label>Phone number</label>
              <input type="text" className='w-[100%] outline-none mobile:w-[90%] rounded shadow border p-[4px] mt-[10px] mb-[6px]'/>

              <label>Email</label>
              <input type="email" className='w-[100%] outline-none mobile:w-[90%] rounded shadow border p-[4px] mt-[10px] mb-[6px]'/>

              
              <label>Create Password</label>
              <input type="text" className='w-[100%] outline-none mobile:w-[90%] rounded shadow border p-[4px] mt-[10px] mb-[6px]'/>

              <label>Confirm Password</label>
              <input type="text" className='w-[100%] outline-none mobile:w-[90%] rounded shadow border p-[4px] mt-[10px] mb-[6px]'/>
              <label className='pb-[10px]'>
            <input type="checkbox" />
            <span >
              I agree with <Link to="/signup" className='text-blue-500'>terms</Link>&{' '}
              <Link to="/signup" className='text-blue-500'>Condition</Link>
            </span>
          </label>
          <button className=' mobile:w-[40%] border mobile:ml-[100px] rounded-[20px] p-[4px]  md:w-[60%] bg-blue-900 '>Register Account</button>
          <h4>or</h4>
          <button className='w-[100%] border flex flex-row justify-between p-[4px] rounded shadow md:w-[60%] md:ml-[100px]'>
            <img
            className='ml-[10px]'
            src={logo}
            alt='logo'
            width={20}
            height={30}
             />
            <span className='mr-[100px] md:mr-[160px] '>Register With Google</span>
          </button>
          <h3 className='text-[15px] ml-[20px] pb-[30px] md:ml-[32%] md:text-[15px]'>Don't have a registered account? <a className='text-blue-800'>Sign Up</a></h3>
           </form>
        {/* for mobile version */}

        <div className='bg-black text-white p-[20px] md:hidden'>
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
              <p className='flex flex-row rounded-[40%]'><img src={emailLogo} width={20} height={20}/>info@augudash.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

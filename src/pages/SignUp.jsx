import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"
import twitter from "../assets/twitter.png"
import github from "../assets/github.png"
import facebook from "../assets/Facebook.png"
import emailLogo from "../assets/email.jpeg"



const SignUp = () => {
  return (
    <div className="flex flex-col   bg-white w-[100%] h-[90%]">
      
      <div className=" flex mobile:flex-col md:flex-row">
        <div className=" hidden  bg-login-bg md:flex  bg-cover bg-center  flex-col p-4 w-4/12 h-screen">
          <h2>AD</h2>
          <p className="">
            "Lorem ipsum dolor 
            sit amet consectetur adipisicing elit. Cum, quis
            ut,mmodi est ullam dicta soluta optio obcaecati, perferendis
            voluptate eius corrupti nostrum odit asperiores aspernatur
            necessitatibus! Amet, officiis incidun"t.
          </p>
        </div>

        <div className="bg-white flex-col w-[100%] pl-[6px] p-5 md:flex md:flex-col  md:w-[65%]  md:pl-[80px]">
          <Link to="/" className='text-[11px]'>back</Link>
          <div className='bg-white h-[600px] w-[100%] md:w-[40%] md:h-[90%] pl-[10px]'>
          <h2 className='border-b pb-[20px] w-[100%]  text-black text-[20px] md:w-[90%]'>Register Your Account</h2>
                <form className='flex flex-col mt-[15px]'>
                    <label>Name</label>
                    <input type="text" placeholder="Enter Your Name" className='placeholder-black-900 w-[100%] text-black-900 text-[12px] pl-[10px] outline-none md:w-[90%] rounded shadow border p-[8px] mt-[10px] mb-[6px]'/>

                    <label className='text-[15px] font-[90px]'>Phone number</label>
                    <input type="text" placeholder="Enter Your Phone Number"  className='placeholder-black-900 w-[100%] text-black-900 text-[12px] pl-[10px] outline-none md:w-[90%] rounded shadow border p-[8px] mt-[10px] mb-[6px]'/>

                    <label>Email Address</label>
                    <input type="email" placeholder="Enter Your Email Address" className='placeholder-black-900 w-[100%] text-black-900 text-[12px] pl-[10px] outline-none md:w-[90%] rounded shadow border p-[8px] mt-[10px] mb-[6px]'/>

                    
                    <label>Create Password</label>
                    <input type="text" placeholder="Enter Your Password" className='placeholder-black-900 w-[100%] text-black-900 text-[12px] pl-[10px] outline-none md:w-[90%] rounded shadow border p-[8px] mt-[10px] mb-[6px]'/>

                    <label>Confirm Password</label>
                    <input type="text" placeholder="Re-Enter Your Password" className='placeholder-black-900 w-[100%] text-black-900 text-[12px] pl-[10px] outline-none md:w-[90%] rounded shadow border p-[8px] mt-[10px] mb-[6px]'/>
                    <label className='pb-[10px]'>
                  <input type="checkbox" className='h-[10px]' />
                  <span className='text-[11px] ml-[10px]' >
                    I agree with <Link to="/signup" className='text-blue-500 '>terms</Link>&{' '}
                    <Link to="/signup" className='text-blue-500'>Condition</Link>
                  </span>
                </label>
                <button className=' mobile:w-[40%] border mobile:ml-[100px] rounded-[20px] p-[4px]  md:w-[90%] bg-blue-900 '>Register Account</button>
                <h4>or</h4>
                <button className='w-[100%] border flex flex-row justify-between p-[4px] rounded shadow md:w-[90%]'>
                  <img
                  className='ml-[10px]'
                  src={logo}
                  alt='logo'
                  width={20}
                  height={30}
                  />
                  <span className='text-[14px] mr-[30%] md:mr-[60px]'>Register With Google</span>
                </button>
                <h3 className='text-[11px] ml-[30%] ml-[20px] md:pb-[30px] md:text-[11px] md:ml-[50px]'>Already a registerd user? <Link to="/signup" className='text-blue-600'>Sign in</Link></h3>
              </form>
          </div>
           
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

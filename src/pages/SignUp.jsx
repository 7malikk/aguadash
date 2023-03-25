import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"

const SignUp = (props) => {
  const{email,onChange}=props
  const change=(e)=>{
    onChange()
  }
   
  return (
    <div className="bg-blue-600 flex flex-col mobile:bg-red-600  md:bg-yellow-500 bg-white w-[100%] h-[100vh]">
      <Link to="/">back home</Link>
      <div className=" flex mobile:flex-col md:flex-row pl-[10px]">
        <div className=" hidden  bg-login-bg mobile: md:block  bg-cover bg-center flex flex-col p-4 w-4/12 h-[600px]">
          <h2>AD</h2>
          <p className="">
            <span>"</span>Lorem ipsum dolor 
            sit amet consectetur adipisicing elit. Cum, quis
            ut, commodi est ullam dicta soluta optio obcaecati, perferendis
            voluptate eius corrupti nostrum odit asperiores aspernatur
            necessitatibus! Amet, officiis incidun"t.
          </p>
        </div>

        <div className="bg-white w-[100%] pl-[6px] p-5 mobile: flex flex-col  md:w-[65%]  pl-[80px]">
          <h2 className='border-b pb-[20px] w-[100%] pl-[90px] mobile:w-[90%]'>Register Your Account</h2>
           <form className='flex flex-col mt-[15px]'>
              <label>Name</label>
              <input type="text" className='w-[100%] outline-none md:w-[90%] mobile:w-[90%] rounded border shadow p-[4px] mt-[10px]  mb-[6px]'/>

              <label>Phone number</label>
              <input type="text" className='w-[100%]  outline-none mobile:w-[90%] mobile:p-[4px]  md:w-[90%] rounded  shadow border p-[4px] mt-[10px]  mb-[6px]'/>

              <label>Email</label>
              <input type="email" onChange={change} className='w-[100%] mobile:w-[90%] shadow outline-none rounded border p-[4px]  mt-[10px]  mb-[6px]'/>

              
              <label>Create Password</label>
              <input type="text" className='w-[100%] p-[4px] mobile:w-[90%] shadow outline-none rounded border mt-[10px]  mb-[6px]'/>

              <label>Confirm Password</label>
              <input type="text" className='w-[100%] outline-none mobile:w-[90%] rounded shadow border p-[4px] mt-[10px] mb-[6px]'/>
              <label>
            <input type="checkbox" />
            <span>
              I agree with <Link to="/signup" className='text-blue-500'>terms</Link>&{' '}
              <Link to="/signup" className='text-blue-500'>Condition</Link>
            </span>
          </label>
          <button className=' w-[100%] ml-[0] mobile:w-[40%] border mobile:ml-[100px] rounded-[20px] p-[4px]  bg-blue-500 '>Register Account</button>
          <h4>or</h4>
          <button className=' w-[100%] ml-[0] mobile:w-[40%] border-2  rounded p-[4px]  flex justify-between mobile:ml-[100px]'>
            <img
            className='ml-[10px]'
            src={logo}
            alt='logo'
            width={20}
            height={30}
             />
            <span className='mr-[100px] md:mr-[60px]'>Register With Google</span>
          </button>
           </form>

        </div>
      </div>
    </div>
  );
};

export default SignUp;

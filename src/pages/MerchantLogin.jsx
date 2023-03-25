import React from 'react';

const MerchantLogin = () => {
  return(
    <div className=''>
      <div className=' flex w-[100%]'>
          <div className='bg-login-bg bg-cover  bg-center flex flex-col p-4 w-[40%] h-[99vh]'>
            <h2>AD</h2>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quis ut, commodi est ullam dicta soluta optio obcaecati, perferendis voluptate eius corrupti nostrum odit asperiores aspernatur necessitatibus! Amet, officiis incidunt.</p>
          </div>
          
          <div className='bg-white flex flex-col  w-[50%] p-5 pl-7 h-[99vh] mt-[60px] ml-[30px]'>
            <h2 className='border-b-2 border-black-200 w-[70%] pb-[15px]'>Merchant Login</h2>
            <form className='flex flex-col mt-[30px]'>
                <label>UserName</label>
                <input type="text" className='w-[70%] outline-none p-[5px] rounded border border-black mt-[20px]  mb-[6px]'/>

                <label>Password</label>
                <input type="text" className='w-[70%] outline-none p-[5px] rounded border border-black mt-[20px]  mb-[6px]'/>
            </form>
            <button className='border ml-[100px] mt-[20px] rounded-[20px] p-[4px] w-[40%] bg-blue-500' >
              Login
            </button>
          </div>
      </div>  
    </div>
  )
};

export default MerchantLogin;

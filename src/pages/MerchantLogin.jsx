import React from 'react';

const MerchantLogin = () => {
  return(
    <div className='w-[100%] h-[100vh] flex flex-row'>
         <div className='hidden md:flex bg-login-bg bg-cover bg-center  flex-col p-5 w-[40%]'>
            <h2>AD</h2>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quis ut, commodi est ullam dicta soluta optio obcaecati, perferendis voluptate eius corrupti nostrum odit asperiores aspernatur necessitatibus! Amet, officiis incidunt.</p>
          </div>
          
          <div className='bg-blue w-[100%] flex flex-col md:w-[60%] '>
              <h2 className="w-[100%] ml-[45px] pb-[20px] mr-[30px] pr-[20px] text-[20px] border-b-2 border-black-300  md:w-[70%] ">Merchant Login</h2>
              <div className='p-[40px]'>
                  <form className='flex flex-col pt-[10px]'>
                    <label>Username</label>
                    <input type="text" placeholder='input your username' className="w-[100%] shadow  p-[6px] md:w-[70%] outline-none rounded border border-black-600 mt-[10px] mb-[6px]"/>

                    <lable>Password</lable>
                    <input type="text" placeholder='input password'  className="w-[100%] shadow  p-[6px] md:w-[70%] outline-none rounded border border-black-600 mt-[10px] mb-[6px]"/>
                  </form>
                  
                  <button className='w-[100%] ml-[0] bg-blue-800 md:ml-[60px]  p-1 px-2 rounded-[10px] mt-[40px] hover:bg-blue-500 hover:text-white md:w-[50%]'>
                              login Account
                  </button>
              </div>
              <div className='w-[100%] bg-black text-white p-[20px] md:hidden'>
                    <h2 className='text-[30px] pb-[20px]'>AGUADASH</h2>
                    <p>Here at aguadash we give our customers the best services they need, which makes us a reliable company to work with.</p>
                    <div>
                      <h2 className='text-[30px] pt-[10px]'>Links</h2>
                      {/* <div>
                        <img src={facebook} width={20}  height={30}/>
                        <img src={github} width={20}  height={30}/>
                        <img src={linkind} width={20}  height={30}/>
                        <img src={twitter} width={20}  height={30}/>
                      </div> */}
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
  )
};

export default MerchantLogin;

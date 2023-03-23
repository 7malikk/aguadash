import React from 'react';

const MerchantLogin = () => {
  return(
    <div>
       <div className='pl-5'>
      <h2>Login</h2>
      <div className=' flex'>
         
          <div className='bg-blue-600 flex flex-col p-4 w-4/12 p-5'>
            <h2>AD</h2>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quis ut, commodi est ullam dicta soluta optio obcaecati, perferendis voluptate eius corrupti nostrum odit asperiores aspernatur necessitatibus! Amet, officiis incidunt.</p>
          </div>
          
          <div className='bg-blue-100 flex flex-col  w-4/12 p-5 pl-7'>
            <h2>Merchant Login</h2>
            <label>
              Username
             <br/><input type="text" value={"Enter your username"}/>
            </label>
            <label>
             Enter Password
              <br/><input type="text" value={"Enter your Password"}/>
            </label>
            <button>
              Login
            </button>
          </div>
      </div>
    </div>
    </div>
  )
};

export default MerchantLogin;

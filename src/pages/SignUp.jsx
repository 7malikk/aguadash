import React from 'react';

const SignUp = () => {
  return(
    <div className='pl-5'>
      <h2>Signup</h2>
      <div className=' flex'>
         
          <div className='bg-blue-600 flex flex-col p-4 w-4/12 p-5'>
            <h2>AD</h2>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quis ut, commodi est ullam dicta soluta optio obcaecati, perferendis voluptate eius corrupti nostrum odit asperiores aspernatur necessitatibus! Amet, officiis incidunt.</p>
          </div>
          
          <div className='bg-blue-100 flex flex-col  w-4/12 p-5 pl-7'>
            <h2>Register Your Account</h2>
            <label>
              Name
             <br/><input type="text" value={"Enter your first name"}/>
            </label>
            <label>
              Phone Number
              <br/><input type="text" value={"Enter your first name"}/>
            </label>
            <label>
              Email Address
             <br/><input type="email" value={"Enter your email Address"}/>
            </label>
            <label>
              Create Password
              <br/> <input type="text" value={"Enter your first name"}/>
            </label>
            <label>
              Confirm Password
              <br/> <input type="text" value={"confirm pass"}/>
            </label>
            <label>
              <input type="checkbox"/><span>I agree with <a href='#'>terms</a>& <a>Condition</a></span>
            </label>
            <button>
              Register Account
            </button>
            <h4>or</h4>
            <button><img/><span>Register With Google</span></button>
          </div>
      </div>
    </div>
  )
};

export default SignUp;

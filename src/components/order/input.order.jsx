import React, { useState } from "react";
import PaystackPop from "@paystack/inline-js"
import {usePaystackPayment} from "react-paystack"




function InputOrder({info,setInfo,setPaymentstatus,paymentStatus}){
     let { 
     Address,
     time,
     date,
     amount_of_Bags,
}=info
  let amount = amount_of_Bags * 500;
     const[email,setEmail]=useState("")
     
     console.log(amount)
    
const paywithPaystack=(e)=>{
     e.preventDefault()
     const paystack = new PaystackPop()
     paystack.newTransaction({
          REACT_APP_PAYSTACK_KEY:'pk_test_f77f6d16d41b43c55d5d619bfa0e4a7571685cb6',
          amount:amount * 100,
          email,
          onSuccess(){
             setPaymentstatus(true)
          },
          onCancel(){
               setPaymentstatus(false)
            }
     })
}

console.log(paymentStatus)
    return(
        <div className="mt-[10px] shadow border p-[10px]">
           <div className="shadow p-[2px] border-black mb-[10px] flex">
                <label className="mt-[10px]">Address:</label>
                <input type="text" 
                className="border-none outline-none rounded w-[100%] p-[10px] pl-[2px]"  
                name="name"
                onChange={(e)=>{
                    setInfo({
                         ...info,
                         Address:e.target.value
                    })
                }}
                />
           </div>
           <div className="shadow p-[2px] border mb-[10px] flex">
                <label className="mt-[10px]">Time:</label>
                <input type="time" className="border-none outline-none rounded w-[100%] p-[10px] pl-[2px]"  name="name"
                onChange={(e)=>{
                    setInfo({
                         ...info,
                         time:e.target.value
                    })
                }}
                />
           </div>
          
           <div className="shadow p-[2px] border mb-[10px] flex">
                <label className="mt-[10px]">Date:</label>
                <input type="date" className="border-none outline-none rounded w-[100%] p-[10px] pl-[2px]"  name="name"
                onChange={(e)=>{
                   
                    // setInfo({
                    //      ...info,
                    //      date:e.target.value
                    // })
                }}
                />
           </div>
          
           <div className="shadow p-[2px] border mb-[10px] flex">
                <label className="mt-[10px]">No. of Bags:</label>
                <input type="text" className="border-none outline-none rounded w-[80%] p-[10px] pl-[2px]"  name="name"
                onChange={(e)=>{
                    setInfo({
                         ...info,
                         amount_of_Bags:e.target.value
                    })
                }}
                />
           </div>
          
           <div className="shadow p-[2px] border mb-[10px] flex">
                <label className="mt-[10px]">email:</label>
                <input type="text" required className="border-none outline-none rounded w-[80%] p-[10px] pl-[2px]"  name="name"
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                />
           </div>
           <div className="shadow p-[2px] border mb-[10px] flex">
                <label className="mt-[10px]">Total Cost:</label>
                <input type="text" required className="border-none outline-none rounded w-[80%] p-[10px] pl-[2px]"  name="name"
                 value={
                    amount_of_Bags * 500
                } 

                />
           </div>
          <button className="shadow p-[10px] border mb-[10px] flex text-center pl-[47%] rounded bg-[#0369a1] w-[100%]"
     
     onClick={paywithPaystack}
          >Order</button>
        </div>
    )
}

export default InputOrder
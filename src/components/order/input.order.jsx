import React, { useState } from "react";

function InputOrder(props){
     let{info,onAction}=props
     

    

    return(
        <div className="mt-[10px] shadow border p-[10px]">
           <div className="shadow p-[2px] border-black mb-[10px] flex">
                <label className="mt-[10px]">Address:</label>
                <input type="text" 
                className="border-none outline-none rounded w-[100%] p-[10px] pl-[2px]"  
                name="name"
                onChange={(e)=>{
                    setNewInfo({
                         ...newinfo,
                         Address:e.target.value
                    })
                }}
                />
           </div>
          
           <div className="shadow p-[2px] border mb-[10px] flex">
                <label className="mt-[10px]">Time:</label>
                <input type="text" className="border-none outline-none rounded w-[100%] p-[10px] pl-[2px]"  name="name"/>
           </div>
          
           <div className="shadow p-[2px] border mb-[10px] flex">
                <label className="mt-[10px]">Date:</label>
                <input type="text" className="border-none outline-none rounded w-[100%] p-[10px] pl-[2px]"  name="name"/>
           </div>
          
           <div className="shadow p-[2px] border mb-[10px] flex">
                <label className="mt-[10px]">No. of Bags:</label>
                <input type="text" className="border-none outline-none rounded w-[80%] p-[10px] pl-[2px]"  name="name"/>
           </div>

           <div className="shadow p-[2px] border mb-[10px] flex">
                <label className="mt-[10px]">Total Cost:</label>
                <input type="text" className="border-none outline-none rounded w-[80%] p-[10px] pl-[2px]"  name="name"/>
           </div>
          <button className="shadow p-[10px] border mb-[10px] flex text-center pl-[47%] rounded bg-[#0369a1] w-[100%]">Order</button>
        </div>
    )
}

export default InputOrder
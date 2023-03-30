import React,{useState} from "react"
import InputOrder from "./input.order";
import OngoingOrder from "./ongoing.order";
import FailedOrder from "./failed.order";

function Order(){
     const[info, setInfo]=useState({
        Address:"",
        time:"",
        date:"",
        amonunt_of_Bags:""
     })
     const Update=(e)=>{
        setInfo({
            ...info,
            Address:e.target.value
        })
     }
     console.log(info)
    const[order,setOrder]=useState("compo1")
    const Handle_1=()=>{
        setOrder("compo1")
    }
    const Handle_2=()=>{
        setOrder("compo2")
    }
    const Handle_3=()=>{
        setOrder("compo3")
    }

   return(
    <div className="bg-white w-[534px] h-screen p-[10px]">
        <nav className=" bg-white flex justify-between border p-[10px]">
            <button className="bg-[#0369a1] w-[30%] rounded p-[10px]"
            onClick={()=>{
                 setOrder("compo1")
               
            }}
            >Place Order</button>
            <button className="bg-[#0369a1] rounded p-[10px] w-[30%]"
             onClick={()=>{
                 setOrder("compo2")
                
            }}
            >Ongoing Orders</button>
            <button className="bg-[#0369a1] p-[5px] rounded w-[30%]"
             onClick={()=>{
                 setOrder("compo3")
                
            }}
            >Failed Orders</button>
        </nav>
        {order === "compo1" && <InputOrder/>}
        {order=== "compo2" && <OngoingOrder/>}
        {order === "compo3" && <FailedOrder/>}
       {/* <InputOrder info={info} onAction={Update}/> */}
       {/* <OngoingOrder/> */}
       {/* <FailedOrder info={info} onAction={handleChange}/> */}
    </div>
   )
}


export default Order;
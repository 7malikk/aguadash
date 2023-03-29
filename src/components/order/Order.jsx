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
    const[order,setOrder]=useState(true)
    const[ongoing,setOngoing]=useState(true)
    const[failed,setFailed]=useState(true);

   return(
    <div className="bg-white w-[534px] h-screen p-[10px]">
        <nav className=" bg-white flex justify-between border p-[10px]">
            <button className="bg-[#0369a1] w-[30%] rounded p-[10px]"
            onClick={()=>{
                setOngoing(false)
               
            }}
            >Place Order</button>
            <button className="bg-[#0369a1] rounded p-[10px] w-[30%]"
             onClick={()=>{
                setOrder(false)
                
            }}
            >Ongoing Orders</button>
            <button className="bg-[#0369a1] p-[5px] rounded w-[30%]"
             onClick={()=>{
                setOngoing(false)
                
            }}
            >Failed Orders</button>
        </nav>
        {/* {order && <InputOrder/>}
        {ongoing && <InputOrder/>}
        {failed && <InputOrder/>} */}
       <InputOrder info={info}/>
       {/* <OngoingOrder/> */}
       {/* <FailedOrder info={info} onAction={handleChange}/> */}
    </div>
   )
}


export default Order;
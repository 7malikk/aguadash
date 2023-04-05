import React,{useState} from "react"
import InputOrder from "./input.order";
import OngoingOrder from "./ongoing.order";
import FailedOrder from "./failed.order";

function Order(){
     const[info, setInfo]=useState({
        Address:"",
        time:"",
        date:"",
        amount_of_Bags:"",
        amount:400,
     })
    const [paymentStatus, setPaymentstatus]=useState(false)
    const[buttonClicked, SetButtonclicked]=useState(1)
    const[order,setOrder]=useState("compo1")

    const handleButtonclicked=(number)=>{
          SetButtonclicked(number)
    }
    
   return(
    <div className="bg-white w-[534px] h-screen p-[10px]">
        <nav className=" bg-white flex justify-between border-[#0f172a] border-[1px] p-[10px]">
                <button className="text-white w-[30%] rounded p-[10px]"
                style={{backgroundColor: buttonClicked === 1 ? "#0e7490" : "white",
                color: buttonClicked===1 ? "white" : "black"
            }}
                onClick={()=>{
                    setOrder("compo1")
                    handleButtonclicked(1)
                
                }}
                >Place Order</button>
                <button className="text-white rounded p-[10px] w-[30%]"
                style={{backgroundColor: buttonClicked === 2 ?  "#0e7490" : "white",
                color: buttonClicked===2 ? "white" : "black"
            }}
                onClick={()=>{
                    setOrder("compo2")
                    handleButtonclicked(2)
                    
                }}
                >Ongoing Orders</button>
                <button className="text-white p-[5px] rounded w-[30%]"
                style={{backgroundColor: buttonClicked===3 ?  "#0e7490" : "white", 
                color: buttonClicked===3 ? "white" : "black"
            }}
                onClick={()=>{
                    setOrder("compo3")
                    handleButtonclicked(3)
                    
                }}
                >Failed Orders</button>
        </nav>
        {order === "compo1" && <InputOrder info={info} setInfo={setInfo} setPaymentstatus={setPaymentstatus} paymentStatus={paymentStatus}/>}
        {order=== "compo2" && <OngoingOrder info={info}/>}
        {order === "compo3" && <FailedOrder/>}
       {/* <InputOrder info={info} onAction={Update}/> */}
       {/* <OngoingOrder/> */}
       {/* <FailedOrder info={info} onAction={handleChange}/> */}
    </div>
   )
}


export default Order;
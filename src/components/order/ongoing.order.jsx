import React from "react"

function OngoingOrder({info}){
    

    return(
        <div className="mt-[10px] shadow border p-[10px] ">

            <div className="grid grid-cols-2 gap-x-[8rem] bg-black p-[10px] mt-[10px]">
                <div>
                    <p className="text-[13px] text-white">current Order</p>
                    <h2 className="text-[20px] text-white text-black font-bold font-play">{info.amount_of_Bags}</h2>
                </div>
                <div>
                    <p className="text-[13px] text-white">Status</p>
                    <h2 className="text-[20px] text-white text-black font-bold font-play">Processing</h2>
                </div>
                <div>
                    <p className="text-[13px] text-white">Address</p>
                    <h2 className="text-[20px] text-white text-black font-bold font-play">{info.Address}</h2>
                </div>
                <div>
                    <p className="text-[13px] text-white">Data</p>
                    <h2 className="text-[20px] text-white text-black font-bold font-play" >{info.date}</h2>
                </div>
                <div>
                    <p className="text-[13px] text-white">Time</p>
                    <h2 className="text-[20px] text-white text-black font-bold font-play ">{info.time}</h2>
                </div>
                <div className="">
                    <p className="text-[13px] text-white">Amount paid</p>
                    <h2 className="text-[20px] text-white text-black font-bold font-play">$7,410</h2>
                </div>
            </div>
        </div>
    )
}

export default OngoingOrder;
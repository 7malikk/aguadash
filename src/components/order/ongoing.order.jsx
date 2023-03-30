import React from "react"

function OngoingOrder(){
    

    return(
        <div className="mt-[10px] shadow border p-[10px] ">

            <div className="grid grid-cols-2 gap-x-[8rem] bg-black p-[10px] mt-[10px]">
                <div>
                    <p className="text-[13px] text-white">current Order</p>
                    <h2 className="text-[20px]text-white text-black font-bold font-play">10 Bags</h2>
                </div>
                <div>
                    <p className="text-[13px] text-white">Status</p>
                    <h2 className="text-[20px] text-white text-black font-bold font-play">Processing</h2>
                </div>
                <div>
                    <p className="text-[13px] text-white">Address</p>
                    <h2 className="text-[20px] text-white text-black font-bold font-play">No1. Ahmadu bello way</h2>
                </div>
                <div>
                    <p className="text-[13px] text-white">Data</p>
                    <h2 className="text-[20px] text-white text-black font-bold font-play" >Mon 12. july 2023</h2>
                </div>
                <div>
                    <p className="text-[13px] text-white">Time</p>
                    <h2 className="text-[20px] text-white text-black font-bold font-play ">4:30pm</h2>
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
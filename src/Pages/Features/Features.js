import React, {useState} from "react";

export default function Features() {
    const [active, setActive] = useState(0)
    return(
        <>
            <div>
                <p className={'text-[40px] text-center font-[600] py-[50px]'}> Connect your memories</p>
                <div className={'flex gap-5 justify-center'}>
                    <button onClick={()=>setActive(0)} className={`bg-[#FFA900] hover:bg-[#FFA100] text-[18px] font-[400] text-black px-10 py-2 rounded-md ${active===0 && "font-[700] bg-[#FFA000]"}`}>Add Memory</button>
                    <button onClick={()=>setActive(1)} className={`bg-[#FFA900] hover:bg-[#FFA100] text-[18px] font-[400] text-black px-10 py-2 rounded-md ${active===1 && "font-[700] bg-[#FFA000]"}`}>Personal AI</button>
                    <button onClick={()=>setActive(2)} className={`bg-[#FFA900] hover:bg-[#FFA100] text-[18px] font-[400] text-black px-10 py-2 rounded-md ${active===2 && "font-[700] bg-[#FFA000]"}`}>Learn</button>
                    <button onClick={()=>setActive(3)} className={`bg-[#FFA900] hover:bg-[#FFA100] text-[18px] font-[400] text-black px-10 py-2 rounded-md ${active===3 && "font-[700] bg-[#FFA000]"}`}>Experiences</button>
                    <button onClick={()=>setActive(4)} className={`bg-[#FFA900] hover:bg-[#FFA100] text-[18px] font-[400] text-black px-10 py-2 rounded-md ${active===4 && "font-[700] bg-[#FFA000]"}`}>Identify</button>
                </div>
                <div className={'pt-5 flex justify-center'}>
                    <div className={'w-2/3'}>
                        <div className={'bg-white drop-shadow-lg h-[500px]'}>
                            {active === 0 &&
                                <div className={'flex flex-col justify-center items-center'}>
                                    <p className={'text-[40px] font-[600]'}>0</p>
                                </div>
                            }
                            {active === 1 &&
                                <div className={'flex flex-col justify-center items-center'}>
                                    <p className={'text-[40px] font-[600]'}>1</p>
                                </div>
                            }
                            {active === 2 &&
                                <div className={'flex flex-col justify-center items-center'}>
                                    <p className={'text-[40px] font-[600]'}>2</p>
                                </div>
                            }
                            {active === 3 &&
                                <div className={'flex flex-col justify-center items-center'}>
                                    <p className={'text-[40px] font-[600]'}>3</p>
                                </div>
                            }
                            {active === 4 &&
                                <div className={'flex flex-col justify-center items-center'}>
                                    <p className={'text-[40px] font-[600]'}>4</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
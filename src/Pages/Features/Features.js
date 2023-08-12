import React from "react";

export default function Features() {
    return(
        <>
            <div>
                <p className={'text-[40px] text-center font-[600] py-[50px]'}> Connect your memories</p>
                <div className={'flex gap-5 justify-center'}>
                    <button className={'bg-[#FFA900] hover:bg-[#FFA100] font-[400] text-black px-10 py-2 rounded-md'}>Personal AI</button>
                    <button className={'bg-[#FFA900] hover:bg-[#FFA100] font-[400] text-black px-10 py-2 rounded-md'}>ML Stuff</button>
                    <button className={'bg-[#FFA900] hover:bg-[#FFA100] font-[400] text-black px-10 py-2 rounded-md'}>ML Stuff</button>
                    <button className={'bg-[#FFA900] hover:bg-[#FFA100] font-[400] text-black px-10 py-2 rounded-md'}>ML Stuff</button>
                    <button className={'bg-[#FFA900] hover:bg-[#FFA100] font-[400] text-black px-10 py-2 rounded-md'}>ML Stuff</button>
                </div>
                <div className={' flex justify-center'}>
                    <div className={'w-2/3'}>
                        <div className={'bg-white drop-shadow-lg h-[500px]'}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
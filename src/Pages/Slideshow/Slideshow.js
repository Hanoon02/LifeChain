import React from "react";

export default function Slideshow() {
    return(
        <>
            <div>
                <p className={'text-[50px] text-center font-[500]'}> Connect your memories</p>
                <div className={'flex gap-5 justify-center'}>
                    <button className={'bg-[#FFA900] hover:bg-[#FFA100] font-[400] text-black px-10 py-2 rounded-md'}>Personal AI</button>
                    <button className={'bg-[#FFA900] hover:bg-[#FFA100] font-[400] text-black px-10 py-2 rounded-md'}>ML Stuff</button>
                </div>
                <div className={'py-10 flex justify-center'}>
                    <div className={'w-2/3'}>
                        <div className={'bg-white drop-shadow-lg h-[100px]'}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
import React from "react";

export default function Interview() {
    return (
        <>
            <div className={'flex flex-col justify-center py-[50px]'}>
                <p className={'text-[40px] font-[600] text-center'}> Our Stories </p>
                <div className={'flex justify-center pt-5 gap-5'}>
                    <div className={'h-[400px] w-[400px] shadow-lg p-8'}>
                        <p className={'text-[40px] font-[600]'}>I did blah blah blah blah blah</p>
                    </div>
                    <div className={'h-[400px] w-[400px] shadow-lg p-8'}>
                        <p className={'text-[40px] font-[600]'}>I did blah blah blah blah blah</p>
                    </div>
                    <div className={'h-[400px] w-[400px] shadow-lg p-8'}>
                        <p className={'text-[40px] font-[600]'}>I did blah blah blah blah blah</p>
                    </div>
                </div>
            </div>
        </>
    )
}
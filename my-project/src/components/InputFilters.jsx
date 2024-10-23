import React, { useState } from 'react'

export default function InputFilters({content,filters}) {
    const [open,setOpen] = useState(true)
  return (
    <div className='flex flex-col items-center justify-end p-3 my-2'>
        <p className='justify-end flex w-full'>{content}</p>
        <div className='w-full relative cursor-pointer mt-4 p-3 rounded-md bg-bg flex items-center'>
        <svg onClick={e=>{
            setOpen(true)
        }} className='' width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.28125 8.69653L1.28125 2.69653C0.875 2.32153 0.875 1.66528 1.28125 1.29028C1.65625 0.884033 2.3125 0.884033 2.6875 1.29028L8 6.57153L13.2812 1.29028C13.6562 0.884033 14.3125 0.884033 14.6875 1.29028C15.0938 1.66528 15.0938 2.32153 14.6875 2.69653L8.6875 8.69653C8.3125 9.10278 7.65625 9.10278 7.28125 8.69653Z" fill="#A3A3A3"/>
</svg>
        <input
        disabled
        placeholder='انتخاب کنید'
        dir='rtl' className=' w-[90%] bg-bg h-full border-none outline-none ' type="text" />
   
{open&&(
  <div className='absolute top-0 left-0 bg-bg w-full rounded-md'>
    <div className='flex items-center justify-between p-3'>
    <svg onClick={e=>{
        setOpen(false)
    }} width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.28125 1.3125C7.65625 0.90625 8.3125 0.90625 8.6875 1.3125L14.6875 7.3125C15.0938 7.6875 15.0938 8.34375 14.6875 8.71875C14.3125 9.125 13.6562 9.125 13.2812 8.71875L8 3.4375L2.6875 8.71875C2.3125 9.125 1.65625 9.125 1.28125 8.71875C0.875 8.34375 0.875 7.6875 1.28125 7.3125L7.28125 1.3125Z" fill="#46B879"/>
</svg>

<input
        disabled
        placeholder='انتخاب کنید'
        dir='rtl' className=' w-[90%] bg-bg h-full border-none outline-none ' type="text" />
  </div>
  </div>

)}


            
        </div>
    </div>
  )
}

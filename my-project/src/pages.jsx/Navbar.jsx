import React from 'react'
import { useState } from 'react'
export default function Navbar() {

  const [searchValue , setSearchValue] = useState("")
  const [open , setopen] = useState(false)
  return (
    <div className='bg-[#fff] flex justify-center fixed w-full top-0'>
<div className='w-[70%] p-5 grid grid-cols-2'>
<div   className='flex items-center  '>
 
<div  className='w-[250px]    bg-bg  relative p-3 rounded-full flex-row-reverse justify-between flex items-center h-full'>

  <div  className='flex flex-row-reverse items-center'>
  <img className='w-9 mx-3 h-9 rounded-full' src="src/assets/profile.jpeg" alt="" />
  <p>همدل 1</p>
  </div>
  <svg onClick={e=>{
    setopen(true)
  }} className='cursor-pointer' width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5156 10.5625C10.2344 10.8438 9.71875 10.8438 9.4375 10.5625L0.4375 1.5625C0.15625 1.28125 0.15625 0.765625 0.4375 0.484375C0.71875 0.203125 1.23438 0.203125 1.51562 0.484375L10 8.96875L18.4375 0.484375C18.7188 0.203125 19.2344 0.203125 19.5156 0.484375C19.7969 0.765625 19.7969 1.28125 19.5156 1.5625L10.5156 10.5625Z" fill="#A3A3A3"/>
</svg>
{open&&(
<div className='absolute top-0 right-0 w-full   bg-bg rounded-md'>
  <div>
    <div className='flex items-center flex-row-reverse justify-between p-3'>
    <div className='flex items-center flex-row-reverse'>
    <img className='w-9 mx-3 h-9 rounded-full' src="src/assets/profile.jpeg" alt="" />
    <p>همدل 1</p>
    </div>
    <svg className='cursor-pointer' onClick={e=>{
      setopen(false)
    }} width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.4375 0.484375C9.71875 0.203125 10.2344 0.203125 10.5156 0.484375L19.5156 9.48438C19.7969 9.76562 19.7969 10.2812 19.5156 10.5625C19.2344 10.8438 18.7188 10.8438 18.4375 10.5625L10 2.07812L1.51562 10.5625C1.23438 10.8438 0.71875 10.8438 0.4375 10.5625C0.15625 10.2812 0.15625 9.76562 0.4375 9.48438L9.4375 0.484375Z" fill="#A3A3A3"/>
</svg>
    </div>
    
<ul className='flex flex-col items-end py-5 p-5'>
    <li className='flex items-center mb-5 cursor-pointer '>
      <p className='mr-3 text-[#2BAE66]'>مشاهده پروفایل</p>
      <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 6.5C15 4.90625 14.1094 3.45312 12.75 2.60938C11.3438 1.8125 9.60938 1.8125 8.25 2.60938C6.84375 3.45312 6 4.90625 6 6.5C6 8.14062 6.84375 9.59375 8.25 10.4375C9.60938 11.2344 11.3438 11.2344 12.75 10.4375C14.1094 9.59375 15 8.14062 15 6.5ZM4.5 6.5C4.5 4.39062 5.625 2.42188 7.5 1.34375C9.32812 0.265625 11.625 0.265625 13.5 1.34375C15.3281 2.42188 16.5 4.39062 16.5 6.5C16.5 8.65625 15.3281 10.625 13.5 11.7031C11.625 12.7812 9.32812 12.7812 7.5 11.7031C5.625 10.625 4.5 8.65625 4.5 6.5ZM1.5 23H19.5C19.4062 19.2969 16.3594 16.25 12.6094 16.25H8.34375C4.59375 16.25 1.54688 19.2969 1.5 23ZM0 23.1406C0 18.5 3.70312 14.75 8.34375 14.75H12.6094C17.25 14.75 21 18.5 21 23.1406C21 23.8906 20.3438 24.5 19.5938 24.5H1.35938C0.609375 24.5 0 23.8906 0 23.1406Z" fill="#A3A3A3"/>
</svg>

    </li>
    <li className='flex items-center mb-5 cursor-pointer '>
      <p className='mr-3 text-[#2BAE66]'>دنبال شده ها </p>
      <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 6.5C6 8.14062 6.84375 9.59375 8.25 10.4375C9.60938 11.2344 11.3438 11.2344 12.75 10.4375C14.1094 9.59375 15 8.14062 15 6.5C15 4.90625 14.1094 3.45312 12.75 2.60938C11.3438 1.8125 9.60938 1.8125 8.25 2.60938C6.84375 3.45312 6 4.90625 6 6.5ZM12.6094 16.25H8.34375C4.59375 16.25 1.54688 19.2969 1.5 23H19.5C19.4062 19.2969 16.3594 16.25 12.6094 16.25ZM10.5 12.5C8.34375 12.5 6.375 11.375 5.29688 9.5C4.21875 7.67188 4.21875 5.375 5.29688 3.5C6.375 1.67188 8.34375 0.5 10.5 0.5C12.6094 0.5 14.5781 1.67188 15.6562 3.5C16.7344 5.375 16.7344 7.67188 15.6562 9.5C14.5781 11.375 12.6094 12.5 10.5 12.5ZM8.34375 14.75H12.6094C17.25 14.75 21 18.5 21 23.1406C21 23.8906 20.3438 24.5 19.5938 24.5H1.35938C0.609375 24.5 0 23.8906 0 23.1406C0 18.5 3.70312 14.75 8.34375 14.75ZM24 14.75V11H20.25C19.8281 11 19.5 10.6719 19.5 10.25C19.5 9.875 19.8281 9.5 20.25 9.5H24V5.75C24 5.375 24.3281 5 24.75 5C25.125 5 25.5 5.375 25.5 5.75V9.5H29.25C29.625 9.5 30 9.875 30 10.25C30 10.6719 29.625 11 29.25 11H25.5V14.75C25.5 15.1719 25.125 15.5 24.75 15.5C24.3281 15.5 24 15.1719 24 14.75Z" fill="#A3A3A3"/>
</svg>


    </li>
    <li className='flex items-center mb-5 cursor-pointer '>
      <p className='mr-3 text-[#2BAE66]'> خروج</p>
      <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.75 1.25V13.25C11.75 13.6719 11.375 14 11 14C10.5781 14 10.25 13.6719 10.25 13.25V1.25C10.25 0.875 10.5781 0.5 11 0.5C11.375 0.5 11.75 0.875 11.75 1.25ZM6.6875 4.20312C3.64062 5.75 1.625 8.89062 1.625 12.5C1.625 17.7031 5.79688 21.875 11 21.875C16.1562 21.875 20.375 17.7031 20.375 12.5C20.375 8.89062 18.3125 5.75 15.2656 4.20312C14.8906 4.01562 14.75 3.54688 14.9375 3.17188C15.125 2.79688 15.5938 2.65625 15.9688 2.84375C19.4844 4.67188 21.875 8.32812 21.875 12.5C21.875 18.5469 17 23.375 11 23.375C4.95312 23.375 0.125 18.5469 0.125 12.5C0.125 8.32812 2.51562 4.67188 5.98438 2.84375C6.35938 2.65625 6.82812 2.79688 7.01562 3.17188C7.20312 3.54688 7.0625 4.01562 6.6875 4.20312Z" fill="#A3A3A3"/>
</svg>


    </li>
</ul>
    
  </div>

</div>


)}

</div>
<div  className='w-[400px] mx-7 focus-within:border focus-within:bg-[#fff] focus-within:border-[#2BAE66]   bg-bg flex justify-between items-center p-3  rounded-md '>
<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 9.75C18 6.84375 16.4062 4.125 13.875 2.625C11.2969 1.17188 8.15625 1.17188 5.625 2.625C3.04688 4.125 1.5 6.84375 1.5 9.75C1.5 12.7031 3.04688 15.4219 5.625 16.9219C8.15625 18.375 11.2969 18.375 13.875 16.9219C16.4062 15.4219 18 12.7031 18 9.75ZM16.0781 17.1562C14.3906 18.6562 12.1406 19.5 9.75 19.5C4.35938 19.5 0 15.1406 0 9.75C0 4.40625 4.35938 0 9.75 0C15.0938 0 19.5 4.40625 19.5 9.75C19.5 12.1875 18.6094 14.3906 17.1562 16.125L23.7656 22.7344C24.0469 23.0156 24.0469 23.5312 23.7656 23.8125C23.4844 24.0938 22.9688 24.0938 22.6875 23.8125L16.0781 17.1562Z" fill="#A3A3A3"/>
</svg>
{searchValue&&(
  <svg className='cursor-pointer' onClick={e=>{
    setSearchValue("")
  }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.1875 15.3125L8 9.07812L1.76562 15.3125C1.48438 15.5938 1.01562 15.5938 0.6875 15.3125C0.40625 14.9844 0.40625 14.5156 0.6875 14.2344L6.92188 8L0.6875 1.8125C0.40625 1.53125 0.40625 1.0625 0.6875 0.734375C1.01562 0.453125 1.48438 0.453125 1.76562 0.734375L8 6.96875L14.1875 0.734375C14.4688 0.453125 14.9375 0.453125 15.2656 0.734375C15.5469 1.0625 15.5469 1.53125 15.2656 1.8125L9.03125 8L15.2656 14.2344C15.5469 14.5156 15.5469 14.9844 15.2656 15.3125C14.9375 15.5938 14.4688 15.5938 14.1875 15.3125Z" fill="#A3A3A3"/>
  </svg>
  
)}

      <input dir='rtl'value={searchValue}
      onChange={e=>{
        setSearchValue(e.target.value)
      }}
      className='h-full w-[80%] items-end focus-within:bg-[#fff] bg-bg border-none outline-none' type="text"placeholder=''/>
 
   
</div>

   
    </div>
  <ul className='flex flex-row-reverse'>
  <li className='flex items-center mx-5 cursor-pointer'>
      <p className='mx-3 '>شبکه مردمی فعالان حجاب</p>
      <img src="./src/assets/Vector.png" className='w-9 h-9' alt="" />
  

    </li>
    <li className='flex items-center mx-5 cursor-pointer'>
      <p className='mx-3 '>تجربه</p>
      <svg width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0469 3.57812L19.5312 3.90625C19.9531 4 20.1406 4.51562 19.8125 4.84375L18.0312 6.53125L18.4531 9.01562C18.5469 9.4375 18.0781 9.76562 17.6562 9.57812L15.5 8.40625L13.2969 9.57812C12.875 9.76562 12.4531 9.4375 12.5 9.01562L12.9219 6.57812L11.1406 4.84375C10.8125 4.51562 11 3.95312 11.4219 3.90625L13.9062 3.57812L14.9844 1.32812C15.2188 0.90625 15.7812 0.90625 15.9688 1.32812L17.0469 3.57812ZM12.5 13H18.5C19.2969 13 20 13.7031 20 14.5V23.5C20 24.3438 19.2969 25 18.5 25H12.5C11.6562 25 11 24.3438 11 23.5V14.5C11 13.7031 11.6562 13 12.5 13ZM2 16H8C8.79688 16 9.5 16.7031 9.5 17.5V23.5C9.5 24.3438 8.79688 25 8 25H2C1.15625 25 0.5 24.3438 0.5 23.5V17.5C0.5 16.7031 1.15625 16 2 16ZM21.5 20.5C21.5 19.7031 22.1562 19 23 19H29C29.7969 19 30.5 19.7031 30.5 20.5V23.5C30.5 24.3438 29.7969 25 29 25H23C22.1562 25 21.5 24.3438 21.5 23.5V20.5Z" fill="#2BAE66"/>
</svg>

    </li>
    <li className='flex items-center mx-5 cursor-pointer'>
      <p className='mx-3 '>ایده</p>
      <svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.25 8.25C15.25 4.54688 12.2031 1.5 8.5 1.5C4.75 1.5 1.75 4.54688 1.75 8.25C1.75 9.70312 2.17188 11.0156 2.92188 12.0938C3.10938 12.375 3.34375 12.7031 3.57812 12.9844C4.1875 13.8281 4.84375 14.7656 5.35938 15.7031C5.78125 16.4531 6.01562 17.25 6.10938 18H4.60938C4.46875 17.4375 4.32812 16.9219 4.04688 16.4062C3.57812 15.5625 3.01562 14.7656 2.40625 13.9688C2.17188 13.6406 1.9375 13.3125 1.70312 12.9844C0.765625 11.625 0.25 10.0312 0.25 8.25C0.25 3.70312 3.90625 0 8.5 0C13.0469 0 16.75 3.70312 16.75 8.29688C16.75 10.0312 16.1875 11.625 15.25 12.9844C15.0156 13.3125 14.7812 13.6406 14.5469 13.9688C13.9844 14.7656 13.375 15.5625 12.9062 16.4062C12.625 16.9219 12.4844 17.4844 12.3906 18.0469H10.8438C10.9844 17.25 11.1719 16.4531 11.5938 15.7031C12.1094 14.7656 12.8125 13.8281 13.375 13.0312C13.6094 12.7031 13.8438 12.375 14.0312 12.1406C14.7812 11.0156 15.25 9.70312 15.25 8.25ZM6.34375 21C6.67188 21.8906 7.51562 22.5 8.45312 22.5C9.4375 22.5 10.2812 21.8906 10.6094 21H6.34375ZM4.75 20.25V20.0156C4.75 19.7344 4.9375 19.5 5.21875 19.5H11.7344C12.0156 19.5 12.25 19.7344 12.25 20.0156V20.25C12.25 22.3594 10.5625 24 8.5 24C6.39062 24 4.75 22.3594 4.75 20.25ZM8.5 4.5C8.875 4.5 9.25 4.875 9.25 5.25V11.25C9.25 11.6719 8.875 12 8.5 12C8.07812 12 7.75 11.6719 7.75 11.25V5.25C7.75 4.875 8.07812 4.5 8.5 4.5ZM9.625 15C9.625 15.6562 9.10938 16.125 8.5 16.125C7.84375 16.125 7.375 15.6562 7.375 15C7.375 14.3906 7.84375 13.875 8.5 13.875C9.10938 13.875 9.625 14.3906 9.625 15Z" fill="#2BAE66"/>
</svg>


    </li>
    <li className='flex items-center mx-5 cursor-pointer'>
      <p className='mx-3 '>رشد</p>
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23 1.5H21.5C18.0312 1.5 15.0312 3.46875 13.5312 6.28125C13.2031 5.85938 12.875 5.4375 12.5 5.0625C14.375 2.01562 17.7031 0 21.5 0H23C23.7969 0 24.5 0.703125 24.5 1.5C24.5 6.70312 20.7031 11.0156 15.7344 11.8594C15.6875 11.3906 15.5938 10.875 15.4531 10.4062C19.7188 9.70312 23 6 23 1.5ZM3.5 4.5H2C2 9.46875 6.03125 13.5 11 13.5H12.5C12.5 8.53125 8.46875 4.5 3.5 4.5ZM2 3H3.5C9.26562 3 14 7.73438 14 13.5V14.25V15V23.25C14 23.6719 13.625 24 13.25 24C12.8281 24 12.5 23.6719 12.5 23.25V15H11C5.1875 15 0.5 10.3125 0.5 4.5C0.5 3.70312 1.15625 3 2 3Z" fill="#2BAE66"/>
</svg>


    </li>
  </ul>
  <div>
    

  </div>
</div>


    </div>
  )
}

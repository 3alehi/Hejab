import React, { useEffect, useRef, useState } from "react";

export default function ImgPost2() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
    return (
      <div className="text-right bg-[#ffffff] p-3 rounded-md mt-5 mb-8">
        <div className="w-full relative flex items-center justify-between flex-row-reverse">
          <div className={`flex items-center ${open ? "blur-sm" :""}`}>
            <p className="mr-2">کاربر 1</p>
            <img
              src="src/assets/profile.jpeg"
              className="w-9 h-9 rounded-full"
              alt=""
            />
          </div>
          <svg
            onClick={(e) => {
              setOpen(true);
            }}
            className="cursor-pointer"
            width="6"
            height="20"
            viewBox="0 0 6 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 15.25C3.79688 15.25 4.5 15.7188 4.92188 16.375C5.34375 17.0781 5.34375 17.9688 4.92188 18.625C4.5 19.3281 3.79688 19.75 3 19.75C2.15625 19.75 1.45312 19.3281 1.03125 18.625C0.609375 17.9688 0.609375 17.0781 1.03125 16.375C1.45312 15.7188 2.15625 15.25 3 15.25ZM3 7.75C3.79688 7.75 4.5 8.21875 4.92188 8.875C5.34375 9.57812 5.34375 10.4688 4.92188 11.125C4.5 11.8281 3.79688 12.25 3 12.25C2.15625 12.25 1.45312 11.8281 1.03125 11.125C0.609375 10.4688 0.609375 9.57812 1.03125 8.875C1.45312 8.21875 2.15625 7.75 3 7.75ZM5.25 2.5C5.25 3.34375 4.78125 4.04688 4.125 4.46875C3.42188 4.89062 2.53125 4.89062 1.875 4.46875C1.17188 4.04688 0.75 3.34375 0.75 2.5C0.75 1.70312 1.17188 1 1.875 0.578125C2.53125 0.15625 3.42188 0.15625 4.125 0.578125C4.78125 1 5.25 1.70312 5.25 2.5Z"
              fill="#737373"
            />
          </svg>
          {open && (
            <div ref={dropdownRef} className="absolute z-10 shadow-2xl left-0 top-0 w-[200px]  p-3 rounded-lg bg-bg">
              <svg
              className="cursor-pointer"
              onClick={e=>{
                  setOpen(false)
              }}
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4766 1.85156L7.78906 6.53906L12.4375 11.1875C12.8281 11.5391 12.8281 12.125 12.4375 12.4766C12.0859 12.8672 11.5 12.8672 11.1484 12.4766L6.46094 7.82812L1.8125 12.4766C1.46094 12.8672 0.875 12.8672 0.523438 12.4766C0.132812 12.125 0.132812 11.5391 0.523438 11.1484L5.17188 6.5L0.523438 1.85156C0.132812 1.5 0.132812 0.914062 0.523438 0.523438C0.875 0.171875 1.46094 0.171875 1.85156 0.523438L6.5 5.21094L11.1484 0.5625C11.5 0.171875 12.0859 0.171875 12.4766 0.5625C12.8281 0.914062 12.8281 1.5 12.4766 1.85156Z"
                  fill="#737373"
                />
                <div>
                </div>
              </svg>
              <ul className="flex flex-col items-center justify-end">
                  <li className="cursor-pointer w-full justify-end flex items-center">
                      <p className="text-[#2BAE66] m-3">ارسال به دیگری</p>
                      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.25 4.5H9H5.5C3 4.5 1 6.53125 1 9C1 10.4688 1.46875 11.5 2.0625 12.25C2 12.0312 2 11.7812 2 11.5C2 9.3125 3.78125 7.5 6 7.5H9H9.25C9.65625 7.5 10 7.84375 10 8.25V8.5V9V10.5L15 6L10 1.5V3V3.5V3.75C10 4.1875 9.65625 4.5 9.25 4.5ZM9 9V8.5H8H6C4.34375 8.5 3 9.84375 3 11.5C3 12.4688 3.375 13 3.6875 13.2812C3.84375 13.4375 4 13.6562 4 13.9062C4 14.25 3.71875 14.5 3.375 14.5C3.28125 14.5 3.1875 14.5 3.125 14.4688C2.53125 14.125 0 12.5625 0 9C0 5.96875 2.4375 3.5 5.5 3.5H8H9V3V2.5V1.5C9 1.125 9.21875 0.75 9.59375 0.59375C9.9375 0.4375 10.375 0.5 10.6562 0.78125L15.6562 5.28125C15.875 5.46875 16 5.71875 16 6C16 6.3125 15.875 6.5625 15.6562 6.75L10.6562 11.25C10.375 11.5312 9.9375 11.5938 9.59375 11.4375C9.21875 11.2812 9 10.9062 9 10.5V9.5V9Z" fill="#A3A3A3"/>
  </svg>
  
                  </li>
                  <li className="cursor-pointer w-full justify-end flex items-center">
                      <p className="text-[#2BAE66] m-3">ذخیره لینک</p>
                      <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 2.5V12.5C1 13.0625 1.4375 13.5 2 13.5H12C12.5312 13.5 13 13.0625 13 12.5V4.84375C13 4.5625 12.875 4.3125 12.6875 4.125L10.375 1.8125C10.25 1.6875 10.125 1.625 10 1.5625V4.5C10 5.0625 9.53125 5.5 9 5.5H3C2.4375 5.5 2 5.0625 2 4.5V1.5C1.4375 1.5 1 1.96875 1 2.5ZM3 1.5V4.5H9V1.5H3ZM0 2.5C0 1.40625 0.875 0.5 2 0.5H9.65625C10.1875 0.5 10.6875 0.71875 11.0625 1.09375L13.4062 3.4375C13.7812 3.8125 14 4.3125 14 4.84375V12.5C14 13.625 13.0938 14.5 12 14.5H2C0.875 14.5 0 13.625 0 12.5V2.5ZM8.5 9.5C8.5 8.96875 8.1875 8.5 7.75 8.21875C7.28125 7.9375 6.6875 7.9375 6.25 8.21875C5.78125 8.5 5.5 8.96875 5.5 9.5C5.5 10.0625 5.78125 10.5312 6.25 10.8125C6.6875 11.0938 7.28125 11.0938 7.75 10.8125C8.1875 10.5312 8.5 10.0625 8.5 9.5ZM7 7C7.875 7 8.6875 7.5 9.15625 8.25C9.59375 9.03125 9.59375 10 9.15625 10.75C8.6875 11.5312 7.875 12 7 12C6.09375 12 5.28125 11.5312 4.8125 10.75C4.375 10 4.375 9.03125 4.8125 8.25C5.28125 7.5 6.09375 7 7 7Z" fill="#A3A3A3"/>
  </svg>
  
  
                  </li>
                  <li className="cursor-pointer w-full justify-end flex items-center">
                      <p className="text-[#2BAE66] m-3">گزارش </p>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 1.5C6.46875 1.5 4.1875 2.84375 2.9375 5C1.65625 7.1875 1.65625 9.84375 2.9375 12C4.1875 14.1875 6.46875 15.5 9 15.5C11.5 15.5 13.7812 14.1875 15.0312 12C16.3125 9.84375 16.3125 7.1875 15.0312 5C13.7812 2.84375 11.5 1.5 9 1.5ZM9 16.5C6.125 16.5 3.5 15 2.0625 12.5C0.625 10.0312 0.625 7 2.0625 4.5C3.5 2.03125 6.125 0.5 9 0.5C11.8438 0.5 14.4688 2.03125 15.9062 4.5C17.3438 7 17.3438 10.0312 15.9062 12.5C14.4688 15 11.8438 16.5 9 16.5ZM7.5 11.5H8.5V8.5H7.75C7.46875 8.5 7.25 8.28125 7.25 8C7.25 7.75 7.46875 7.5 7.75 7.5H9C9.25 7.5 9.5 7.75 9.5 8V11.5H10.5C10.75 11.5 11 11.75 11 12C11 12.2812 10.75 12.5 10.5 12.5H7.5C7.21875 12.5 7 12.2812 7 12C7 11.75 7.21875 11.5 7.5 11.5ZM9 6.25C8.5625 6.25 8.25 5.9375 8.25 5.5C8.25 5.09375 8.5625 4.75 9 4.75C9.40625 4.75 9.75 5.09375 9.75 5.5C9.75 5.9375 9.40625 6.25 9 6.25Z" fill="#A3A3A3"/>
  </svg>
  
                  </li>
              </ul>
            </div>
          )}
        </div>
        <h1 className={`text-[#737373] text-[18px] mt-5 ${open ? "blur-sm" :""}`}>
          انسان‌های بامحبت در کجا ساکن هستند؟
        </h1>
        <div className={`mt-5 grid gap-4 max-md:gap-1 grid-cols-2 ${open ? "blur-sm" :""}`}>
<div className="grid grid-rows-2 gap-3 max-md:gap-1">
<img className="h-40 w-full" src="https://s3-alpha-sig.figma.com/img/b384/3d64/9ea0225c8ea12bea5493643f755f2831?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B~od6MtPofC47KOr7~JipbnrybydVhTe0dsP9SnNsZCm4tKU0yKOirRM8QownNsgFkEGM4rvbH24ra2yaBXRMosiuyV0zOfRFqpy~tx7-Nw4Kn0~sq1xmZ2xnZ-9kQxwwdEFVOGGUqv3VhG~I9Nh8aqCKwLm19RoG1su7gVbaHtANpbBk9D3rgv3RntW-wdu~C4hIlKC0dpOqz1SDJcenQT4fs0yw~nSQdf2qeoEbJbXpJkmSJQskHsfve23yLbJ43KDtV8BVNbJmcf3~fmHthExIkFJr2B~F9xzVOEDt6RGFSGL0rbEDDpHlwHRcwL-gwL1BstzDACvSzk~Qg83HQ__" alt="" />
<img className="h-40 w-full" src="https://s3-alpha-sig.figma.com/img/79bf/9477/3c592b8abf004a409a787e3f0208f35e?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YANSd0s~W3Ve~TmzJFUNZutTOR3bdH-gpfcviSYeilurTOsX~XqtvDixYxAXqQ5654yofMfkevK~HumEd1CaWRDF~UmdGkqyiwod9ekOW17zpdr9M00lcD9wMCnlGBzkyXmfX~RSLFhbo7FWssDv0NeE7Z66uVYceq6O~WV4CXZ04WS7vQU0Ycf0QdElToHxXmSt-NFC0okbw98~6CLtbmUayyjByt1u6xHH1aB12hqE9LmjXSZ80mVYn3UWBj3Jd6QwFYU9hdnNcOEYGEEIr7bd1p5uBXlkyL-NtQFirYlQAs1~yILxVMVQfAW9W3HbvIw9uP7WC3syiY1DT5HaWg__" alt="" />

</div>
            <img className="h-80 w-full" src="https://s3-alpha-sig.figma.com/img/79bf/9477/3c592b8abf004a409a787e3f0208f35e?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YANSd0s~W3Ve~TmzJFUNZutTOR3bdH-gpfcviSYeilurTOsX~XqtvDixYxAXqQ5654yofMfkevK~HumEd1CaWRDF~UmdGkqyiwod9ekOW17zpdr9M00lcD9wMCnlGBzkyXmfX~RSLFhbo7FWssDv0NeE7Z66uVYceq6O~WV4CXZ04WS7vQU0Ycf0QdElToHxXmSt-NFC0okbw98~6CLtbmUayyjByt1u6xHH1aB12hqE9LmjXSZ80mVYn3UWBj3Jd6QwFYU9hdnNcOEYGEEIr7bd1p5uBXlkyL-NtQFirYlQAs1~yILxVMVQfAW9W3HbvIw9uP7WC3syiY1DT5HaWg__" alt="" />
        </div>
     <h1 className="mt-6 text-[#737373]">انسان‌های بامحبت در کجا ساکن هستند؟</h1>
  
        <div className={`mt-6 flex items-center justify-between p-3 max-md:text-[13px] flex-row-reverse ${open ? "blur-sm" :""}`}>
          <p className="text-[#737373]"> 2 روز پیش </p>
          <div className="flex items-center text-[#737373]">
            <p className="mx-2">20  پسند</p>
            <p className="mx-2">20 نظر</p>
            <p className="mx-2">2 فایل پیوست</p>
          </div>
        </div>
      </div>
    );
  }
  

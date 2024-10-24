import React, { useEffect, useState } from 'react'

export default function ScrollButton() {
    const [showButton, setShowButton] = useState(false);
    let lastScrollY = window.pageYOffset;
  
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      if (currentScrollY < lastScrollY) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
      lastScrollY = currentScrollY;
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
        <button
        className={`fixed md:hidden flex z-[500] bg-[#2BAE66] px-7 items-center left-1/2 bottom-32 transform translate-x-[-50%] translate-y-[50%] p-3 bg-blue-500 text-white rounded-full transition-opacity duration-300 ${
          showButton ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className='mr-3 text-[20px] text-[#FAFAFA]  '>ثبت تجربه</p>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.2812 2.79248C20.7188 2.18311 19.7344 2.18311 19.1719 2.79248L17.9062 4.01123L20.625 6.72998L21.8438 5.46436C22.4531 4.90186 22.4531 3.91748 21.8438 3.35498L21.2812 2.79248ZM8.85938 13.105C8.625 13.2925 8.48438 13.5737 8.4375 13.8081L7.73438 16.9019L10.8281 16.1987C11.0625 16.1519 11.3438 16.0112 11.5312 15.7769L19.5469 7.76123L16.875 5.08936L8.85938 13.105ZM18.0938 1.71436C19.2656 0.54248 21.1875 0.54248 22.3594 1.71436L22.9219 2.27686C24.0938 3.44873 24.0938 5.37061 22.9219 6.54248L12.6094 16.855C12.1875 17.2769 11.6719 17.5581 11.1562 17.6519L6.89062 18.6362C6.65625 18.6831 6.375 18.6362 6.1875 18.4487C6 18.2612 5.95312 17.98 6 17.7456L6.98438 13.48C7.125 12.9644 7.35938 12.4487 7.78125 12.0269L18.0938 1.71436ZM3.75 3.63623H9.75C10.125 3.63623 10.5 4.01123 10.5 4.38623C10.5 4.80811 10.125 5.13623 9.75 5.13623H3.75C2.48438 5.13623 1.5 6.16748 1.5 7.38623V20.8862C1.5 22.1519 2.48438 23.1362 3.75 23.1362H17.25C18.4688 23.1362 19.5 22.1519 19.5 20.8862V14.8862C19.5 14.5112 19.8281 14.1362 20.25 14.1362C20.625 14.1362 21 14.5112 21 14.8862V20.8862C21 22.9956 19.3125 24.6362 17.25 24.6362H3.75C1.64062 24.6362 0 22.9956 0 20.8862V7.38623C0 5.32373 1.64062 3.63623 3.75 3.63623Z" fill="#FFD53E"/>
</svg>

      </button>
      
    )}

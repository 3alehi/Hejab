import React from 'react'
import InputFilters from './InputFilters'

export default function Filters() {
    const arrFilters = ["تست" , "تست" , "تست" , "تست"]
  return (
    <div className='bg-[#fff] rounded-md p-4'>
       <div className='flex items-center flex-row-reverse justify-between'>
       <div className='flex items-center'>
            <p>فیلتر ها</p>
            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 2.12152C0 1.09027 0.796875 0.246521 1.82812 0.246521H22.125C23.1562 0.246521 24 1.09027 24 2.12152C24 2.5434 23.8125 2.96527 23.5312 3.2934L15 13.6528V19.6996C15 20.5434 14.25 21.2465 13.4062 21.2465C13.0312 21.2465 12.7031 21.1528 12.4219 20.9184L9.5625 18.7153C9.1875 18.434 8.95312 18.0121 8.95312 17.5434V13.6528L0.421875 3.2934C0.140625 2.96527 0 2.5434 0 2.12152ZM1.82812 1.74652C1.64062 1.74652 1.5 1.93402 1.5 2.12152C1.5 2.21527 1.5 2.26215 1.54688 2.3559L10.3125 12.9028C10.4062 13.0434 10.5 13.2309 10.5 13.3715V17.5434L13.3594 19.7465C13.3594 19.7465 13.3594 19.7465 13.4062 19.7465C13.4531 19.7465 13.5 19.7465 13.5 19.6996V13.3715C13.5 13.2309 13.5469 13.0434 13.6406 12.9028L22.4062 2.3559C22.4531 2.26215 22.5 2.21527 22.5 2.12152C22.5 1.93402 22.3125 1.74652 22.125 1.74652H1.82812Z" fill="#A3A3A3"/>
</svg>

        </div>
        <p className='text-[#2BAE66] cursor-pointer'>حذف فیلتر ها</p>
       </div>
       <div className='grid grid-rows-7'>
       <InputFilters content={"دسته بندی یا مساله"} />
       <InputFilters content={"استان محل اجرا "} />
       <InputFilters content={"محدوده اجرا "} />
       <InputFilters content={"هزینه اجرا "} />
       <InputFilters content={"روش تامین مالی "} />
       <InputFilters content={" زمان اجرا "} />
       <InputFilters content={" افراد موردنیاز"} />





       </div>
    </div>
  )
}

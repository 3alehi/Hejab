import React from 'react'
import Coment from '../components/Coment'
import ExperienceAndTopics from '../components/ExperienceAndTopics'
import Filters from '../components/Filters'
import ImgPost from '../components/ImgPost'
import ImgPost1 from '../components/imgPost1'
import ImgPost2 from '../components/ImgPost2'

export default function Footer() {
  return (
    <div className='grid gap-9 grid-cols-[300px_650px_auto] px-[300px] mt-[150px] '>
        <div className='w-full h-[2000px] overflow-auto sticky top-2'>
            <ExperienceAndTopics/>
        </div>
        <div className=''>
            <Coment/>
            <ImgPost />
            <ImgPost1 />
            <ImgPost2 />



        </div>
        <div className=''>
            <Filters/>
        </div>
        


    </div>
  )
}

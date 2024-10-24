import React from 'react'
import Coment from '../components/Coment'
import ExperienceAndTopics from '../components/ExperienceAndTopics'
import Filters from '../components/Filters'
import ImgPost from '../components/ImgPost'
import ImgPost1 from '../components/imgPost1'
import ImgPost2 from '../components/ImgPost2'

export default function Footer() {
  return (
    <div className='grid gap-9 grid-cols-[300px_650px_auto] max-lg:grid-cols-1 max-2xl:grid-cols-[auto_400px_auto]  p-5 px-[300px] max-2xl:px-[50px] mt-[150px] '>
        <div className='w-full overflow-auto sticky top-2'>
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

import React from 'react'
import Coment from '../components/Coment'
import ExperienceAndTopics from '../components/ExperienceAndTopics'
import Filters from '../components/Filters'

export default function Footer() {
  return (
    <div className='grid gap-9 grid-cols-[300px_700px_auto] px-[300px] mt-[150px]'>
        <div className=''>
            <ExperienceAndTopics/>
        </div>
        <div className=''>
            <Coment/>

        </div>
        <div className=''>
            <Filters/>
        </div>
        


    </div>
  )
}

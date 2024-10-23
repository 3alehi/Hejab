import React from 'react'
import Coment from '../components/Coment'
import ExperienceAndTopics from '../components/ExperienceAndTopics'
import Filters from '../components/Filters'
import ImgPost from '../components/ImgPost'

export default function Footer() {
  const imgPost1=['https://s3-alpha-sig.figma.com/img/79bf/9477/3c592b8abf004a409a787e3f0208f35e?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YANSd0s~W3Ve~TmzJFUNZutTOR3bdH-gpfcviSYeilurTOsX~XqtvDixYxAXqQ5654yofMfkevK~HumEd1CaWRDF~UmdGkqyiwod9ekOW17zpdr9M00lcD9wMCnlGBzkyXmfX~RSLFhbo7FWssDv0NeE7Z66uVYceq6O~WV4CXZ04WS7vQU0Ycf0QdElToHxXmSt-NFC0okbw98~6CLtbmUayyjByt1u6xHH1aB12hqE9LmjXSZ80mVYn3UWBj3Jd6QwFYU9hdnNcOEYGEEIr7bd1p5uBXlkyL-NtQFirYlQAs1~yILxVMVQfAW9W3HbvIw9uP7WC3syiY1DT5HaWg__']
  return (
    <div className='grid gap-9 grid-cols-[300px_650px_auto] px-[300px] mt-[150px] '>
        <div className='w-full h-[2000px] overflow-auto sticky top-2'>
            <ExperienceAndTopics/>
        </div>
        <div className=''>
            <Coment/>
            <ImgPost img={imgPost1}/>

        </div>
        <div className=''>
            <Filters/>
        </div>
        


    </div>
  )
}

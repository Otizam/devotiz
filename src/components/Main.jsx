import React from 'react'
import {TypeAnimation} from 'react-type-animation';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Main = () => {
  return (
    <div id='main'>
       <img className='w-full h-screen object-cover object-left scale-x-[-1]'  
       src='https://res.cloudinary.com/dpuqzy6ma/image/upload/v1685134334/FB_IMG_1668575084560_lstbiv.jpg' 
       alt=''
        />
       <div className='w-full h-screen absolute top-0 bg-white/50'>
        <div className='max-w-[700]px m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
           <h1 className='sm:text-5xl text-4xl front-bold text-gray-800'>I'm Otty Udoh</h1>
           <h2  className='flex sm:text-3xl text-2xl pt-4 text-gray-800'> I'm a 
           <TypeAnimation
              sequence={[
                'Developer', // Types 'One'
                1000, // Waits 1s
                'Coder', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                'Tech Enthusiast',
                2000, // Waits 2s
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '2em', paddingLeft: '5px' }}
            />
            </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <BsFacebook className='cursor-pointer' size={20} />
            <BsTwitter className='cursor-pointer' size={20} />
            <BsInstagram className='cursor-pointer' size={20} />
            <BsLinkedin  className='cursor-pointer' size={20}/>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Main
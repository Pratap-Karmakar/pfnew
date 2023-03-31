import Image from 'next/image';
import React from 'react'
import avatar from'../public/avatar.png';


type Props = {}

export default function Hero({ }: Props) {
    return (
        <div>
            <div className='relative mx-auto bg-gradient-to-b from-teal-500  rounded-full w-32 h-32 top-10 md:top-14 overflow-hidden md:h-60 md:w-60 '>
            <Image src={avatar} layout='fill' objectFit='cover' alt='Avatar Image'/>
          </div>
        <div className='text-center py-6 mt-8 md:p-0 md:mt-10'>
            <p className='text-xl py-2 text-gray-500 font-medium inline pr-2 md:text-6xl'>Hi! I'm,</p><p className='text-2xl py-2 text-teal-600 font-medium inline md:text-6xl'>Pratap Karmakar</p>
            <h3 className='text-lg text-teal-500 py-2 md:py-10 md:text-5xl'>A Web Developer</h3>
        </div>
        </div>
    )
}
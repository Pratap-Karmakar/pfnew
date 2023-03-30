import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-5xl justify-evenly mx-auto items-center mt-14'>

    <h3 className='absolute top-1 md:top-24 uppercase tracking-[15px] text-teal-600 text-xl md:text-4xl font-semibold ml-8 md:mx-auto '>about</h3>

    
    <div className='-mt-96 md:mt-1 px-0 md:px-10'>
        <h4 className='text-xl md:text-2xl  md:text-center font-semibold  text-gray-500'>
        Hello! I am a self-taught Web Application Developer with a strong passion for Frontend Web-Development. My specialization lies in creating highly responsive client-side web applications using React.js. I am also proficient in the Next.js framework and familiar with Node.js, Express.js, and MongoDB.
        </h4>
    </div>
</div>
  )
}
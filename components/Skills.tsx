import React from 'react'
import html from '../public/html.png';
import css from '../public/css.png';
import javascript from '../public/javascript.png';
import react from '../public/react.png';
import redux from '../public/redux.png';
import nextjs from '../public/nextjs.png';
import nodejs from '../public/nodejs.png';
import expressjs from '../public/expressjs.png';
import mongodb from '../public/mongodb.png';
import bootstrap from '../public/bootstrap.png';
import tailwind from '../public/tailwind.png';
import Image from 'next/image';

type Props = {}

export default function Skills({}: Props) {
  return (
    <div  className='p-20 shadow-md rounded-md -mt-96 md:mt-40'>
            <h3  className='text-center text-xl -mt-24 md:-mt-96 uppercase tracking-[15px] md:p-10 md:text-4xl text-teal-600 font-medium relative mb-20'>My Skills</h3>
            <div className='flex flex-wrap gap-10 md:gap-16 justify-center items-center  max-w-xl mx-auto'>
              <div className='flex flex-col items-center'>
                <div className='relative md:w-14 md:h-14 w-8 h-8'>
                  <Image src={html} alt="Html"/>
                </div>
                <h3 className='pt-1 md:text-lg text-sm text-gray-500 font-bold'>HTML</h3>
              </div>
              <div className='flex flex-col items-center'>
                <div className='relative md:w-14 md:h-14 w-8 h-8'>
                  <Image src={css} alt="Css"/>
                </div>
                <h3 className='pt-1 md:text-lg text-sm text-gray-500 font-bold'>CSS</h3>
              </div>
              <div className='flex flex-col items-center'>
                <div className='relative md:w-14 md:h-14 w-8 h-8'>
                  <Image src={javascript} alt="JavaScript"/>
                </div>
                <h3 className='pt-1 md:text-lg text-sm text-gray-500 font-bold'>JavaScript</h3>
              </div>
              <div className='flex flex-col items-center'>
                <div className='relative md:w-14 md:h-14 w-8 h-8'>
                  <Image src={react} alt="Reactjs"/>
                </div>
                <h3 className='pt-1 md:text-lg text-sm text-gray-500 font-bold'>React</h3>
              </div>
              <div className='flex flex-col items-center'>
                <div className='relative md:w-14 md:h-14 w-8 h-8'>
                  <Image src={redux} alt="Redux"/>
                </div>
                <h3 className='pt-1 md:text-lg text-sm text-gray-500 font-bold'>Redux</h3>
              </div>
              <div className='flex flex-col items-center'>
                <div className='relative md:w-14 md:h-14 w-8 h-8'>
                  <Image src={nextjs}alt="Nextjs"/>
                </div>
                <h3 className='pt-1 md:text-lg text-sm text-gray-500 font-bold '>NextJs</h3>
              </div>
              <div className='flex flex-col items-center'>
                <div className='relative md:w-14 md:h-14 w-8 h-8'>
                  <Image src={bootstrap} alt="Bootstrap"/>
                </div>
                <h3 className='pt-1 md:text-lg text-sm text-gray-500 font-bold'>Bootstrap</h3>
              </div>
              <div className='flex flex-col items-center'>
                <div className='relative md:w-14 md:h-14 w-8 h-8'>
                  <Image src={tailwind} alt="Tailwind"/>
                </div>
                <h3 className='pt-1 md:text-lg text-sm text-gray-500 font-bold'>Tailwind</h3>
              </div>
              <div className='flex flex-col items-center'>
                <div className='relative md:w-14 md:h-14 w-8 h-8'>
                  <Image src={nodejs} alt="Nodejs"/>
                </div>
                <h3 className='pt-1 md:text-lg text-sm text-gray-500 font-bold'>NodeJs</h3>
              </div>
              <div className='flex flex-col items-center'>
                <div className='relative md:w-14 md:h-14 w-8 h-8'>
                  <Image src={expressjs} alt="Expressjs"/>
                </div>
                <h3 className='pt-1 md:text-lg text-sm text-gray-500 font-bold'>ExpressJs</h3>
              </div>
              <div className='flex flex-col items-center'>
                <div className='relative md:w-14 md:h-14 w-8 h-8'>
                  <Image src={mongodb} alt="MongoDB"/>
                </div>
                <h3 className='pt-1 md:text-lg text-sm text-gray-500 font-bold'>MongoDB</h3>
              </div>
            </div>
          </div>
  )
}
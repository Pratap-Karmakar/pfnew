import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-teal-50 overflow-scroll h-screen text-white dark:bg-[#333333]'>
      <Head>
        <title>Pratap Karmakar</title>
      </Head>

      <Header />
      <div >
        <Hero />
      </div>
      <div >
        <About/>
      </div>
      <div>
        <Skills/>
      </div>
    </div>
  )
}

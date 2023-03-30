import React, { useState, useEffect } from 'react'
import { SocialIcon } from 'react-social-icons'
import { BsFillMoonFill, BsSunFill } from 'react-icons/Bs';






type Props = {}

export default function Header({ }: Props) {


    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme]);


    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <header className='sticky top-0 flex items-start justify-between  mx-auto z-20 xl:items-center p-10'>
            <div className='flex flex-row items-center justify-center'>
                <SocialIcon
                    url="https://www.linkedin.com/in/pratap-karmakar-2b25b2103/"
                    fgColor='black'
                    bgColor='transparent'
                />
                <SocialIcon
                    url="https://github.com/Pratap-Karmakar"
                    fgColor='black'
                    bgColor='transparent'
                />
                <SocialIcon
                    url="https://mail.google.com/mail/mu/mp/347/#tl/priority/%5Esmartlabel_personal"
                    fgColor='black'
                    bgColor='transparent'
                />
            </div>

            <div className='flex flex-row items-center justify-center  cursor-pointer'>
                {theme === 'light' ? (
                    <button onClick={handleThemeSwitch}><BsFillMoonFill className='w-7 h-7 text-gray-800' /></button>
                ) : (
                    <button onClick={handleThemeSwitch}><BsSunFill className='w-8 h-8 text-gray-300' /></button>
                )}
            </div>

            

        </header>
    )
}

import React from 'react'
import {FaXTwitter} from 'react-icons/fa6'
import {BsGithub} from 'react-icons/bs'
import Link from 'next/link'

export default function CreditFooter() {
    return (
        <footer className='bottom-0 sticky bg-white mb-3 flex flex-col justify-around items-center w-screen md:flex-row'>
            <div className='flex justify-center items-center mb-3'>
                Contact me: 
                <Link
                    href="https://twitter.com/monkey_K1n9"
                    target='_blank'
                >
                    <FaXTwitter 
                        className="text-primary text-h3 ml-2"
                    />
                </Link>

                <Link
                    href="https://github.com/monkeyK1n9"
                    target='_blank'
                >
                    <BsGithub
                        className="text-secondary text-h3 ml-2"
                    />
                </Link>
            </div>

            <p>
                &copy;{new Date().getFullYear()} Monkey_K1n9, All rights reserved
            </p>
            
        </footer>
    )
}

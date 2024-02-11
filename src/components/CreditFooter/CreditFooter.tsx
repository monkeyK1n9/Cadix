import React from 'react'
import {FaXTwitter} from 'react-icons/fa6'
import {MdMailOutline} from 'react-icons/md'
import Link from 'next/link'

export default function CreditFooter() {
    return (
        <footer className='bottom-0 fixed bg-white py-3 flex flex-col justify-around items-center w-screen md:flex-row'>
            <div className='flex justify-center items-center'>
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
                    href="mailto:mkeyk1n9@gmail.com"
                    target='_blank'
                >
                    <MdMailOutline
                        className="text-secondary text-h2 ml-2"
                    />
                </Link>
            </div>

            <p>
                &copy;{new Date().getFullYear()} Monkey_K1n9, All rights reserved
            </p>
            
        </footer>
    )
}

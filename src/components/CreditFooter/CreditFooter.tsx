import React from 'react'
import {FaXTwitter} from 'react-icons/fa6'
import {BsGithub} from 'react-icons/bs'

export default function CreditFooter() {
    return (
        <footer className='bottom-0 absolute mb-3 flex flex-col justify-around items-center w-full md:flex-row'>
            <div className='flex justify-center items-center mb-3'>
                Contact me: 
                <FaXTwitter 
                    className="text-primary text-h3 ml-2"
                />
                <BsGithub
                    className="text-secondary text-h3 ml-2"
                />
            </div>

            <p>
                &copy;{new Date().getFullYear()} Monkey_K1n9
            </p>
            
        </footer>
    )
}

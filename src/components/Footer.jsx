import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaPhone, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
    return (
        <div className=' mx-auto w-11/12 py-8'>
            <div className=' flex  justify-between '>
                <div className=' font-semibold text-lg'>Shriram ID Cards</div>
                <div>
                    <h2 className=' font-semibold text-lg'>Home</h2>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Admin Login</p>
                </div>
                <div>
                    <h2 className=' font-semibold text-lg'>Help</h2>
                    <p>Privacy Policy</p>
                    <p>Terms and Condition</p>
                </div>
                <div>
                    <h2 className=' font-semibold text-lg'>Contact Us</h2>
                    <p className=' flex gap-2 items-center'><FaPhone />9805360869</p>
                    <p className=' flex gap-2 items-center'><MdEmail />ram.id.cards@gmail.com</p>
                    <p className=' flex gap-2 items-center'> <FaLocationDot />Nagpur</p>
                </div>
            </div>
            <div className=' flex gap-4 text-xl' >
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedinIn />
                <FaYoutube />
                <FaTelegram />
            </div>
        </div>
    )
}

export default Footer

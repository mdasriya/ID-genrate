import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className=' text-white  bg-blue-600'>
            <div className=' h-[4rem] w-11/12 mx-auto flex justify-between items-center align-middle'>
                <div onClick={() => navigate("/")}>
                    <p>Shriram ID Cards</p>
                </div>
                <div>
                    <ul className=' flex gap-5'>
                        <li onClick={() => navigate("/")}>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Templets</li>
                    </ul>
                </div>
                <div>
                    <button onClick={() => navigate("/#login")} className=' bg-white px-4 py-1 rounded-xl text-gray-900'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar

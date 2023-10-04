import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from "react-icons/ai"

const Navbar = () => {
    const [nav, setNav] = useState(true);
    const hiddenMenu = () => {
        setNav(!nav)
    }
    return (
        <>
            <div className=' flex justify-center items-center  h-24 max-w-[1240px] mx-auto p-4 text-white'>
                <h1 className=' w-full text-3xl font-bold text-[#00da9a]'>React.</h1>
                <ul className=' hidden  md:flex'>
                    <li className='p-4  hover:text-[#00da9a] cursor-pointer'>Home</li>
                    <li className='p-4  hover:text-[#00da9a] cursor-pointer'>Company</li>
                    <li className='p-4 hover:text-[#00da9a] cursor-pointer'>Resorces</li>
                    <li className='p-4  hover:text-[#00da9a] cursor-pointer'>About</li>
                    <li className='p-4  hover:text-[#00da9a] cursor-pointer'>Contact</li>
                </ul>
                <div onClick={hiddenMenu} className=' cursor-pointer block md:hidden'>
                    {!nav ? <AiOutlineClose size={25} /> : <HiMenu size={25} />}
                </div>

                <div className={!nav ? "fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500" : "fixed left-[-100%]"}>
                    <h1 className=' w-full text-3xl font-bold text-[#00da9a] m-4'>React.</h1>
                    <ul className='  uppercase p-4'>
                        <li className='p-4 hover:text-[#00da9a] cursor-pointer border-b border-b-gray-600'>Home</li>
                        <li className='p-4 hover:text-[#00da9a] cursor-pointer border-b border-b-gray-600'>Company</li>
                        <li className='p-4 hover:text-[#00da9a] cursor-pointer border-b border-b-gray-600'>Resorces</li>
                        <li className='p-4 hover:text-[#00da9a] cursor-pointer border-b border-b-gray-600'>About</li>
                        <li className='p-4 hover:text-[#00da9a] cursor-pointer'>Contact</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
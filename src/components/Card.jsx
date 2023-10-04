import React from 'react'
import single from "../assets/single.png"
import double from "../assets/double.png"
import triple from "../assets/triple.png"

const Card = () => {
    return (
        <div className='w-full bg-white py-20 px-4 '>
            <div className=' max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full flex flex-col p-4  rounded-lg shadow-lg hover:scale-105 duration-300 my-8 md:mt-0'>
                    <img className=' w-20 mx-auto bg-white mt-[-3rem]' src={single} alt="" />
                    <h1 className=' text-center font-bold text-2xl py-8'>Single User</h1>
                    <p className='text-center font-bold text-4xl'>$149</p>
                    <div className='text-center  font-medium'>
                        <p className=' py-2 border-b mx-8'>500 GB Storage</p>
                        <p className=' py-2 border-b mx-8'>1 Granted User</p>
                        <p className=' py-2 border-b mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='w-[150px] my-8 mx-auto  rounded-md  py-3 font-medium bg-[#00da9a] text-[#000300]'>Start Trial</button>
                </div>
                <div className='w-full flex flex-col p-4  rounded-lg shadow-lg hover:scale-105 duration-300  bg-gray-100  md:my-0 my-8'>
                    <img className=' w-20 mx-auto bg-transparent mt-[-3rem]' src={double} alt="" />
                    <h1 className=' text-center font-bold text-2xl py-8'>Single User</h1>
                    <p className='text-center font-bold text-4xl'>$149</p>
                    <div className='text-center  font-medium'>
                        <p className=' py-2 border-b mx-8'>500 GB Storage</p>
                        <p className=' py-2 border-b mx-8'>1 Granted User</p>
                        <p className=' py-2 border-b mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='w-[150px] my-8 mx-auto  rounded-md  py-3 font-medium bg-[#000300] text-[#00da9a]'>Start Trial</button>
                </div>
                <div className='w-full flex flex-col p-4  rounded-lg shadow-lg hover:scale-105 duration-300 my-8 md:mt-0'>
                    <img className=' w-20 mx-auto bg-white mt-[-3rem]' src={triple} alt="" />
                    <h1 className=' text-center font-bold text-2xl py-8'>Single User</h1>
                    <p className='text-center font-bold text-4xl'>$149</p>
                    <div className='text-center  font-medium'>
                        <p className=' py-2 border-b mx-8'>500 GB Storage</p>
                        <p className=' py-2 border-b mx-8'>1 Granted User</p>
                        <p className=' py-2 border-b mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='w-[150px] my-8 mx-auto  rounded-md  py-3 font-medium bg-[#00da9a] text-[#000300]'>Start Trial</button>
                </div>

            </div>
        </div>
    )
}

export default Card
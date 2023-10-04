import React from 'react'
import Typewriter from 'typewriter-effect';


const Hero = () => {
    return (
        <>
            <div className=' text-white'>
                <div className=' max-w-[800px] mt-[-96px] w-full h-screen mx-auto  flex  flex-col text-center justify-center '>
                    <p className='text-[#00da9a] font-bold p-2'>Growing with data analytics</p>
                    <h1 className=' md:text-7xl sm:text-6xl text-4xl md:py-6 font-bold' >Grow with data.</h1>
                    <div className='flex justify-center items-center'>
                        <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>First, flexible finacing for</p>
                        <div className="md:text-5xl sm:text-4xl text-xl font-bold text text-gray-500 md:pl-4 pl-2">
                            <Typewriter
                                options={{
                                    strings: ['BTB', 'BTC', 'SASS'],
                                    autoStart: true,
                                    loop: true,
                                }} />
                        </div>
                    </div>
                    <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase for BTB, BTC & SASS platform</p>
                    <button className='btn bg-[#00da9a] text-black ' >Get Started</button>
                </div>
            </div>
        </>
    )
}

export default Hero
import React from 'react'

const Newsletter = () => {
    return (
        <div className='w-full  py-16 px-4 text-white '>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 '>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize of your flow ?</h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='my-4  lg:ml-4'>
                    <div className='flex flex-col md:flex-row items-center justify-center w-full'>
                        <input className='p-3 rounded-md w-full flex text-[#000300]' type="email" placeholder='Enter Email' />
                        <button className='bg-[#00da9a] text-[#000300] w-[150px] ml-4  my-6 px-4 py-2 rounded-md font-medium cursor-pointer hover:scale-110 duration-300'>Notify Me</button>
                    </div>
                    <p>we can bout protection of your data. Read our{'  '}<span className=' text-[#00da8a] lg:block underline cursor-pointer'>Privacy Policy.</span></p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
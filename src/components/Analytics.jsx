import React from 'react'
import laptop from "../assets/laptop.jpg"

const Analytics = () => {
    return (
        <>
            <div className='bg-white w-full px-4 py-16'>
                <div className=' max-w-[1240px]  mx-auto grid md:grid-cols-2 '>
                    <img className=' w-[500px] mx-auto my-4' src={laptop} alt="/" />
                    <div className='flex flex-col justify-center'>
                        <p className='text-[#00da9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                        <h1 className=' md:text-4xl sm:text-3xl text-2xl font-bold py-3'>Manage Data Analytics Centrally</h1>
                        <p>Lorem ipsum dolor sit amet.
                            Recusandae aspernatur dignissimos harum voluptatem?
                            Repudiandae assumenda quibusdam culpa sunt!
                            Itaque, dolor at! Aliquam, reiciendis!
                            Iste magni voluptate aliquam repudiandae!</p>
                        <button className='btn bg-[#000300] text-[#00da9a] md:mx-0'>Get Started</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Analytics;
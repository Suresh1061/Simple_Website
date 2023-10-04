import React from 'react'
import { FaFacebookSquare, FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='py-16 px-4 max-w-[1240px] mx-auto grid lg:grid-cols-3 text-white'>
            <div>
                <h1 className=' w-full text-3xl font-bold text-[#00da9a]'>React.</h1>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur.
                    Eaque tempora ipsa voluptatem alias fugit.
                    Ut ab doloribus exercitationem in necessitatibus.
                    Dolor inventore voluptate sit delectus enim!
                </p>
                <div className='flex  justify-evenly py-6 md:w-[75%] cursor-pointer'>
                    <FaFacebookSquare size={25}/>
                    <FaInstagram size={25} />
                    <FaGithub size={25} />
                    <FaLinkedin size={25} />
                    <FaTwitter size={25} />
                </div>
            </div>
            <div className=' flex  justify-between lg:justify-evenly lg:col-span-2 mt-6 lg:mt-10 mx-6'>
                <div className=' font-medium text-gray-400'>
                    <h6>Solution</h6>
                    <ul>
                        <li>Analytics</li>
                        <li>Marketing</li>
                        <li>commerce</li>
                        <li>Insights</li>
                    </ul>
                </div>
                <div className=' font-medium text-gray-400'>
                    <h6>Support</h6>
                    <ul>
                        <li>Pricing</li>
                        <li>Documentaion</li>
                        <li>Guides</li>
                        <li>Api Status</li>
                    </ul>
                </div>
                <div className=' font-medium text-gray-400'>
                    <h6>Company</h6>
                    <ul>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Jobs</li>
                        <li>Press</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className=' font-medium text-gray-400'>
                    <h6>Legal</h6>
                    <ul>
                        <li>Claim</li>
                        <li>Policy</li>
                        <li>Terms</li>
                        <li>Insights</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
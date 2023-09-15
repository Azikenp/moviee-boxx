import React from 'react'
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"
import youtube from "../assets/youtube.svg"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='py-16 flex items-center justify-center flex-col'>
        <div className='flex gap-9 mb-7'>
          <Link to="/"><img className='w-[24px] h-[24px] hover:scale-110 ease-in duration-300' src={facebook} alt="facebook logo" /></Link>
          <Link to="/"><img className='w-[24px] h-[24px] hover:scale-110 ease-in duration-300' src={instagram} alt="instagram logo" /></Link>
          <Link to="/"><img className='w-[24px] h-[24px] hover:scale-110 ease-in duration-300' src={twitter} alt="twitter logo" /></Link>
          <Link to="/"><img className='w-[24px] h-[24px] hover:scale-110 ease-in duration-300' src={youtube} alt="youtube logo" /></Link>
        </div>
        <div className='flex gap-6 font-semibold text-[14px] text-gray-700 mb-5'>
            <Link to="/" className='hover:text-gray-400 hover:scale-110 ease-in duration-200'>Conditions Of Use</Link>
            <Link to="/" className='hover:text-gray-400 hover:scale-110 ease-in duration-200'>privacy & policy</Link>
            <Link to="/" className='hover:text-gray-400 hover:scale-110 ease-in duration-200'>press room</Link>
        </div>
        <div className='font-semibold text-[12px] text-gray-500 capitalize'>
            <p><span>&copy;</span>2023 movie box by aziken precious</p>
        </div>
    </div>
  )
}

export default Footer
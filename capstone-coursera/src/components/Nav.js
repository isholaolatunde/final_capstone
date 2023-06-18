import React from 'react'
import Logo from '../assets/logo.png'
import {FiMenu} from 'react-icons/fi'
import { useState } from 'react'
const Nav = () => {
    const [open, setopen] = useState(false)
  return (
    <header className="border-b border-gray-300 py-2">
    <div className="flex items-center justify-between xl:max-w-7x1 xl:mx-auto max-w-full px-[8%] flex-wrap w-full">
   <img src={Logo} alt='Logo' height={55} width={220}/>
   <FiMenu className='lg:hidden block h-6 w-6 cursor-pointer'
    onClick={()=> setopen(!open)}/>
  <nav className={`${open ? "hidden" :"block"} w-full lg:flex lg:items-center lg:w-auto`}>
    <ul className='text-base text-gray-600 lg:flex lg:justify-between lg:px-6'>
      <li>
        <a className='px-5 py-2 hover:text-blue-700 font-semibold block'  href= " #" >Home</a>
      </li>
      <li> <a className='px-5 py-2 hover:text-blue-700 font-semibold block'  href= " #" >About</a></li>
      <li> <a className='px-5 py-2 hover:text-blue-700 font-semibold block'  href= " #" >Menu</a></li>
      <li> <a className='px-5 py-2 hover:text-blue-700 font-semibold block'  href= " #" >Reservation</a></li>
      <li> <a className='px-5 py-2 hover:text-blue-700 font-semibold block'  href= " #" >Online Order</a></li>
      <li> <a className='px-6 py-2 bg-blue-700 text-white font-semibold rounded-xl block'  href= " #" >Login</a></li>
    </ul>
   </nav>
   </div>
   </header>
  )
}

export default Nav
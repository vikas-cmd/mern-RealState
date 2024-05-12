import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
/************************/
function Header() {
    const [search,setSearch]=useState('')
  return (
    <header className='bg-slate-200 shadow-lg flex justify-between items-center mx-auto p-3'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Vikas</span>
            <span className='text-slate-700'>RealState</span>
        </h1>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input className='bg-transparent focus:outline-none w-24 sm:w-64' type='text' placeholder='search....' value={search} onChange={(e)=>e.currentTarget.value} />
            <FaSearch className='text-slate-600'/>
        </form>
        <ul className='text-slate-700 flex gap-10 text-base font-medium   p-3 justify-between items-center'>
           <Link to='/'>
            <li className='hover:underline hidden sm:flex hover:cursor-pointer'>Home</li>
            </Link>
            <Link to='/about'>
            <li className=' hover:underline hidden sm:flex'>About</li>
            </Link>
            <Link to='/profile'>
            <li className='hover:underline hidden sm:flex'>Profile</li>
            </Link>
           <Link to='/signin'>
            <li className='hover:underline flex'>SignIN</li>
            </Link>
                    </ul>
        
    </header>
  )
}

export default Header
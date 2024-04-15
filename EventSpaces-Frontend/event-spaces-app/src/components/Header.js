import React, { useState } from 'react';
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";

const Header = () => {
    const logo = 'https://storage.googleapis.com/bk-event-spaces/public/EventSpaces/eventspaces-logo-white.png';
    let Links =[
        {name:"Home",link:"/"},
        {name:"Services",link:"/"},
        {name:"Pricing",link:"/"},
        {name:"Contact",link:"/"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
           <div className='md:flex items-center justify-between bg-evsp-500 py-4 md:px-10 px-7'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
            <img src={logo} className="h-10" alt="event-sapces-logo" />
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-6 text-2xl text-white hover:text-gray-900'>
                {
                    open ? <IoMdClose/> : <LuMenu />
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pt-1 absolute md:static bg-evsp-550 md:bg-evsp-500 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-0 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 ml-0 font-semibold'>
                        <a href={link.link} className='text-white hover:text-gray-900'>{link.name}</a>
                    </li>
                    ))
                }
            </ul>
            {/* button */}
           </div>
        </div>
    );
};

export default Header;
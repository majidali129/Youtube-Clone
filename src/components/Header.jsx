import React, { Fragment, useContext, useState } from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom';

import ytLogo from '../assets/images/yt-logo.png';
import ytLogoMobile from '../assets/images/yt-logo-mobile.png';
import avatar from '../assets/images/avatar.jpg'

import {SlMenu} from 'react-icons/sl'
import {BiSearch} from 'react-icons/bi'
import {RiVideoAddLine} from 'react-icons/ri'
import {FiBell} from 'react-icons/fi'
import { MdClose } from 'react-icons/md';

import { Context } from '../context/contextApi';
import Loader from '../shared/Loader';

const Header = () => {

    const [searchQuery, setSearchQuery] = useState("")

    const {loading, mobileMenu, setMobileMenu} = useContext(Context)

    const navigate = useNavigate()

    const searchQueryHandler = (event)=>{
        if((event?.key === 'Enter' || event === 'searchButton') && searchQuery?.length > 0){
            navigate(`/searchResult/${searchQuery}`)
        }
    };

    const mobileToogle = ()=>{
        setMobileMenu(!mobileMenu)
    }

    const {pathname} = useLocation();
    const pageName = pathname?.split('/')?.filter(Boolean)?.[0];



  return (
   <Fragment>
    <div className=" sticky  flex flex-row   top-0 items-center justify-between h-[10vh] px-5 md:px-6 bg-black dark:bg-white z-10">
        <div className=" text-white flex items-center">
            {
                loading ? (<Loader/>) : 
                pageName !== 'video' && (
                    <div className='flex md:hidden h-10 w-10 cursor-pointer mr-4  rounded-md items-center justify-center hover:bg-[#303030]/[0.6]' onClick={mobileToogle}>
                        {mobileMenu ? (
                            <MdClose className='text-white text-xl'/>
                        ) : (<SlMenu className='text-white text-xl'/>)}
                    </div>
                )
            }
            <Link to='/'>
            <img src={ytLogo} 
            className='hidden md:block h-8' 
            alt="Youtube" />
            <img src={ytLogoMobile} 
            className='block md:hidden h-8' 
            alt="Youtube" />
            </Link>
        </div>


        <div className="flex items-center group ">
            <div className='flex   md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5'>
                <div className='w-8 items-center justify-center hidden group-focus-within:md:flex cursor-pointer '>
                    <BiSearch className="text-white text-2xl"/>
                </div>
                <input
                type="text"
                className='bg-transparent outline-none flex justify-center text-white  pr-5 pl-5 md:pl-0 group-focus-within:pl-4 py-1 md:py-2 text-2xl   w-56 md:w-64 lg:w-[500px]'
                onChange={(e)=>setSearchQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
                value={searchQuery}
                />
                </div>
                <div className='w-[40px] md:w-[60px] py-2 md:py-3 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.2] cursor-pointer'>
                    <BiSearch className='text-white text-2xl' onClick={searchQueryHandler}/>
                </div>
        </div>
        {/* right side */}
        <div className="flex items-center ">
            <div className='flex'>
                <div className='flex items-center justify-center h-12 w-12 rounded-full hover:bg-[#303030]/[0.6]'>
                    <RiVideoAddLine className='text-white text-2xl cursor-pointer'/>
                </div>
                <div className='flex items-center justify-center h-12 w-12 rounded-full hover:bg-[#303030]/[0.6]'>
                    <FiBell className='text-white text-2xl cursor-pointer'/>
                </div>
                <div className='flex h-8 w-8  rounded-full ml-2 md:ml-4'>
                    <img src={avatar} alt="" className='rounded-full h-[100%] w-[100%]' />
                </div>
            </div>
        </div>
    </div>
   </Fragment>
  )
}

export default Header
import Image from 'next/image'
import React from 'react';
import {HomeIcon, PlusIcon, SearchIcon, StarIcon} from "@heroicons/react/solid";
import {getSession, signIn, signOut, useSession} from "next-auth/react";
import { useRouter } from 'next/router';

const Header = () => {

  const {data:session}= useSession()
  const router = useRouter()

  return (
    <header className='sticky items-center px-10 flex bg-[#040714] z-[1000] h-[72px] top-0 md:px-12'>
    
     <Image src="/images/logo.svg" height={80} onClick={()=> router.push("/")} width={80} className='cursor-pointer'/>

    {
        session && (
            <div className='hidden ml-10 md:flex items-center space-x-6'>
         <a className='header-link group'>
           <HomeIcon className="h-4"/>
           <span className='span'>Home</span>
         </a>

         <a className='header-link group'>
           <SearchIcon className="h-4"/>
           <span className='span'>Search</span>
         </a>

         <a className='header-link group'>
           <PlusIcon className="h-4"/>
           <span className='span'>Watchlist</span>
         </a>

         <a className='header-link group'>
           <StarIcon className="h-4"/>
           <span className='span'>Originals</span>
         </a>

         <a className='header-link group'>
            <img src="/images/movie-icon.svg" alt="" className='h-5' />
           <span className='span'>Movies</span>
         </a>

         <a className='header-link group'>
         <img src="/images/series-icon.svg" alt="" className='h-5' />
           <span className='span'>Series</span>
         </a>

     </div>

        )
    }

     {
         !session ? (
            <button className='ml-auto font-medium hover:bg-white transition duration-200 hover:text-black tracking-wide  uppercase border px-4 py-1.5 rounded' onClick={signIn}>Login</button>
         ) : (
    
           <img src={session.user.image} alt="" className='h-12 w-12 ml-auto rounded-full object-cover cursor-pointer' onClick={signOut}/>
         )
     }
     
    </header>
  )
}

export default Header


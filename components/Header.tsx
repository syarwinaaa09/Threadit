import Image from 'next/image'
import React from 'react'
import ThreaditLogo from './threadit-logo.png'
import ThreaditLogo2 from './threadit-favicon-black.png'
import { 
    Bars3Icon,
    HomeIcon,
} from '@heroicons/react/16/solid'
import {
    BellIcon,
    ChevronDownIcon, 
    GlobeAltIcon,
    PlusIcon,
    SparklesIcon,
    VideoCameraIcon,
    MagnifyingGlassIcon,
    MegaphoneIcon,
    ChatBubbleOvalLeftEllipsisIcon
} from '@heroicons/react/24/outline'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from "next/link";

function Header() {
    const { data: session } = useSession();
  return (
    <div className="sticky top-0 z-50 flex items-center bg-white px-4 py-2 shadow-sm">
        <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
            <Link href="/">
                <Image alt="" objectFit="contain" src={ThreaditLogo} layout="fill"/>
            </Link>       
        </div>

        <div className="flex items-center mx-7 xl:min-w-[300px]">
            <HomeIcon className="h-5 w-5"/>
            <p className="ml-2 hidden flex-1 lg:inline">Home</p>
            <ChevronDownIcon className="h-5 w-5"/>
        </div>

        {/* Search box */}
        <form className="flex flex-1 items-center space-x-2 border border-gray-200 rounded-sm bg-gray-100 px-3 py-1">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400"/>
            <input className="flex-1 bg-transparent outline-none" type="text" placeholder="Search Threadit" />
            <button type="submit" hidden />
        </form>

        <div className="mx-5 hidden items-center text-gray-500 space-x-2 lg:inline-flex">
            <SparklesIcon className="icon"/>
            <GlobeAltIcon className="icon"/>
            <VideoCameraIcon className="icon"/>
            <hr className="h-10 border border-gray-100"/>
            <ChatBubbleOvalLeftEllipsisIcon className="icon"/>
            <BellIcon className="icon"/>
            <PlusIcon className="icon"/>
            <MegaphoneIcon className="icon"/>
        </div>
        <div className="ml-5 flex items-center lg:hidden">
            <Bars3Icon className="icon" />
        </div>

        {/* Sign in/Sign out button */}
        {session ? (
        <div onClick={() => signOut()} className="hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex">
            <div className="relative h-5 w-5 flex-shrink-0">
                <Image objectFit="contain" src={ThreaditLogo2} layout="fill" alt="" />
            </div>
            <div className="flex-1 text-xs">
                <p className="truncate">{session?.user?.name}</p>
                <p className="text-gray-400">1 Karma</p>
            </div>

            <ChevronDownIcon className="h-5 flex-shrink-0 text-gray-400" />
        </div>
        ): (
        <div onClick={() => signIn()} className="hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex">
            <div className="relative h-5 w-5 flex-shrink-0">
                <Image objectFit="contain" src={ThreaditLogo2} layout="fill" alt="" />
            </div>

            <p className="tex-gray-400">Sign In</p>
        </div>
        )}
        
    </div>
  )
}

export default Header
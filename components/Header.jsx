import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import user from "../public/assets/user.png";
import menu from "../public/assets/menu1.svg";
import notification from "../public/assets/notification.svg";
import chat from "../public/assets/chat1.svg";
import logo from "../public/assets/logo.png";
import { meunListLink, userProfile } from '@/utils/constants';
export default function Header() {
  return (
    <div className='h-20 sticky top-0 z-10 m-4'>
        <div className='flex items-center justify-between border-2 border-gray-300 rounded-full shadow-md p-3'>
            <Link href={"/"}><Image src={logo} alt='logo'/></Link>
            <ul className='flex items-center gap-6'>
                {meunListLink.map((item) => (
                    <li key={item.name} className='flex items-center gap-2'>
                        <Image src={item.image} width={20} height={20}/>
                        <span>{item.name}</span>
                    </li>
                ))}
            </ul>
            <div className='flex gap-4'>
                <Image src={notification}/>
                <Image src={chat}/>

                {/* User Profile */}
                <div>
                <Image src={user} alt='user' width={40} height={40}/>
                </div>
            </div>
        </div>
    </div>
  )
}

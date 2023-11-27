"use client";
import Image from "next/image";
import React, { useState } from "react";
import user from "../public/assets/user.png";
import Link from "next/link";
import avi from "../public/assets/avi.png";
import { CiSettings } from "react-icons/ci";
import { MdOutlineSwitchAccount } from "react-icons/md";
import widgets from "../public/assets/widgets1.svg"
import { GoBug } from "react-icons/go";
import { TbChartHistogram } from "react-icons/tb";
import { FaToolbox } from "react-icons/fa6";
export default function UserDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative inline-block ">
      <Image
        src={user}
        alt="user"
        width={40}
        height={40}
        onClick={toggleDropdown}
        className="text-white focus:outline-none cursor-pointer"
      />

      <div className="">
        {isOpen && (
          <div className="w-[300px] flex flex-col absolute right-20 z-10 mt-7 bg-white p-4 rounded shadow-xl gap-y-6">
            <div className="flex gap-3">
              <Image
              className="rounded-full"
              src={avi} alt="profile picture"
              width={40} height={40}/>
              <div
               className="flex flex-col">
                <h1 className="font-bold tracking-wide">Olivier Jones</h1>
                <span className="text-gray-400 font-light">oliviierjones@gmail.com</span>
              </div>
            </div>
            <Link href={"/"} className="flex items-center gap-x-2"><CiSettings/>Settings</Link>
            <Link href="/#" className="flex items-center gap-x-2"><TbChartHistogram/>Purchase History</Link>
            <Link href="#" className="flex items-center gap-x-2"><FaToolbox/>Refer and Earn</Link>
            <Link href="#" className="flex items-center gap-x-2"><Image src={widgets}/>Intergrations</Link>
            <Link href="#" className="flex items-center gap-x-2"><GoBug/>Report Bug</Link>
            <Link href="#"className="flex items-center gap-x-2"><MdOutlineSwitchAccount/>Switch Account</Link>
          </div>
        )}
      </div>
    </div>
  );
}

'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { signOut, useSession } from 'next-auth/react';

export default function NavBar() {
    const session = useSession()
    

    const navItems = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Shop",
            path: "/shop"
        },
        {
            title: "Dashboard",
            path: "/dashboard"
        },
        {
            title: "About Us",
            path: "/about"
        },
    ]
    return (
        <div className="navbar bg-blue-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <div className="flex flex-col gap-5">
                            {
                                navItems.map((item) => (
                                    <Link className="font-semibold hover:text-primary duration-300" href={item.path} key={item.path}>{item.title}</Link>
                                ))
                            }
                        </div>
                    </ul>
                </div>
                <div>
                    <Link href={"/"}>
                        <Image alt='logo' src="/assets/logo.svg" height={60} width={60}></Image>
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">

                <div className="flex items-center space-x-6">
                    {
                        navItems.map((item) => (
                            <Link className="font-semibold hover:text-primary duration-300" href={item.path} key={item.path}>{item.title}</Link>
                        ))
                    }
                </div>

            </div>
            <div className="navbar-end">
                <div className=' flex items-center space-x-5'>
                    <Link href="/"><FaShoppingCart className="text-2xl text-blue-600" /></Link>
                    <IoIosSearch className="text-2xl text-blue-600" />
                    {!session.data ? <Link href="/login"><FaUser className="text-2xl text-blue-600" /></Link> : <>
                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 w-7 rounded-full ring ring-offset-2">
                                <Image width={7} height={7} src="/assets/user/user.jpg" alt='User' />
                            </div>
                        </div>
                        <button
                            onClick={()=>signOut()}
                            className="flex items-center space-x-2 bg-transparent border-none cursor-pointer pe-2"
                            title="Logout"
                        >
                            <IoMdLogOut className="text-2xl hover:text-3xl text-red-600 hover:text-red-700" />
                            <span className="hidden md:block font-semibold text-red-600 hover:text-red-700">
                                Logout
                            </span>
                        </button>
                    </>}
                </div>
            </div>
        </div>
    )
}

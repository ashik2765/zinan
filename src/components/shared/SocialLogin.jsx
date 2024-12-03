import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

export default function SocialLogin() {
    return (
        <div className="mt-6 grid grid-cols-2 gap-4">
            <button
                type="button"
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <FaGoogle className='text-2xl me-2 text-blue-600' />
                Google
            </button>
            <button
                type="button"
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <FaFacebookF className='text-2xl me-2 text-blue-600' />
                Facebook
            </button>
        </div>
    )
}

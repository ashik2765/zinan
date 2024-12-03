import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function Page() {
    return (
        <div>
            <Head>
                <title>Login - E-Commerce</title>
            </Head>
            <div className="flex md:min-h-screen items-center justify-center bg-gray-100">
                <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-md">
                    <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                        Welcome Back
                    </h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember-me"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>
                            <a
                                href="#"
                                className="text-sm text-indigo-600 hover:text-indigo-500"
                            >
                                Forgot password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign In
                        </button>
                    </form>
                    <p className="mt-6 text-center text-sm text-gray-600">
                        Do not have an account?{" "}
                        <Link
                            href="/signUp"
                            className="text-indigo-600 hover:text-indigo-500 font-medium"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}


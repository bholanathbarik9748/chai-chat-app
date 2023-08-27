import React, { useState } from 'react'

const Signup = () => {
    const [showPass, setShowPass] = useState(false);
    const [sendOTP, setSendOTP] = useState(false);

    return (
        <div className='mx-10 my-10'>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-90">email *</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@chai.com" required />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-90">password *</label>
                <input type={showPass === true ? "text" : "password"} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="XXXXXXX" required />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-90">conform password *</label>
                <input type={showPass === true ? "text" : "password"} id="conform_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="XXXXXXX" required />
            </div>
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                    <input onChange={() => setShowPass(!showPass)} id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">show password</label>
            </div>

            {
                sendOTP && (
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-90">OTP *</label>
                        <input type="number" id="OTP" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1234" required />
                    </div>
                )
            }

            {
                !sendOTP
                    ? <button type="submit" className="text-black bg-A8DADC font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Send OTP</button>
                    :
                    <button type="submit" className="text-black bg-A8DADC font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            }



        </div>
    )
}

export default Signup;
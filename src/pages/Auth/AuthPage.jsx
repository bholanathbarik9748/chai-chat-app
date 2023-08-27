import React, { useState } from 'react';
import Login from '../../components/Auth/Login';
import SignUp from '../../components/Auth/Sign-up';


const AuthPage = () => {
    const [isActive, setIsActive] = useState(1);
 
    return (
        <>
            <div className='mx-10 my-10 flex flex-col'>
                <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                    <li className="w-full">
                        <a onClick={() => setIsActive(1)} className={`inline-block w-full cursor-pointer p-4 text-gray-900 ${isActive != 2 ? "bg-gray-700 text-white" : "bg-A8DADC"} rounded-l-lg`}>Login</a>
                    </li>
                    <li className="w-full">
                        <a onClick={() => setIsActive(2)} className={`inline-block w-full cursor-pointer p-4 text-gray-900 ${isActive != 1 ? "bg-gray-700 text-white" : "bg-A8DADC"}  rounded-r-lg`}>Sign Up</a>
                    </li>
                </ul>
            </div>
            {
                isActive == 1 ? <Login /> : <SignUp />
            }
        </>
    )
}

export default AuthPage
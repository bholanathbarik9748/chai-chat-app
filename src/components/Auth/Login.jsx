import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

// Validate input field
const InputFieldValidator = (text) => {
    return text && text !== undefined && text !== '' ? true : false;
}

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);

    const submitHandler = () => {
        if (!InputFieldValidator(email)) {
            toast.error("Email is required", { position: 'top-right' });
            return;
        }

        if (!InputFieldValidator(password)) {
            toast.error("password is required");
            return;
        }
    }

    return (
        <div className='mx-10 my-10'>
            <Toaster />
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-90">email *</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@chai.com" required />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-90">password *</label>
                <input onChange={(e) => setPassword(e.target.value)} type={showPass === true ? "text" : "password"} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="XXXXXXX" required />
            </div>
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                    <input onChange={() => setShowPass(!showPass)} id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">show password</label>
            </div>
            <div className="mb-4">
                <a href="/forgot-password" className="text-sm font-medium text-blue-600 hover:underline">
                    Forgot Password?
                </a>
            </div>
            <button onClick={submitHandler} type="submit" className="text-black bg-A8DADC font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </div>
    )
}

export default Login
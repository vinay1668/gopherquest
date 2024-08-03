import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (username === 'vinay' && password === 'Morpheous') {
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/dashboard');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center pt-20">
            <h1 className="text-4xl font-bold text-center mb-8 text-cyan-100 shadow-cyan-500/50">GopherQuest: Code of the Future</h1>
            <form onSubmit={handleSubmit} className="bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-3xl font-bold mb-6 text-cyan-300 text-center">Enter the Digital Realm</h2>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-cyan-200 mb-2">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full bg-gray-800 text-cyan-100 border border-gray-700 rounded py-2 px-3 focus:outline-none focus:border-cyan-500"
                        placeholder="Enter your codename"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-cyan-200 mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-gray-800 text-transparent text-shadow-password border border-gray-700 rounded py-2 px-3 focus:outline-none focus:border-cyan-500"
                        placeholder="Enter your secret key"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                >
                    Access the Grid
                </button>
            </form>
        </div>
    );
}

export default Login;

import React, { useState } from 'react';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle signup logic here
    };

    return (
        <div className="flex items-start justify-center min-h-screen pt-20">
            <form onSubmit={handleSubmit} className="bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-lg w-96 border border-cyan-800">
                <h2 className="text-3xl font-bold mb-6 text-cyan-300 text-center">Initialize Your Digital Avatar</h2>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-cyan-200 mb-2">Codename</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full bg-gray-800 text-cyan-100 border border-gray-700 rounded py-2 px-3 focus:outline-none focus:border-cyan-500"
                        placeholder="Enter your digital alias"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-cyan-200 mb-2">Encryption Key</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-gray-800 text-transparent text-shadow-password border border-gray-700 rounded py-2 px-3 focus:outline-none focus:border-cyan-500"
                        placeholder="Create your neural firewall"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                >
                    Materialize in the Grid
                </button>
                <p className="text-red-400 text-xs italic mt-4">Warning: Once initialized, your digital essence cannot be reversed. Proceed with caution.</p>
            </form>
        </div>
    );
}

export default Signup;

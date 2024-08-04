import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-cyan-300 mb-6">Welcome to GopherQuest: Code of the Future</h1>
            <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg mb-8">
                <p className="text-lg mb-4">
                    Enter a futuristic digital realm where Golang Gophers are the guardians of an ancient and powerful codebase.
                    Our virtual world faces a grave threat - a mysterious virus is corrupting the very fabric of our digital existence.
                </p>
                <p className="text-lg mb-4">
                    As a new recruit in the Gopher Guild, your mission is to master the art of Golang and join the fight against this
                    insidious threat. Learn, code, and battle your way through our immersive quests to restore balance to our world.
                </p>
                <p className="text-lg mb-6">
                    Are you ready to embark on this epic coding adventure? The future of our digital realm rests in your hands!
                </p>
                <Link to="/signup" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                    Join the Gopher Guild
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-4">Key Features</h2>
                    <ul className="list-disc list-inside text-gray-300">
                        <li>Engaging quests to learn Golang concepts</li>
                        <li>Customizable Gopher avatars</li>
                        <li>Coding challenges as virus battles</li>
                        <li>Interactive code editor with instant feedback</li>
                        <li>Community hub for collaboration</li>
                    </ul>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-4">Your Journey Begins</h2>
                    <p className="text-gray-300 mb-4">
                        Start your adventure in Cyber City, where you'll meet your Gopher mentor and learn the basics of Golang.
                        As you progress, you'll unlock new areas like the Glitch Forest and the Data Stream Caverns.
                    </p>
                    <p className="text-gray-300">
                        With each challenge you overcome, you'll grow stronger and more skilled, becoming a true guardian of the digital realm.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;

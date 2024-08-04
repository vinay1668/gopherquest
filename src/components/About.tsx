import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-cyan-300 mb-6">About GopherQuest</h1>
            <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg mb-8">
                <p className="text-lg mb-4">
                    GopherQuest: Code of the Future is more than just a learning platform - it's a revolutionary approach to mastering Golang.
                    We've combined cutting-edge educational techniques with immersive gameplay to create an experience that's both
                    engaging and effective.
                </p>
                <p className="text-lg mb-4">
                    Our team of expert developers and educators have crafted a unique world where every line of code you write has a
                    tangible impact. As you progress through the game, you're not just learning Golang - you're saving a digital world.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-4">Our Mission</h2>
                    <p className="text-gray-300">
                        At GopherQuest, we believe that learning should be an adventure. Our mission is to make Golang accessible and
                        enjoyable for everyone, from complete beginners to intermediate programmers looking to level up their skills.
                    </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-cyan-300 mb-4">The GopherQuest Difference</h2>
                    <ul className="list-disc list-inside text-gray-300">
                        <li>Learn by doing in a fully interactive environment</li>
                        <li>Immediate feedback on your code</li>
                        <li>Gradual difficulty progression to keep you challenged</li>
                        <li>A supportive community of fellow learners</li>
                        <li>Regular updates with new quests and challenges</li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-cyan-300 mb-4">Join the Quest</h2>
                <p className="text-gray-300 mb-4">
                    Whether you're a coding novice or a seasoned developer, GopherQuest offers a unique and exciting way to enhance
                    your Golang skills. Join us in our mission to create a new generation of skilled Golang developers, ready to tackle
                    the challenges of tomorrow's digital landscape.
                </p>
                <p className="text-gray-300">
                    The future of code awaits. Are you ready to answer the call?
                </p>
            </div>
        </div>
    );
};

export default About;

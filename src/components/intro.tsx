import React from 'react';

function Intro() {
    return (
        <div className="bg-gray-900 text-cyan-300 p-8 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-center">Gopher Quest: The Code Chronicles</h1>
                <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg border border-cyan-500">
                    <h2 className="text-2xl font-semibold mb-4">Welcome, Gopher Recruit</h2>
                    <p className="mb-4">The year is 2050. Our digital realm lies in ruins. Only Go, the ancient language of resilience, has survived the Great Syntax Wars. You've been awakened from cryosleep to join the last bastion of coders.</p>
                    <div className="bg-cyan-900 bg-opacity-30 p-4 rounded-md mb-6">
                        <h3 className="text-xl font-bold mb-2">Your first quest awaits: 'Echoes of the Founders'</h3>
                        <p>Deep in the Syntax Forest, a corrupted terminal holds secrets of Go's creation. Legends speak of the mystic runes 'fmt.Println'. Your mission: reactivate this artifact and uncover the forgotten power of Go's simplicity.</p>
                        <p className="mt-2 text-yellow-300">Beware, recruit. The forest teems with legacy code zombies and null pointer exceptions. Stay vigilant. The fate of CodeLandia rests in your hands.</p>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                            Accept Quest
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                            View Gopher Codex
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;
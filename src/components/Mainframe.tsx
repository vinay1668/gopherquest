import { Link } from 'react-router-dom';

const quests = [
    {
        id: 1,
        title: "The Gopher's Genesis",
        description: "Uncover the ancient scrolls detailing the birth of Go. Learn the lore of its creators and the prophecy of simplicity and efficiency.",
        difficulty: "Initiate",
        reward: "Gain the Sight of Origins"
    },
    {
        id: 2,
        title: "Runes of Declaration",
        description: "Master the arcane symbols to summon variables into existence. Harness the power of type inference to bend reality to your will.",
        difficulty: "Novice",
        reward: "Unlock the Codex of Variables"
    },
    {
        id: 3,
        title: "The Lexical Labyrinth",
        description: "Navigate the maze of naming conventions. Learn to craft identifiers that resonate with the cosmic order of Go.",
        difficulty: "Apprentice",
        reward: "Earn the Badge of Clarity"
    },
    {
        id: 4,
        title: "Conditional Crossroads",
        description: "Face the guardians of logic at the Conditional Crossroads. Master if-else statements to choose your path wisely.",
        difficulty: "Novice",
        reward: "Gain the Amulet of Decision"
    },
    {
        id: 5,
        title: "Loops of Eternity",
        description: "Harness the power of repetition. Bend time itself with for loops to accomplish heroic feats with minimal code.",
        difficulty: "Apprentice",
        reward: "Receive the Infinity Bracelet"
    },
    {
        id: 6,
        title: "The Goroutine Labyrinth",
        description: "Navigate the treacherous maze of concurrent execution. Master goroutines to escape the ever-shifting corridors of async chaos.",
        difficulty: "Novice",
        reward: "Unlock the power of parallel processing"
    },
    {
        id: 7,
        title: "Channels of the Void",
        description: "Harness the ancient art of channel communication. Synchronize data flows to bridge the gaps between digital dimensions.",
        difficulty: "Adept",
        reward: "Gain the ability to traverse parallel realities"
    },
    {
        id: 8,
        title: "The Interface Shapeshifter",
        description: "Confront the polymorphic beast that lurks in the shadows of type systems. Wield interfaces to tame its ever-changing form.",
        difficulty: "Master",
        reward: "Acquire the essence of adaptability"
    }
];

function Mainframe() {
    return (
        <div className="text-cyan-300 p-8 min-h-screen font-mono">
            <div className="max-w-17xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-center text-cyan-400 shadow-cyan-500/50">Gopher Quest: Code Chronicles</h1>
                <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg border border-cyan-800">
                    <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Available Quests</h2>
                    <div className="space-y-4">
                        {quests.map(quest => (
                            <div key={quest.id} className="bg-gray-800 bg-opacity-50 p-4 rounded-md hover:bg-gray-700 transition duration-300">
                                <h3 className="text-xl font-bold mb-2 text-cyan-400">{quest.title}</h3>
                                <p className="text-sm mb-2 text-cyan-200">{quest.description}</p>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-xs text-yellow-400">Difficulty: {quest.difficulty}</span>
                                    <span className="text-xs text-green-400">Reward: {quest.reward}</span>
                                </div>
                                <Link
                                    to={`/quest/${quest.id}`}
                                    className="mt-3 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-bold py-2 px-4 rounded transition duration-300 inline-block"
                                >
                                    Embark on Quest
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mainframe;

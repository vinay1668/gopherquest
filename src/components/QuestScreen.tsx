import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Editor from '@monaco-editor/react';

const quests = [
    {
        id: 1,
        title: "The Gopher's Genesis",
        description: "Uncover the ancient scrolls detailing the birth of Go...",
        difficulty: "Initiate",
        reward: "Gain the Sight of Origins",
        content: [
            {
                title: "Introduction to Go",
                text: "Go, also known as Golang, is an open-source programming language developed by Google. Designed for simplicity, efficiency, and reliability, Go has gained popularity for its ability to handle modern computing challenges. It combines the performance and security benefits of C and C++ with the ease of use of languages like Python and JavaScript. This section will introduce Go, its history, and its place in the current programming landscape."
            },
            {
                title: "Key Features of Go",
                text: "Go is known for its simplicity and speed, making it a preferred language for system and network programming, cloud services, and more. Key features include its efficient concurrency model, garbage collection, fast compilation, and robust standard library. This section will delve into these features, explaining why they are beneficial, especially for beginners in programming."
            },
            {
                title: "Simplicity",
                text: "Go's design philosophy emphasizes simplicity and minimalism. The language intentionally avoids complex features and unnecessary abstractions, making it easy for developers to read, write, and maintain code. This simplicity fosters clean and understandable codebases, which is crucial for collaboration and long-term maintainability."
            },
            {
                title: "Strong Typing",
                text: "Go is a statically typed language, meaning that variable types are determined at compile-time and cannot change during runtime. Strong typing helps catch errors early in the development process and improves code reliability. However, Go's type system is also flexible, allowing for easy conversion between compatible types."
            },
            {
                title: "Concurrency",
                text: "Go has a built-in concurrency model based on goroutines and channels. Goroutines are lightweight, concurrent functions that enable developers to write concurrent code with ease. Channels facilitate communication and synchronization between goroutines. This concurrency model is a distinctive feature of Go and is particularly valuable for building highly concurrent systems like web servers and distributed applications."
            },
            {
                title: "Garbage Collection",
                text: "Go incorporates automatic memory management through a garbage collector. This feature relieves developers from manual memory management tasks, such as allocating and deallocating memory, which can be a source of errors and security vulnerabilities in other languages. The garbage collector helps prevent memory leaks and ensures efficient memory utilization."
            },
            {
                title: "Package System",
                text: "Go has a powerful and straightforward package system that encourages modularity and code organization. Packages are the building blocks of Go programs, and the standard library provides a rich set of packages for common tasks. The 'go get' command simplifies package management by automatically fetching and installing dependencies from version control systems like Git."
            },
            {
                title: "Error Handling",
                text: "Go uses a simple and explicit error handling approach. Functions often return multiple values, with the last one being an error. This pattern encourages developers to handle errors explicitly, making it harder for them to be ignored accidentally. The 'panic' and 'recover' mechanisms provide a way to handle exceptional situations gracefully."
            },
            {
                title: "Static Linking",
                text: "Go compiles to a single binary, which includes all the necessary dependencies. This approach simplifies deployment and distribution of Go applications, as there are no runtime dependencies to manage. It also contributes to the language's reputation for building highly performant executables."
            },
            {
                title: "Strong Standard Library",
                text: "Go's standard library is comprehensive and well-designed, covering a wide range of tasks, from file I/O and networking to cryptography and web development. This rich standard library reduces the need for external dependencies and ensures consistent functionality across different Go programs."
            },
            {
                title: "Tooling",
                text: "Go offers a set of powerful development tools, including 'go fmt' for code formatting, 'go vet' for static analysis, and 'go test' for testing. The 'go' command provides a unified interface for building, testing, and managing Go projects. The tooling ecosystem enhances productivity and code quality."
            }
        ]
    },
    // ... other quests
];

const QuestScreen: React.FC = () => {

    const { id } = useParams<{ id: string }>();
    const [quest, setQuest] = useState(quests.find(q => q.id === parseInt(id || '')));
    const [currentSlide, setCurrentSlide] = useState(0);
    const [code, setCode] = useState('package main\n\nfunc main() {\n\t// Your code here\n}');
    const [output, setOutput] = useState('');

    useEffect(() => {
        // Fetch quest data based on id
        const fetchedQuest = quests.find(q => q.id === parseInt(id || ''));
        setQuest(fetchedQuest);
        console.log('Fetched quest:', fetchedQuest);
    }, [id]);

    const handleCodeChange = (value: string | undefined) => {
        setCode(value || '');
    };

    const handleCompile = () => {
        setOutput('Compiling...\nExecution successful!');
    };

    const nextSlide = () => {
        if (quest && quest.content) {
            setCurrentSlide((prev) => {
                const next = (prev + 1) % quest.content.length;
                console.log('Next slide:', next);
                return next;
            });
        }
    };

    const prevSlide = () => {
        if (quest && quest.content) {
            setCurrentSlide((prev) => {
                const next = (prev - 1 + quest.content.length) % quest.content.length;
                console.log('Previous slide:', next);
                return next;
            });
        }
    };

    if (!quest) {
        return <div>Loading quest...</div>;
    }

    return (
        <div className="text-cyan-300 min-h-screen font-mono">
            <div className="max-w-17xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-cyan-400 shadow-cyan-500/50">{quest.title}</h1>
                    <Link
                        to="/mainframe"
                        className="bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-bold py-2 px-4 rounded transition duration-300"
                    >
                        Return to Mainframe
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg border border-cyan-800 relative">
                        <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Mission Briefing</h2>
                        <div className="h-96 overflow-hidden">
                            {quest.content && quest.content[currentSlide] && (
                                <div className="h-96">
                                    <h3 className="text-lg font-bold mb-2 text-cyan-400">{quest.content[currentSlide].title}</h3>
                                    <p className="text-sm text-cyan-200">{quest.content[currentSlide].text}</p>
                                </div>
                            )}
                        </div>
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
                            <button onClick={prevSlide} className="bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-bold py-2 px-4 rounded transition duration-300">Previous</button>
                            <button onClick={nextSlide} className="bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-bold py-2 px-4 rounded transition duration-300">Next</button>
                        </div>
                    </div>
                    <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg border border-cyan-800">
                        <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Quantum Code Compiler</h2>
                        <div className="h-96 mb-4">
                            <Editor
                                height="100%"
                                defaultLanguage="go"
                                theme="vs-dark"
                                value={code}
                                onChange={handleCodeChange}
                                options={{
                                    minimap: { enabled: false },
                                    fontSize: 14,
                                }}
                            />
                        </div>
                        <button
                            onClick={handleCompile}
                            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-bold py-2 px-4 rounded transition duration-300"
                        >
                            Initialize Quantum Compilation
                        </button>
                        <div className="mt-4 bg-gray-800 bg-opacity-50 p-4 rounded-md">
                            <h3 className="text-lg font-bold mb-2 text-cyan-400">Neutrino Output Matrix</h3>
                            <pre className="text-sm text-cyan-200 whitespace-pre-wrap">{output}</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestScreen;

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const authStatus = localStorage.getItem('isAuthenticated') === 'true';
        setIsAuthenticated(authStatus);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        setIsAuthenticated(false);
        navigate('/');
    };

    return (
        <nav className="bg-black bg-opacity-50 p-4 backdrop-blur-md">
            <div className="container mx-auto flex justify-between items-center">
                <ul className="flex space-x-6">
                    <li><Link to="/" className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300 text-lg">Home</Link></li>
                    <li><Link to="/about" className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300 text-lg">About</Link></li>
                    <li><Link to="/mainframe" className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300 text-lg">Mainframe</Link></li>
                </ul>
                <ul className="flex space-x-6">
                    {isAuthenticated ? (
                        <li><span onClick={handleLogout} className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300 text-lg cursor-pointer">Logout</span></li>
                    ) : (
                        <>
                            <li><Link to="/login" className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300 text-lg">Login</Link></li>
                            <li><Link to="/signup" className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300 text-lg">Signup</Link></li>
                        </>
                    )}
                </ul>
            </div>
        </nav>

    )
}

export default Navbar

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/home';
import PrivateRoute from './components/privateRoutes';

// import Home from './components/Home';
// import About from './components/About';
// import Game from './components/Game';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-gray-100 font-mono relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-[url('/circuit-pattern.png')] opacity-20"></div>
        <div className="relative z-10">
          <nav className="bg-black bg-opacity-50 p-4 backdrop-blur-md">
            <div className="container mx-auto flex justify-between items-center">
              <ul className="flex space-x-6">
                <li><Link to="/" className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300 text-lg">Home</Link></li>
                <li><Link to="/about" className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300 text-lg">About</Link></li>
                <li><Link to="/game" className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300 text-lg">Play</Link></li>
              </ul>
              <ul className="flex space-x-6">
                <li><Link to="/login" className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300 text-lg">Login</Link></li>
                <li><Link to="/signup" className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300 text-lg">Signup</Link></li>
              </ul>
            </div>
          </nav>
          <div className="container mx-auto px-4 py-8">
            <Routes>
              {/* <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/game" element={<Game />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>

  );
}

export default App;

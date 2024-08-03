import { BrowserRouter as Router, Routes, Link } from 'react-router-dom';
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
            <ul className="flex space-x-6 justify-center">
              <li><Link to="/" className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300 text-lg">Home</Link></li>
              <li><Link to="/about" className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300 text-lg">About</Link></li>
              <li><Link to="/game" className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300 text-lg">Play</Link></li>
            </ul>
          </nav>
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8 text-cyan-100 shadow-cyan-500/50">GopherQuest: Code of the Future</h1>
            <Routes>
              {/* <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/game" element={<Game />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>

  );
}

export default App;

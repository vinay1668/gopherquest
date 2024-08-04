import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainframe from './components/Dashboard';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import PrivateRoute from './components/PrivateRoutes';
import Home from './components/Home';
import About from './components/About';

// import Home from './components/Home';
// import About from './components/About';
// import Game from './components/Game';

function App() {
  //const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-gray-100 font-mono relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-[url('/circuit-pattern.png')] opacity-20"></div>
        <div className="relative z-10">
          <Navbar />
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/mainframe" element={<PrivateRoute><Mainframe /></PrivateRoute>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>

  );
}

export default App;

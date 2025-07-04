import { Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';
import About from './About';
import './App.css';
import logoPng from './assets/logo_cropped.png';
import heroImg from './assets/team_photo.avif';
import Book from './Book';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="main-content hero-section">
      <div className="hero-image-container">
        <img src={heroImg} alt="Hero" className="hero-image" />
      </div>
      <div className="hero-title-container">
        <h1 className="hero-title">shift happens.</h1>
        <button className="hero-subtitle booknow-inline-btn" onClick={() => navigate('/book')}>Book now.</button>
        <p className="hero-subtitle">Repair Today.</p>
        <p className="hero-subtitle">Ride Tomorrow.</p>
      </div>
    </div>
  );
}

function App() {
  const navigate = useNavigate();
  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-left">
          <button
            className="navbar-logo-btn"
            onClick={() => navigate('/')}
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            aria-label="Go to Home"
          >
            <img src={logoPng} alt="Logo" className="navbar-logo" />
          </button>
        </div>
        <div className="navbar-right">
          <button className="nav-btn" onClick={() => navigate('/about')}>About Us</button>
          <button className="nav-btn book-btn" onClick={() => navigate('/book')}>Book Now</button>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <p>© 2025 Shift Happens · Designed by Aidan Lebelle & Noah Stevens</p>
      </footer>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
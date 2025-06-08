import { Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';
import About from './About';
import './App.css';
import logoPng from './assets/logo_cropped.png';
import heroImg from './assets/team_photo.avif';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="main-content hero-section">
      <div className="hero-image-container">
        <img src={heroImg} alt="Hero" className="hero-image" />
      </div>
      <div className="hero-title-container">
        <h1 className="hero-title">shift happens.</h1>
        <button className="hero-subtitle booknow-inline-btn">Book now.</button>
        <p className="hero-subtitle">Repair Today.</p>
        <p className="hero-subtitle">Ride Tomorrow.</p>
      </div>
    </div>
  );
}

function App() {
  const navigate = useNavigate();
  return (
    <>
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
          <button className="nav-btn book-btn">Book Now</button>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
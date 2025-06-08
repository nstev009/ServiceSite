import { useState } from 'react';
import './App.css';
import logoPng from './assets/logo_cropped.png';
import heroImg from './assets/team_photo.avif';

function MainPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logoPng} alt="Logo" className="navbar-logo" />
        </div>
        <div className="navbar-right">
          <button className="nav-btn">About Us</button>
          <button className="nav-btn book-btn">Book Now</button>
        </div>
      </nav>

      {/* Main Content */}
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
    </>
  )
}

export default MainPage
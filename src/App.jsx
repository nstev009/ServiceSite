import { useState } from 'react';
import './App.css';
import logoPng from './assets/logo.png';

function App() {
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
      <div className="main-content">
        <h1>Shift Happens</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  )
}

export default App
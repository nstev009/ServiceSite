import './About.css';
import './App.css';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import linkedin from './assets/linkedin.png';

export default function About() {
  return (
    <div className="main-content about-section">
      <div className="about-container">
        <div className="about-column left-column">
          <div className="content-wrapper">
            <h1 className="hero-title">who are we?</h1>
            <p className="about-text">At Shift Happens, we’re a passionate team of mechanics, tinkerers, and lifelong riders dedicated to keeping Ottawa rolling—one bike at a time. 
                Our roots go way back: we were founded in 1868, when local blacksmith Elias McRae converted his forge on Antonio Farley Street into one of the first bicycle repair shops in the region, 
                back when penny-farthings ruled the roads. More than 150 years later, we’re still operating from the same historic location, blending timeless craftsmanship with modern repair 
                techniques. Whether it’s a quick tune-up, a full overhaul, or just a chat about your next cycling adventure, we treat every bike like a piece of history—because for us, 
                it’s not just transportation, it’s a way of life.</p>
          </div>
          <div className = "icons-wrapper">
            <div className="icon-item">
                <button className="icon-btn" onClick={() => open('https://www.instagram.com/')}><img src={instagram} alt="Instagram" className="icon-image" /></button>
            </div>
            <div className="icon-item">
                <button className="icon-btn" onClick={() => open('https://www.linkedin.com/')}><img src={linkedin} alt="LinkedIn" className="icon-image" /></button>
            </div>
            <div className="icon-item">
                <button className="icon-btn" onClick={() => open('https://www.facebook.com/')}><img src={facebook} alt="Facebook" className="icon-image" /></button>
            </div>
            </div>
        </div>
        <div className="about-column right-column">
          <div className="content-wrapper">
            <h1 className="hero-title">our hours.</h1>
            <p className="about-text">Monday - Friday: 9am - 5pm</p>
            <p className="about-text">Saturday: 10am - 4pm</p>
            <p className="about-text">Sunday: Closed</p>
            <h1 className="hero-title">our location.</h1>
            <p className="about-text">931 Antonio Farley St, Ottawa, ON K4A 3N6</p>
            <h1 className="hero-title">contact us.</h1>
            <p className="about-text">Phone: (613) 415-6855</p>
            <p className="about-text">Email: shift-happens@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
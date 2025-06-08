import "./Book.css";
import React, { useState } from "react";
import CalPng from "./assets/calendar.png";
import Repair from "./assets/bike repair.jpg";
import Clean from "./assets/clean.jpg";
import Tune from "./assets/tuneup.png";
import Diag from "./assets/diag.jpg";

export default function Book() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownService, setShowDropdownService] = useState(false);
  const [showDropdownPers, setShowDropdownPers] = useState(false);
  const [showDropdownDate, setShowDropdownDate] = useState(false);

  const handleConfirmClick = () => {
    alert("Booking Confirmed!");
    setShowDropdown(false);
    setShowDropdownService(false);
    setShowDropdownPers(false);
    setShowDropdownDate(false);
  };

  const handleBookClick = () => {
    setShowDropdown((prev) => !prev);
  };
  const handleServiceClick = () => {
    setShowDropdownService((prev) => !prev);
  };
  const handlePersClick = () => {
    setShowDropdownPers((prev) => !prev);
  };
  const handleDateClick = () => {
    setShowDropdownDate((prev) => !prev);
  };

  return (
    <div className="outer-container">
      {/* Left images */}
      <div className="service-images">
        <div className="service-image-block">
          <img src={Tune} alt="Tune Up" />
          <div className="service-price">$60 Tune-Up</div>
        </div>
        <div className="service-image-block">
          <img src={Clean} alt="Clean" />
          <div className="service-price">$40 Cleaning</div>
        </div>
      </div>
      {/* Booking form center */}
      <div className="book-container">
        <div
          className="header-bg"
          style={{ backgroundImage: `url(${CalPng})` }}
        >
          <h1 className="heading">Book Now</h1>
        </div>
        <div className="book-content">
          <button className="clicking-btn" onClick={handleBookClick}>
            Start Booking
          </button>
          {showDropdown && (
            <div className="dropdown-menu">
              <button className="dropdown-item" onClick={handleServiceClick}>
                Service
              </button>
              {showDropdownService && (
                <div className="dropdown-submenu">
                  <button className="dropdown-item">Tune-Up</button>
                  <button className="dropdown-item">Repair</button>
                  <button className="dropdown-item">Cleaning</button>
                  <button className="dropdown-item">Diagnostic</button>
                </div>
              )}
              <button className="dropdown-item" onClick={handlePersClick}>
                Personal Info
              </button>
              {showDropdownPers && (
                <div className="dropdown-submenu">
                  <input
                    className="dropdown-input"
                    type="text"
                    placeholder="Name"
                  />
                  <input
                    className="dropdown-input"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    className="dropdown-input"
                    type="tel"
                    placeholder="Phone Number"
                  />
                </div>
              )}
              <button className="dropdown-item" onClick={handleDateClick}>
                Date
              </button>
              {showDropdownDate && (
                <div className="dropdown-submenu">
                  <button className="dropdown-item">Today</button>
                  <button className="dropdown-item">Tomorrow</button>
                  <button className="dropdown-item">Pick a Date</button>
                </div>
              )}
              <button className="dropdown-confirm" onClick={handleConfirmClick}>
                Confirm Booking
              </button>
            </div>
          )}
        </div>
      </div>
      {/* Right images */}
      <div className="service-images">
        <div className="service-image-block">
          <img src={Repair} alt="Repair" />
          <div className="service-price">$80 Repair</div>
        </div>
        <div className="service-image-block">
          <img src={Diag} alt="Diagnostic" />
          <div className="service-price">$50 Diagnostic</div>
        </div>
      </div>
    </div>
  );
}
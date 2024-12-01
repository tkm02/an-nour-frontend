import React, { useState } from 'react'
import "./Dortoir.css"
const Dortoir = () => {
    const [selected, setSelected] = useState("Garçons");

    const dormitoryData = [
      { name: "Dortoir 1", count: "00" },
      { name: "Dortoir 1", count: "00" },
      { name: "Dortoir 1", count: "00" },
      { name: "Dortoir 1", count: "00" },
      { name: "Dortoir 1", count: "00" },
      { name: "Dortoir 1", count: "00" },
    ];
  
    return (
      <div className="dormitory-container">
        <div className="dormitory-header">
          <h2>Dortoir</h2>
          <div className="toggle">
            <button
              className={`toggle-button ${selected === "Garçons" ? "active" : ""}`}
              onClick={() => setSelected("Garçons")}
            >
              Garçons
            </button>
            <button
              className={`toggle-button ${selected === "Filles" ? "active" : ""}`}
              onClick={() => setSelected("Filles")}
            >
              Filles
            </button>
          </div>
        </div>
        <div className="dormitory-list">
          {dormitoryData.map((dorm, index) => (
            <div key={index} className="dormitory-item">
              <span>{dorm.name}</span>
              <span>{dorm.count}</span>
            </div>
          ))}
        </div>
      </div>
    )
}

export default Dortoir

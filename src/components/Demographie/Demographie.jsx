import React from 'react'
import "./Demographie.css"
const Demographie = () => {
    const data = [
        { color: "#D2FF006B", icon: "fa-solid fa-users", iconColor : "#AACD06" ,count: "000", label: "Totales Séminaristes" },
        { color: "#48A4E5CC", icon: "fa-solid fa-user", iconColor : "#004576" , count: "000", label: "Séminaristes Masculins" },
        { color: "#FFE2E5", icon: "fa-solid fa-chart-simple", iconColor : "#FA5A7D" , count: "000", label: "Séminaristes Féminins" },
        { color: "#FFF4DE", icon: "fa-solid fa-file-lines",iconColor : "#FF947A" , count: "000", label: "Séminaristes Pépinières" },
      ];
    
      return (
        <div className="demography-container">
          <div className="demography-header">
            <h2>Démographie</h2>
            <button className="export-button">📤 Exporter</button>
          </div>
          <div className="demography-cards">
            {data.map((item, index) => (
              <div
                key={index}
                className="demography-card"
                style={{ backgroundColor: item.color }}
              >
                <div className="icon" style={{background : item.iconColor}}>
                    <i className={item.icon}></i>
                </div>
                <h3>{item.count}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Demographie

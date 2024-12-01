import React, { useState, useEffect } from 'react';
import './Aside.css';
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/ANNOUR LOGO 1.png"

const Aside = () => {
    const sidebarItems = [
        { class: 'fa-solid fa-chart-pie', text: 'Dashboard', root: "/" },
        { class: 'fa-solid fa-graduation-cap', text: 'Séminaristes', root: '/seminariste' },
        { class: 'fa-solid fa-chalkboard-user', text: 'Scientifique', root: "/scientifique" },
        { class: 'fa-solid fa-hospital', text: 'Santé', root: "/sante" },
        // Ajoutez d'autres éléments de la barre latérale ici
    ];

    const location = useLocation();
    const [activeItem, setActiveItem] = useState(location.pathname);



    useEffect(() => {
        setActiveItem(location.pathname);
    }, [location.pathname]);

    console.log(activeItem);

    return (
        <aside className='aside'>
            <div className='top-aside-logo'>
            <div className='container-logo-aside'>
            </div>
                <h3>An Nour, pour une spiritualité étincelante.</h3>
            </div>
            <div className='container-aside'>
                {sidebarItems.map((item, index) => (
                    <Link
                        className={`aside-item ${activeItem === item.root ? 'nav-active' : ''}`}
                        key={index}
                        to={item.root}
                        onClick={() => setActiveItem(item.root)}
                    >
                        <i className={item.class} ></i>
                        <span>{item.text}</span>
                    </Link>
                ))}
            </div>
        </aside>
    );
}

export default Aside;

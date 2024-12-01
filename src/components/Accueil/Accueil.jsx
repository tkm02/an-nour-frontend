import React from 'react'
import Demographie from '../Demographie/Demographie'
import './Accueil.css'
import Dortoir from '../Dortoir/Dortoir'
import EnregistrementRecents from '../EnregistrementRecents/EnregistrementRecents'
const Accueil = () => {
    const exampleData = [
        {
          matricule: "AN06-XXXX",
          name: "XXXXX XXXXXXX XXXXX",
          gender: "M",
          dormitory: "xxxxxxx",
          residence: "xxxxxxx",
          date: "20 Déc, 17:50",
        },
        {
          matricule: "AN06-XXXX",
          name: "XXXXX XXXXXXXXXX",
          gender: "F",
          dormitory: "xxxxxxx",
          residence: "xxxxxxx",
          date: "20 Déc, 17:46",
        },
        {
          matricule: "AN06-XXXX",
          name: "XXXX XXXXXXXXXX XXX",
          gender: "M",
          dormitory: "xxxxxxx",
          residence: "xxxxxxx",
          date: "20 Déc, 17:43",
        },
        {
          matricule: "AN06-XXXX",
          name: "XXXXXXXX XXXXXXXX",
          gender: "F",
          dormitory: "xxxxxxx",
          residence: "xxxxxxx",
          date: "20 Déc, 17:41",
        },
        {
          matricule: "AN06-XXXX",
          name: "XXXXX XXXXX X",
          gender: "M",
          dormitory: "xxxxxxx",
          residence: "xxxxxxx",
          date: "20 Déc, 17:40",
        },
      ];
      
    return (
        <div className='accueil-dashboard'>
            <div className='accueil-dashboard-row'>
                <Demographie />
                <Dortoir />
            </div>
            <EnregistrementRecents data={exampleData} />
        </div>
    )
}

export default Accueil

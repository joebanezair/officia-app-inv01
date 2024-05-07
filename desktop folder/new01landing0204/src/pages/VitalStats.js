import React from 'react';
import Navigation from './Navigation';
import jsontext from '../Global.json';

const VitalStats = () => {
  const textGlobal = [
    { id: 1, label: jsontext.Stats.Name, onClick: () => {}},
    { id: 2, label: 'Age: ' + jsontext.Stats.Age, onClick: () => {} },
    { id: 3, label: 'Birth: ' + jsontext.Stats.Birth, onClick: () => {} },
    { id: 4, label: 'Height: ' + jsontext.Stats.Height, onClick: () => {} },
    { id: 5, label: 'Hobby: ' + jsontext.Stats.Hobby, onClick: () => {} },
    { id: 6, label: 'Weight: ' + jsontext.Stats.Weight, onClick: () => {} },
  ];

  return (
    <>
      <Navigation />
      <div id='containStats'>
        <div id='profileStats' />
        <div id='stats-container'>
          {textGlobal.map((item, index) => (
            <div key={index}>
              {index === 0 ? <div style={{fontWeight: 'bold', color: 'white', 
              fontSize: 30, padding: 10, marginBottom:10}}>{item.label}</div> : <div id='containerstats01'>{item.label}</div>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VitalStats;

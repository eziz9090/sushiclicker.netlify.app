import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ProgressBar from './ProgressBar';
import Upgrades from './UpgradesBox';

function App() {
  const [count, setCount] = useState(3);
  const [HP, setHP] = useState(10);
  const [Level, setLevel] = useState(0);
  const [textColor, setColor] = useState('#11111')
  
  function randDarkColor() {
    var lum = -0.25;
    var hex = String('#' + Math.random().toString(16).slice(2, 8).toUpperCase()).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    var rgb = "#",
    c, i;
    for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
    rgb += ("00" + c).substr(c.length);
    }
    return rgb;
    }

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
    setHP(prevHP => prevHP - 0.5); // Increase HP when button is clicked
  };
  useEffect(() => {
    const randomColor = randDarkColor();
    document.documentElement.style.setProperty('--main-bg-color', randomColor);
  }, [Level]);
  

  
  // Determine text color based on count
  if (HP === 0){

    setHP(10);
    setLevel(Level+1);
    console.log(Level);
    setColor(`#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')}`)

  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
        </div>
        <div className="counter" style={{ color: textColor }}>
        
          <h1>{count}</h1>
          <ProgressBar HP={HP} Level={Level} />
          <div className='button-container'>
           <button onClick={handleClick} className="button" style={{ backgroundColor: textColor}} >
            click
            </button>
            
          </div>
          <h4>UPGRADES BOX </h4>

        </div>
        <div className='upgrades-container'> 


          
          <Upgrades/>



        </div>
      </header>
    </div>
  );
}

export default App;

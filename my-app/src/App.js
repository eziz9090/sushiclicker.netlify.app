import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ProgressBar from './ProgressBar';
import Upgrades from './UpgradesBox';
import Img1 from './Img1.png'
import Img2 from './Img2.png'
import Img3 from './Img3.png'
import Img4 from './Img4.png'
import Img5 from './Img5.png'

function App() {
  const [count, setCount] = useState(0);
  const [HP, setHP] = useState(10);
  const [Level, setLevel] = useState(0);
  const [textColor, setColor] = useState('#11111')
  const [Img, setImage] = useState(0)
  const [clickPosition, setClickPosition] = useState(null);
  const [showFlicker, setShowFlicker] = useState(false);
  const ClickerImage = [Img1,Img2,Img3,Img4,Img5];
  const [ClickingPowerUpgrade, setClickingPowerUpgrade] = useState(1);
  

  
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

  const handleClick = (event) => {
    setCount(prevCount => prevCount + ClickingPowerUpgrade);
    setHP(prevHP => prevHP - 0.5); // Increase HP when button is clicked
    const { clientX, clientY } = event;
    setClickPosition({ x: clientX, y: clientY });
    setShowFlicker(true);
    setTimeout(() => {
      setShowFlicker(false);
    }, 300);   
    
  };
  useEffect(() => {
    const randomColor = randDarkColor();
    document.documentElement.style.setProperty('--main-bg-color', randomColor);
    setImage(Img+1)
    if (Img === 4){
      setImage(0)
    };
  }, [Level]);
  
  const UpgradeClickingPower = () =>{setClickingPowerUpgrade(ClickingPowerUpgrade+5)};

 
  // Determine text color based on count
  if (HP === 0){
    
    setHP(10);
    setLevel(Level+1);
    console.log(Level);
    setColor(`#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')}`)
    // TODO : Add upgrades like "chopsticks" + 5 clicking power, try to make some kind of enlargening animation OnClick, some kind of level boost, and use cookies to save progress of USER 
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
            <img className='SushiImg' onClick={handleClick} src={ClickerImage[Img]}/>
          </div>
          {clickPosition && (
        <div
          className={showFlicker ? 'flicker' : ''}
          style={{
            position: 'absolute',
            left: clickPosition.x,
            top: clickPosition.y,
            transform: 'translate(-50%, -50%)',
            color: 'white',
            borderRadius: '5px',
            pointerEvents: 'none', 
            opacity : '0%',
          }}
        >
          +1
        </div>
      )}
          <h4>UPGRADES BOX </h4>

        </div>
        <div className='upgrades-container'> 


          
          <Upgrades Upgrade1={ClickingPowerUpgrade} setUpgrade1={setClickingPowerUpgrade}/>

        

        </div>
      </header>
    </div>
  );
}

export default App;

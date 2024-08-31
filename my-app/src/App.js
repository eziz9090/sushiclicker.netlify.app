import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import ProgressBar from './ProgressBar';
import Upgrades from './UpgradesBox';
import Img1 from './Img1.png';
import Img2 from './Img2.png';
import Img3 from './Img3.png';
import Img4 from './Img4.png';
import Img5 from './Img5.png';

function App() {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const [HP, setHP] = useState(10);
  const [Level, setLevel] = useState(0);
  const [textColor, setColor] = useState('#111111');
  const [Img, setImage] = useState(0);
  const [clickPosition, setClickPosition] = useState(null);
  const [showFlicker, setShowFlicker] = useState(false);
  const [ClickingPowerUpgrade, setClickingPowerUpgrade] = useState(0);
  const ClickerImage = [Img1, Img2, Img3, Img4, Img5];

  const handleClick2 = () => {
    setShow(prevShow => !prevShow); // Toggle visibility
  };

  const randDarkColor = () => {
    const lum = -0.25;
    let hex = String('#' + Math.random().toString(16).slice(2, 8).toUpperCase()).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    let rgb = "#";
    for (let i = 0; i < 3; i++) {
      let c = parseInt(hex.substr(i * 2, 2), 16);
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
      rgb += ("00" + c).substr(c.length);
    }
    return rgb;
  };

  const handleClick = (event) => {
    setCount(prevCount => prevCount + 1 + ClickingPowerUpgrade);
    setHP(prevHP => prevHP - 0.5);
    const { clientX, clientY } = event;
    setClickPosition({ x: clientX, y: clientY });
    setShowFlicker(true);
    setTimeout(() => setShowFlicker(false), 300);
  };

  useEffect(() => {
    const randomColor = randDarkColor();
    document.documentElement.style.setProperty('--main-bg-color', randomColor);
    setImage(prevImg => (prevImg + 1) % 5);
  }, [Level]);

  useEffect(() => {
    if (HP <= 0) {
      setHP(10);
      setLevel(prevLevel => prevLevel + 1);
      setColor(`#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')}`);
    }
  }, [HP]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="counter" style={{ color: textColor }}>
          <h1>{count}</h1>
          <ProgressBar HP={HP} Level={Level} />
          {show && (
            <Upgrades
              count={count}
              setUpgrade1={setClickingPowerUpgrade}
              Upgrade1={ClickingPowerUpgrade}
              show={show}
              setShow={setShow}
              handleClick2={handleClick2}
              setCount={setCount}
              Level={Level}
            />
          )}
          <div className='button-container'>
            <img className='SushiImg' onClick={handleClick} src={ClickerImage[Img]} alt="Clicker" />
            <button onClick={handleClick2} className='button'>Show Upgrades</button>
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
                opacity: '0%',
              }}
            >
              +{ClickingPowerUpgrade + 1}
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;

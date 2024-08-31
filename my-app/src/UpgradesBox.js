import { useEffect, useState } from "react";

function Upgrades({ Upgrade1, setUpgrade1, count, handleClick2, setCount, Level }) {
  const [costUpgrade, setCostUpgrade] = useState(45);
  const [costUpgrade2, setCostUpgrade2] = useState(500);
  const [autoClickerStatus, setAutoClickerStatus] = useState(false);
  

  const handleClick = () => {
    if (count >= costUpgrade) {
      setUpgrade1(prevUpgrade1 => prevUpgrade1 + 1);
      setCount(prevCount => prevCount - costUpgrade);
      console.log(costUpgrade);
    }
  };

  useEffect(() => {
    if (Level > 10) {
      setCostUpgrade(300);
    }
  }, [Level]);

  const handleClick3 = () => {
    if (count >= costUpgrade2) {
      setCount(prevCount1 => prevCount1 - costUpgrade2);
      console.log(costUpgrade2);
      setAutoClickerStatus(true); // Start the auto-clicker
     
    }
  };

  const autoClicker = () => {
    if (autoClickerStatus) {
      setCount(prevCount => prevCount + 1); // Increment count by 2
      setTimeout(autoClicker, 1000); // Repeat after 2 seconds
    }
  };

  useEffect(() => {
    if (autoClickerStatus) {
      autoClicker(); // Start auto-clicker when activated
    }
  }, [autoClickerStatus]);

  return (
    <div className='ShowUpgrades'>
      <span className="Upgrade-1">
        <div
          style={{
            width: "600px",
            transform: "scale(0.9)",
            margin: "auto",
          }}
        >
          <div
            style={{
              marginBottom: "10px",
              border: `10px solid black`,
              padding: "0px",
              marginTop: "20px",
              backgroundColor: "black",
            }}
            onClick={handleClick}
          >
            <p className="UpgradesText">
              Click Power +5
              <small>
                <small>
                  <small>
                    <small>
                      <small>per click</small>
                    </small>
                  </small>
                </small>
              </small>
              <br />
              LVL : {Upgrade1}
              <span style={{ fontSize: "30px", opacity: "30%" }}>
                <br />
                Price: {costUpgrade}
              </span>
            </p>
          </div>
          <div
            style={{
              marginBottom: "10px",
              border: `10px solid black`,
              padding: "0px",
              backgroundColor: "black",
            }}
            onClick={handleClick3}
          >
            <p className="UpgradesText">
              Auto Clicker +1
              
              <br /><small>
                <small>
                  <small>
                    <small>
                      <small>per second</small>
                    </small>
                  </small>
                </small>
              </small>
              
              <span style={{ fontSize: "30px", opacity: "30%" }}>
                <br />
                Price: {costUpgrade2}
              </span>
            </p>
          </div>

          <button className="button" onClick={handleClick2}>
            Hide Upgrades
          </button>
        </div>
      </span>
    </div>
  );
}

export default Upgrades;

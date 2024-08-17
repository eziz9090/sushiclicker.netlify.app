

function Upgrades({Upgrade1, setUpgrade1}) {
   

   const handleClick = () =>{setUpgrade1(Upgrade1+5)};
   
    
    return (
      <div className="upgrades">
        <span className="Upgrade-1"> <div
        style={{
        
        transform:"scale(1.3)",
        display: "table",
        justifycontent: "center",
       
        height: "15%",
        margin: "0 auto",
        padding:"60px",
      }}
        >
           <div
        style={{marginBottom: "10px", border: `5px solid black`,padding: "20px"}} onClick={handleClick}
           > <p className="UpgradesText"> Click Power +5 LVL :{Upgrade1}  </p> </div>
           <div
        style={{ marginBottom: "10px", border: `5px solid black`,padding: "20px"}}
           ><p className="UpgradesText"> Auto Clicker +1 LVL : </p></div>
           <div
        style={{border: `5px solid black`,padding: "20px"}}
           ><p className="UpgradesText"> Coming soon... </p></div>
         </div> </span>
            </div>
    );
  }
  


export default Upgrades;
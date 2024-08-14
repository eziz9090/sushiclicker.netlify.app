import React from 'react';

function ProgressBar({ HP, Level }) {
  return (
    <div className="progressbar-container">
      <div 
        className="progressbar" 
        style={{
          width: `${HP}em`,  
          height: '1em',    
          backgroundColor: 'green' 
        }}
      />
     <p>Level : {Level}</p> 
    </div>
  );
}

export default ProgressBar;

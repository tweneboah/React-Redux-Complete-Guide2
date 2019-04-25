import React from 'react';

const Cockpit = (props) => {
    const style = {
        backgroundColor: 'red',
        font: 'inherit',
        border: '2px solid blue',
        padding: '8px',
        marging: '10px',
        color: 'white',
        cursor: 'pointer'
      }
  
    return (
        <div>
          <h1>Hi react</h1>
       <p>This is really working</p>
       <button style={style}  onClick={props.toggleButton}>Toggle Name</button>
        </div>
    )
};

export default Cockpit;
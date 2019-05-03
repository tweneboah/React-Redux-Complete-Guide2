import React from 'react';
import { connect } from 'react-redux'


const Counter =(props) =>{
    return ( 
        <div>
            <h1>Am a counter</h1> 
            <p>The count is : {props.count}</p>
            <button onClick={props.onIncrementClick}>Increment</button>
        </div>
     );
}

const mapStateToProps = (statess) => {
    console.log('MapstateToProps', statess)
    return {
       count: statess.count  
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementClick: () => {
         console.log('Clicking')
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

import React from 'react'

const UserInput = (props) => {
    console.log('UserInput', props)
    return (
        <div> 
            <hr></hr>
            <h2>Enter your name</h2>
            <input type='text' onChange ={props.changeName}  value ={props.currentName}></input>
        </div>
    )
}

export default UserInput;
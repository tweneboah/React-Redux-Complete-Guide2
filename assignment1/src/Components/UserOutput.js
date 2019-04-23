import React from 'react';


const UserOutput = (props) =>{
    console.log(props)
   return (
       <div>
           <h4>CTI MEMBERS</h4>
           <p>This is how i solved it. The name of the developer is {props.developer}</p>

           <p>My last name is {props.username}</p>
       </div>
   )
}

export default UserOutput;
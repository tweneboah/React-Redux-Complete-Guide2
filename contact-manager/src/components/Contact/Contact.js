import React, {Component} from 'react';





class Contact extends Component {
  state = { 
    showContactInfo: false
   }
//DELE
onDeleteClick = () => {
  
this.props.deleteClickHandler();
}

  render() { 
      //Destructuring
     const {name, email, phone} = this.props.contact;
     const { showContactInfo} = this.state
    return ( 
      <div className='card card-body mb-3'>
          <h4>{this.props.branding}</h4>
           <h4>{name} <i style={{cursor:'pointer'}} onClick={()=>this.setState({
      showContactInfo: !this.state.showContactInfo
    })} className='fas fa-sort-down'/>
      
      <i className='fas fa-times' style={{cursor: 'pointer', float:'right', color:'red'}}
      onClick ={this.onDeleteClick}
      />
     </h4>

     {showContactInfo? ( <ul className='list-group'>
              <li className='list-group-item'>Email: {email}</li>
              <li className='list-group-item'>Phone: {phone}</li>
              
          </ul>): null}
    </div>
     );
  }
}
 

export default Contact;
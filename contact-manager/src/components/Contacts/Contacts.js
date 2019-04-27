import React, {Component}  from 'react'
import Contact from '../Contact/Contact'
import {Consumer} from '../../context/context'

class Contacts extends Component {

    deleteContact = (id) => {
        const newContacts = this.state.contacts.filter((contact) => {
            return contact.id !== id
        })
        //   newContacts.splice(index, 1)

        

          this.setState({
              contacts: newContacts
          })
    }

    render() {  
        const {contacts} = this.state
        return ( 
        <React.Fragment>
            {contacts.map((contact) => {
                return (
                   <Contact key={contact.id} contact = {contact} deleteClickHandler = {this.deleteContact.bind(this, contact.id)}/>
                )
            })}
            
        </React.Fragment>
         );
    }
}
 
export default Contacts;
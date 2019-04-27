import React, {Component} from 'react';
import Contacts from './components/Contacts/Contacts'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './context/context'

import './App.css';


class App extends Component {
  state = {  }
  render() { 
    return ( 
    <Provider>
        <div className='App'>
           <Header branding= 'CTI Contact Manager'/>
           <Contacts/>
           <Footer/>
        </div>
    </Provider>
      
     );
  }
}
 

export default App;

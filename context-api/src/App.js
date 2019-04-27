import React from 'react';
import UserCreate from './components/UserCreate'
import LanguageContext from './context/LanguageContext';




class App extends React.Component {

  state = {language: 'english'}

  onLanguageChange = (language) => {
    this.setState({
      language: language
    })
  } 
  render() { 
    return ( 
      <div className="ui container">
        <div>
      <h1>Select a language</h1>
        <i className='flag us' onClick ={ () => this.onLanguageChange('english')} />
        <i className='flag nl' onClick ={() => this.onLanguageChange('dutch')} />

        
        </div>
        <LanguageContext.Provider value={this.state.language}>
             <UserCreate/>
        </LanguageContext.Provider>
       {this.state.language}
    </div>
     );
  }
}
 
export default App;



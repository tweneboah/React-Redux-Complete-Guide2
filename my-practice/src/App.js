import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Tweneboa',
      message: 'Hi am Emma from Camp'
    }

    this.onChaneName = this.onChaneName.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeMessage = this.handleChangeMessage.bind(this)
  }

  onChaneName (e) {
    this.setState({
      [e.target.name]: e.target.value.toUpperCase()
    })
  }

  handleChangeMessage (e) {
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit (event) {
    
    console.log(`Name: ${this.state.name}`)
    event.preventDefault()
  }


  render() {

    return (
      <div className="App">
  
       <h1>State: {this.state.name}</h1> 
 

       <h2>Message: {this.state.message}</h2>


        <form onSubmit ={this.handleSubmit}>
          <input type='text'  onChange = {this.onChaneName}></input>
          <textarea onChange={this.handleChangeMessage}></textarea>
          <button type='submit' onClick ={this.handleSubmit}>Register</button>
        </form>
      </div>
    );
  }
}

export default App;

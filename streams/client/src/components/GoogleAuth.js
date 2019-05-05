import React, { Component } from 'react';
import { connect } from  'react-redux'
import {signIn, signOut} from '../actions'



class GoogleAuth extends Component {

    state = {
        isSignedIn: null
    }
    //Initialising Auth library
    //init gives a promise
    componentDidMount() {
       
        window.gapi.load('client:auth2', () =>{
            window.gapi.client.init({
               clientId: '561052394112-9nvkq9jaf7dfd3gl6151edpov323rofb.apps.googleusercontent.com',
               scope: 'email' //What you want to access
            }).then(() => {
               //we can figure out if a user is login or not
               this.auth = window.gapi.auth2.getAuthInstance();
               this.setState({isSignedIn: this.auth.isSignedIn.get()})
               this.auth.isSignedIn.listen(this.onAuthChange)
            });
        });
    }


 onAuthChange = (isSignedIn) => {
     if(isSignedIn){
         this.props.signIn()
     }else {
         this.props.signOut()
     }
 }

 //sign in
 onSignIn = () => {
    this.auth.signIn()
 }

 //sign Out
 onSignOut = () => {
   
   this.auth.signOut()
 }

   renderAuthButton () {
       if(this.state.isSignedIn === null) {
           return null
       }else {
           if(this.state.isSignedIn) {
               return(
                   <button onClick={this.onSignOut} className='ui red google button'>
                     <i className='google icon'/>
                      sign out
                   </button>
                );
           }

           return (
            <button onClick={this.onSignIn} className='ui red google button'>
            <i className='google icon'/>
             Sing in with Google
          </button>
           )
       }
   }

    render() { 
        return ( 
            <div>{this.renderAuthButton()}</div>
         );
    }
}
 
const mapStateToProps = (state) => {
    console.log(state)
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {signIn,signOut}) (GoogleAuth)

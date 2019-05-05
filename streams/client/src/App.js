import React from 'react';
import './App.css';
import {BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from  './components/streams/StreamCreate'
import StreamEdit from  './components/streams/StreamEdit'
import StreamShow from  './components/streams/StreamShow'
import StreamList from  './components/streams/StreamList'
import StreamDelete from  './components/streams/StreamDelete';
import Header from './components/Header'


function App() {
  return (
    <div>
     
     <BrowserRouter>
        <div>
          <Header/>
          <Route path ='/' exact component ={StreamList}/>
          <Route path ='/streams/new' exact component ={StreamCreate}/>
          <Route path ='/streams/edit' exact component ={StreamEdit}/>
          <Route path ='/streams/delete' exact component ={StreamDelete}/>
          <Route path ='/streams/show' exact component ={StreamShow}/>
        </div>
        </BrowserRouter>
    </div>
  );
}
// 
export default App;

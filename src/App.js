import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./home";
import Contact from "./contact";

function App() {
  return (
      <HashRouter>
        <div>
        <h1>Visual Node</h1>
            <ul className="header">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/contact" component={Contact}/>
            </div>
        </div>
      </HashRouter>
  );
}

export default App;

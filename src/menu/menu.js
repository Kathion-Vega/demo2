import React, {Component } from 'react';
import './navbar/navbar';
import './cartelera/cartelera';



import './menu.css';

export default class Menu extends Component {
    render () {
        return (
            <div className= "menu">
                <Navbar></Navbar>
                <Cartelera></Cartelera>
            </div>
            
        )
    }
}


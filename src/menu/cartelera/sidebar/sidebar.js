import React, { Component } from 'react';

import './slidebar.css';

export default class SlideBar extends Component {
    render () {
        return (
            <div className="sidebar">
                <a href="#animación">Animacion</a>
                <a href="#accion">Accion</a>
                <a href="#aventura">Aventura</a>
                <a href="#comica">Comica</a>
                <a href="#scifi">SciFi</a>
                <a href="#misterio">Misterio</a>
                <a href="#terror">Terror</a>
                <a href="#infantil">Infantil</a>
            </div>
        )
    }
}
import React, { Component } from 'react';
import './sidebar/sidebar';

import './cartelera.css';

export default class Cartelera extends Components {
    render () {
        return (
            <div className="cartelera">
                <div className="card">
                    <img 
                        src="https://vafloc02.s3.amazonaws.com/isyn/images/f251/img-1959251-m.jpg" 
                        alt="StarWars Authentic" />
                    <div className="label">
                        <p>Star Wars: A New Hope</p>
                    </div>
                </div>

                <div className="card">
                    <img 
                        src="https://vafloc02.s3.amazonaws.com/isyn/images/f251/img-1959251-m.jpg" 
                        alt="StarWars Authentic" />
                    <div className="label">
                        <p>Star Wars: A New Hope</p>
                    </div>
                </div>

                <div className="card">
                    <img 
                        src="https://vafloc02.s3.amazonaws.com/isyn/images/f251/img-1959251-m.jpg" 
                        alt="StarWars Authentic" />
                    <div className="label">
                        <p>Star Wars: A New Hope</p>
                    </div>
                </div>

                <div className="card">
                    <img 
                        src="https://vafloc02.s3.amazonaws.com/isyn/images/f251/img-1959251-m.jpg" 
                        alt="StarWars Authentic" />
                    <div className="label">
                        <p>Star Wars: A New Hope</p>
                    </div>
                </div>

                <div className="card">
                    <img 
                        src="https://vafloc02.s3.amazonaws.com/isyn/images/f251/img-1959251-m.jpg" 
                        alt="StarWars Authentic" />
                    <div className="label">
                        <p>Star Wars: A New Hope</p>
                    </div>
                </div>

                <div className="card">
                    <img 
                        src="https://vafloc02.s3.amazonaws.com/isyn/images/f251/img-1959251-m.jpg" 
                        alt="StarWars Authentic" />
                    <div className="label">
                        <p>Star Wars: A New Hope</p>
                    </div>
                </div>
            </div>
            
            <SideBar></SideBar>
            
            
            
        
        )
    }
}
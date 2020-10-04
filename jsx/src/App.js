import React from 'react';
import logo from './logo.svg';
import './App.css';
import video from'./myVideo.mp4';
import imaage from'./imageInSrc.jpg';
import image from './imageInPublic.jpg';


const App = () => {
return ( 
<div>
<div style = {{ border: 'solid 1px black', maxWidth: '100vw' }} >
    <h1 className = "title red" > Votre nom ici </h1> 
    <br/>
    <img src ={image}/>
    <br/>
    <img src = {imaage}/>
    </div> 
    <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4"/>
    </video>
    </div>
);
}

export default App;
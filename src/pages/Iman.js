import './style.css';
import React from "react";
import Header from './Header'
import ImansCard from './Iman_Card'
import ErfansCard from './Erfan_Card'
import AlirezasCard from './Alireza_Card'


export default function Iman() {
  // js here :)
  return (
    // html here
    <div className="body">
      <Header />
      <AlirezasCard />
      {/*
      <div className="card">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" />
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img className="avatar" src="/images/hashem.jpg" alt="A picture of seyyed alireza hashemi, smiling at camera." />
            </div>
            <div className="flip-box-back">
              <p>Rasta's CTO!</p>
            </div>
          </div>
        </div>
        <div>
          <h3>Seyyed Alireza Hashemi</h3>
          <p>CE student at SUT</p>
          <h4>Tehran, Iran</h4>
          <p>Future masters software engineering student from Esfahan</p>
          <div className="link-container">
            <a href="" target="_blank"><i className="lin fab fa-linkedin"></i></a>
            <a href="" target="_blank"><i className="lin fab fa-github"></i></a>
            <a href="" target="_blank"><i className="lin fab fa-google" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
       */}
      <ErfansCard />
      {/*
  <div className="card">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" />
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img className="avatar" src="/images/erfan.jpg" alt="Picture of erfan moeini laying on ground at his bag and smiling aat camera viciously!" />
            </div>
            <div className="flip-box-back">
              <p>I won Gold medal in iran's Math Olympiads =D</p>
            </div>
          </div>
        </div>
        <div>
          <h3>Erfan Moeini</h3>
          <p>CE/Math student at SUT</p>
          <h4>Tehran, Iran</h4>
          <p>I'm interested in AI and ML and also hardware! I currently work at a hardware designing company.</p>
          <div className="link-container">
            <a href="" target="_blank"><i className="lin fab fa-linkedin"></i></a>
            <a href="" target="_blank"><i className="lin fab fa-github"></i></a>
            <a href="" target="_blank"><i className="lin fab fa-google" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    */}
      <ImansCard id="imans-card"/>
      {/*
      <div className="card">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" />
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img className="avatar" src="/images/Iman.jpg" alt="Picture of Iman Alipour taken at 2018" />
            </div>
            <div className="flip-box-back">
              <p>Hello! :D I'm trying to enjoy my summer internship as much as possible! I guess I just love learning new things everyday.</p>
            </div>
          </div>
        </div>
        <div>
          <h3>Iman Alipour</h3>
          <p>CE student at SUT</p>
          <h4>Tehran, Iran</h4>
          <p>Currently learning front-end developement at Rasta corp</p>
          <div className="link-container">
            <a href="https://www.linkedin.com/in/iman-alipour-b9234723a" target="_blank"><i className="lin fab fa-linkedin"></i></a>
            <a href="https://github.com/AlipourIm" target="_blank"><i className="lin fab fa-github"></i></a>
            <a href="https://iman.alip2001@gmail.com" target="_blank"><i className="lin fab fa-google" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
  */}
    </div>


  );
}

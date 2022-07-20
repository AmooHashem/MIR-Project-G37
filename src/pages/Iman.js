import './style.css';
import React from "react";

export default function Iman() {
  // js here :)
  return (
    // html here
    <div className="body">
      <div className="container">
        <button className="btn"><a className="link-btn" href="/hw3">HW3 Page</a></button>
        <button className="btn"><a className="link-btn" href="/hw4">HW4 Page</a></button>
        <button className="btn"><a className="link-btn" href="/elastic-search">Elastic Search</a></button>
        <button className="btn"><a className="link-btn" href="/">Home Page</a></button>
      </div>
      <div className="card">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" />
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img className="avatar" src="/images/per.png" alt="" />
            </div>
            <div className="flip-box-back">
              <p>Rasta CTO!</p>
            </div>
          </div>
        </div>
        <div>
          <h3>Seyyed Alireza Hashemi</h3>
          <p>CE student at SUT</p>
          <h4>Tehran, Iran</h4>
          <p>sth.....</p>
          <div className="link-container">
            <a href="" target="_blank"><i className="lin fab fa-linkedin"></i></a>
            <a href="" target="_blank"><i className="lin fab fa-github"></i></a>
            <a href="" target="_blank"><i className="lin fab fa-google" aria-hidden="true"></i></a>
          </div>
        </div>
      </div><div className="card">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" />
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img className="avatar" src="/images/per.png" alt="" />
            </div>
            <div className="flip-box-back">
              <p>I'm tooooooo cool</p>
            </div>
          </div>
        </div>
        <div>
          <h3>Erfan Moeini</h3>
          <p>CE student at SUT</p>
          <h4>Tehran, Iran</h4>
          <p>sth....</p>
          <div className="link-container">
            <a href="" target="_blank"><i className="lin fab fa-linkedin"></i></a>
            <a href="" target="_blank"><i className="lin fab fa-github"></i></a>
            <a href="" target="_blank"><i className="lin fab fa-google" aria-hidden="true"></i></a>
          </div>
        </div>
      </div><div className="card">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" />
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img className="avatar" src="/images/Iman.jpg" alt="Picture of Iman Alipour taken at 2018" />
            </div>
            <div className="flip-box-back">
              <p>Hello! :D</p>
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
    </div>


  );
}

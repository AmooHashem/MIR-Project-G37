import './style.css';
import React from "react";
import Header from './Header'
import Card from '../components/Card'


export default function Iman() {
  const alireza = {
    header: {
      img: "./images/hashem.jpg",
      name: "Alireza Hashemi",
      occupation: "CE student at SUT",
      site_address: "",
      site: "",
      email: "amoo.hashem.mehraban@gmail.com",
      linkdin: "seyed-alireza-hashemi-3611481a2",
      about: "CE student at SUT and I'm Rasta's CTO. I'm getting my Bachelor's degree in the current semester and will attned Masters in Software engineering next semester.",
      interests: "Software engineering, Web developement, ...",
    },
    footer: {
      twitter: "",
      facebook: "",
      instagram: "",
      github: "AmooHashem"
    }
  }
  const erfan = {
    header: {
      img: "./images/erfan.jpg",
      name: "Erfan Moeini",
      occupation: "CE student at STU",
      site_address: "",
      site: "",
      email: "moeini.erfan@gmail.com",
      linkdin: "erfan-moeini-573936178",
      about: "CE and Math student at Sharif University of Technology, I'm interested in AI and ML and also hardware! I currently work at a hardware designing company.",
      interests: "Hardware, AI, ML",
    },
    footer: {
      twitter: "",
      facebook: "",
      instagram: "",
      github: "erfanmotnt"
    }
  }
  const iman = {
    header: {
      img: "./images/Iman.jpg",
      name: "Iman Alipour",
      occupation: "CE student at SUT",
      site_address: "https://alipourim.github.io/my-website/",
      site: "ImanAlipour.website",
      email: "iman.alip2001@gmail.com",
      linkdin: "iman-alipour-b9234723a/",
      about: "CE student at Sharif University of Technology, I'm also getting my minors in Economics at Sharif University of Technology too. I'm a 21 year old tech enthusiast currently enrolled in Computer Engineering B.S.c at Sharif University of Technology interested in Data science, Artificial Intelligence, machine learning, computer vision, math and specifically geometry, Currently trying to get more hands-on, real-world experience rather than just academic topics and challenges. Always eager for learning new, interesting topics and expanding my knowledge. I try to be hardworking and also persistent with all the challenges I face.",
      interests: "Data Science, AI, ML, NLP, Computer vision, BCI, IoT ,Cloud computing",
    },
    footer: {
      twitter: "",
      facebook: "",
      instagram: "",
      github: "AlipourIm"
    }
  }
  
  // js here :)
  return (
    // html here
    <div className="body">
      <Header />
      <Card
        {
        ...alireza
        }
      />
      <Card
        {
        ...erfan
        }
      />
      <Card
        {
        ...iman
        }
      />
    </div>


  );
}


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

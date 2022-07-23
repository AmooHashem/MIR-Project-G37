import React from 'react'


export default function Body() {
    return (
        <>
            <img id="user-img" src="./images/erfan.jpg" />
            <div id="body-container">
                <div id="card-body-div">
                    <div className="space-box"></div>
                    <h2 id="name-h2">Erfan Moeini</h2>
                    <h4 id="occupation-h4">CE student</h4>
                    <div className="container5">
                        <button id="mail-btn" className="btn-container">
                            <a target="_blank" href="mailto:https://moeini.erfan@gmail.com"><i className="icon fa-solid fa-envelope"></i></a>
                            <a target="_blank" className="a-website-link" href="mailto:https://moeini.erfan@gmail.com"><p id="mail-a" className="btn-p">Email</p></a>
                        </button>

                        <button id="linkdin-btn" className="btn-container">
                            <a target="_blank" href="https://www.linkedin.com/in/erfan-moeini-573936178"><i className="icon fa-brands fa-linkedin"></i></a>
                            <a target="_blank" className="a-website-link" href="https://www.linkedin.com/in/erfan-moeini-573936178/"><p className="btn-p">LinkedIn</p></a>
                        </button>
                    </div>
                    <h3 className="body-h3-1">About</h3>
                    <p className="body-p-1">CE and Math student at Sharif University of Technology, I'm interested in AI and ML and also hardware! I currently work at a hardware designing company.</p>
                    <h3 className="body-h3-1">Interests</h3>
                    <p className="body-p-1">Hardware, AI, ML</p>
                    <div className="space-box"></div>
                </div>
            </div>
        </>
    )
}
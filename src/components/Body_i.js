import React from 'react'


export default function Body() {
    return (
        <>
            <img id="user-img" src="./images/Iman.jpg" />
            <div id="body-container">
                <div id="card-body-div">
                    <div className="space-box"></div>
                    <h2 id="name-h2">Iman Alipour</h2>
                    <h4 id="occupation-h4">Frontend Developer</h4>
                    <a className="a-website-link" href="https://alipourim.github.io/my-website/" terget="_blank"><p id="website-lin" >ImanAlipour.website</p></a>
                    <div className="container5">
                        <button id="mail-btn" className="btn-container">
                            <a target="_blank" href="mailto:https://iman.alip2001@gmail.com"><i className="icon fa-solid fa-envelope"></i></a>
                            <a target="_blank" className="a-website-link" href="mailto:https://iman.alip2001@gmail.com"><p id="mail-a" className="btn-p">Email</p></a>
                        </button>

                        <button id="linkdin-btn" className="btn-container">
                            <a target="_blank" href="https://www.linkedin.com/in/iman-alipour-b9234723a/"><i className="icon fa-brands fa-linkedin"></i></a>
                            <a target="_blank" className="a-website-link" href="https://www.linkedin.com/in/iman-alipour-b9234723a/"><p className="btn-p">LinkedIn</p></a>
                        </button>
                    </div>
                    <h3 className="body-h3-1">About</h3>
                    <p className="body-p-1">CE student at Sharif University of Technology, I'm also getting my minors in Economics at Sharif University of Technology too. I'm a 21 year old tech enthusiast currently enrolled in Computer Engineering B.S.c at Sharif University of Technology interested in Data science, Artificial Intelligence, machine learning, computer vision, math and specifically geometry, Currently trying to get more hands-on, real-world experience rather than just academic topics and challenges. Always eager for learning new, interesting topics and expanding my knowledge. I try to be hardworking and also persistent with all the challenges I face.</p>
                    <h3 className="body-h3-1">Interests</h3>
                    <p className="body-p-1">Data Science, AI, ML, NLP, Computer vision, BCI, IoT ,Cloud computing</p>
                    <div className="space-box"></div>
                </div>
            </div>
        </>
    )
}
import React from 'react'


export default function Body() {
    return (
        <>
            <img id="user-img" src="./images/hashem.jpg" />
            <div id="body-container">
                <div id="card-body-div">
                    <div className="space-box"></div>
                    <h2 id="name-h2">Alireza Hashemi</h2>
                    <h4 id="occupation-h4">CE student at SUT</h4>
                    <div className="container5">
                        <button id="mail-btn" className="btn-container">
                            <a target="_blank" href="mailto:https://amoo.hashem.mehraban@gmail.com"><i className="icon fa-solid fa-envelope"></i></a>
                            <a target="_blank" className="a-website-link" href="mailto:https://amoo.hashem.mehraban@gmail.com"><p id="mail-a" className="btn-p">Email</p></a>
                        </button>

                        <button id="linkdin-btn" className="btn-container">
                            <a target="_blank" href="https://www.linkedin.com/in/seyed-alireza-hashemi-3611481a2"><i className="icon fa-brands fa-linkedin"></i></a>
                            <a target="_blank" className="a-website-link" href="https://www.linkedin.com/in/seyed-alireza-hashemi-3611481a2/"><p className="btn-p">LinkedIn</p></a>
                        </button>
                    </div>
                    <h3 className="body-h3-1">About</h3>
                    <p className="body-p-1">CE student at SUT and I'm Rasta's CTO. I'm getting my Bachelor's degree in the current semester and will attned Masters in Software engineering next semester.</p>
                    <h3 className="body-h3-1">Interests</h3>
                    <p className="body-p-1">Software engineering, Web developement, ...</p>
                    <div className="space-box"></div>
                </div>
            </div>
        </>
    )
}
import React from 'react'


export default function Body(props) {
    return (
        <>
            <img id="user-img" src={props.img} />
            <div id="body-container">
                <div id="card-body-div">
                    <div className="space-box"></div>
                    <h2 id="name-h2">{props.name}</h2>
                    <h4 id="occupation-h4">{props.occupation}</h4>
                    <a className="a-website-link" href={props.site_address} target="_blank"><p id="website-lin" >{props.site}</p></a>
                    <div className="container5">
                        <button id="mail-btn" className="btn-container">
                            <a target="_blank" href={"mailto:" + props.email}><i className="icon fa-solid fa-envelope"></i></a>
                            <a target="_blank" className="a-website-link" href={"mailto:" + props.email}><p id="mail-a" className="btn-p">Email</p></a>
                        </button>

                        <button id="linkdin-btn" className="btn-container">
                            <a target="_blank" href={"https://www.linkedin.com/in/" + props.linkdin}><i className="icon fa-brands fa-linkedin"></i></a>
                            <a target="_blank" className="a-website-link" href={"https://www.linkedin.com/in/" + props.linkdin}><p className="btn-p">LinkedIn</p></a>
                        </button>
                    </div>
                    <h3 className="body-h3-1">About</h3>
                    <p className="body-p-1">{props.about}</p>
                    <h3 className="body-h3-1">Interests</h3>
                    <p className="body-p-1">{props.interests}</p>
                    <div className="space-box"></div>
                </div>
            </div>
        </>
    )
}
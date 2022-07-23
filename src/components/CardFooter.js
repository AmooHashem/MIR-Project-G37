import React from 'react'


export default function Footer(props){
    return(
        <div className="icon-container">
            <a className="a-link-img" href={"https://www.twitter.com/" + props.twitter} target="_blank"><img className="link-img" src="./images/Twitter-Icon.png"/></a>
            <a className="a-link-img" href={"https://www.facebook.com/" + props.facebook} target="_blank"><img className="link-img" src="./images/Facebook-Icon.png"/></a>
            <a className="a-link-img" href={"https://www.instagram.com/" + props.instagram} target="_blank"><img className="link-img" src="./images/Instagram-Icon.png"/></a>
            <a className="a-link-img" href={"https://github.com/" + props.github} target="_blank"><img className="link-img" src="./images/GitHub-Icon.png"/></a>
        </div>
    )
}
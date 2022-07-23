import React, { useState } from "react";
import './style.css';
import './style2.css';

export default function Header() {
    return (
        <div className="container">
                <button className="btn"><a className="link-btn" href="/elastic-search">Elastic Search</a></button>
                <button className="btn"><a className="link-btn" href="/hw5">HW5 Page</a></button>
                <button className="btn"><a className="link-btn" href="/hw4">HW4 Page</a></button>
                <button className="btn"><a className="link-btn" href="/hw3">HW3 Page</a></button>
                <button className="btn"><a className="link-btn" href="/">Home Page</a></button>
        </div>
    )
}
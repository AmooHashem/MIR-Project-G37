import React from 'react'
import './style-dark.css';

import Body from './CardBody'
import Footer from './CardFooter'


export default function Card(props){
    const {header, footer} = props
    return(
        <div id="background-div">
            <Body 
                {...header}
            />
            <Footer 
                {...footer}
            />
        </div>
    )
}

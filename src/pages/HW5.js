import './style.css';
import React, { useState } from "react";
import { DOMAIN } from './../config/consts'
import Header from './Header'


export default function HW5() {
    const [answers, setAnswers] = useState([]);
    const [type, setType] = useState('hits');
    const [query, setQuery] = useState('');
    const [queryExp, setQueryExp] = useState(false);

    async function hw5_query() {

        await fetch(`${DOMAIN}${type}/`, {
            method: "POST",
            body: JSON.stringify({ query: query, queryExp: queryExp, type: type, mode: 'no-cors' }),
        })
            .then((response) => response.json())
            .then((data) => {
                setAnswers(data.answers)
            })
            .catch(e => console.log(e));
    }
    // js here :)
    return (
        // html here

        <div className="body">
            <Header />
            <div className="box2">
                <h1 className="head2">Implementiation of</h1>
                <h1 className="head2" id="rnd-pass2">HITS/Page-Rank</h1>
                <h1 className="head2" id="head-box2">Algorithms</h1>
                <p className="txt2">For more information about implementation and performance metrics, please click <a className="anchor_text" target="_blank" href='https://colab.research.google.com/drive/1XrguSYDSFZq5KxKObEoXL-gxtMqHtsav?usp=sharing'>here</a>!</p>

                <div className="container2">
                    <select id="model-selector" className="box3" name="model-name" value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="hits">HITS</option>
                        <option value="page_rank">Page-Rank</option>
                    </select>
                    <button id="query-btn2" onClick={() => hw5_query()} className="btn2">Show Results</button>
                </div>
                <div className="line2"></div>
                <div className="container4">
                    <div className="pass-box2">
                        {
                            answers.map((answer, i) => (
                                <p id="pass1-el2" key={i} className="pass-txt2">{answer}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
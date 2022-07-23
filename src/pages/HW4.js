import './style.css';
import React, { useState } from "react";
import { DOMAIN } from './../config/consts'
import Header from './Header'


export default function HW4() {
    const [answers, setAnswers] = useState([]);
    const [type, setType] = useState('classification');
    const [query, setQuery] = useState('');
    const [queryExp, setQueryExp] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(false);

    async function hw4_query() {
        setBtnDisabled(true)

        await fetch(`${DOMAIN}${type}/`, {
            method: "POST",
            body: JSON.stringify({ query: query, queryExp: queryExp, type: type, mode: 'no-cors' }),
        })
        .then((response) => response.json())
        .then((data) => {
            setAnswers(data.answers)
        })
        .catch(e => console.log(e));
        
        setBtnDisabled(false)
        }
    // js here :)
    return (
        // html here

        <div className="body">
            <Header />
            <div className="box2">
                <h1 className="head2">Search for query's</h1>
                <h1 className="head2" id="rnd-pass2">Classification/Clustering</h1>
                <p className="txt2">For more information about implementation and performance metrics, please click <a className="anchor_text" target="_blank" href='https://colab.research.google.com/drive/19QEEKRS3TUFagjWWHi03bGxkge_RhKuq?usp=sharing'>here</a>!</p>

                <div className="container2">
                    <select id="model-selector" className="box3" name="model-name" value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="classification">Classification</option>
                        <option value="clustering">Clustering</option>
                    </select>
                    <button disabled={btnDisabled} id="query-btn2" onClick={() => hw4_query()} className={`${btnDisabled ? "btn2-disabled":"btn2"}`}>Show Results</button>
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
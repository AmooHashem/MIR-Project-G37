import './style.css';
import React, { useState } from "react";
import { DOMAIN } from './../config/consts'

export default function HW4() {
    const [answers, setAnswers] = useState([]);
    const [type, setType] = useState('boolean');
    const [query, setQuery] = useState('');
    const [queryExp, setQueryExp] = useState(false);

    async function hw4_query() {

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
            <div className="container">
                <button className="btn"><a className="link-btn" href="/hw3">HW3 Page</a></button>
                <button className="btn"><a className="link-btn" href="/hw4">HW4 Page</a></button>
                <button className="btn"><a className="link-btn" href="/elastic-search">Elastic Search</a></button>
                <button className="btn"><a className="link-btn" href="/">Home Page</a></button>
            </div>
            <div className="box2">
                <h1 className="head2">Search for query's</h1>
                <h1 className="head2" id="rnd-pass2">Classification/Clustering</h1>
                <p className="txt2">For more information about implementation and performance metrics, please click <a className="anchor_text" target="_blank" href='https://colab.research.google.com/drive/19QEEKRS3TUFagjWWHi03bGxkge_RhKuq?usp=sharing'>here</a>!</p>

                <div className="container2">
                    <input id="txt-box2" type="text" name="pass-length"
                        placeholder="type something you like to search" value={query} onChange={(e) => setQuery(e.target.value)} />
                    <div>
                        <label className='head2' id="query-exp-id" htmlFor="query-expantion"><input type="checkbox" id="query-expantion" name="query-expantion" value={queryExp} onChange={(e) => setQueryExp(e.target.checked)} />Query Expantion</label>
                    </div>
                    <div className='container3'>
                        <select id="model-selector" className="box3" name="model-name" value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="classification">Classification</option>
                            <option value="clustering">Clustering</option>
                        </select>
                        <button id="query-btn2" onClick={() => hw4_query()} className="btn2">Search</button>
                    </div>
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
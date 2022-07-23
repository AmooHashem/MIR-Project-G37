import './style.css';
import './style2.css';
import React, { useState } from "react";
import { DOMAIN } from './../config/consts'
import Header from './Header'

export default function HW3() {
    const [answers, setAnswers] = useState([]);
    const [type, setType] = useState('boolean');
    const [query, setQuery] = useState('');
    const [queryExp, setQueryExp] = useState(false);

    async function hw3_query() {

        await fetch(`${DOMAIN}${type}/`, {
            method: "POST",
            body: JSON.stringify({query: query, queryExp: queryExp, type: type, mode: 'no-cors'}),
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
                <h1 className="head2">Search with</h1>
                <h1 className="head2" id="rnd-pass2">Boolean/Tf-idf/Transformer/fastText</h1>
                <p className="txt2">For more information about implementation and performance metrics, please click <a className="anchor_text" target="_blank" href='https://colab.research.google.com/drive/1dbcWMQQOySE0VGmdE7ZAV_xaU7DoEiWX?usp=sharing'>here</a>!</p>

                <div className="container2">
                    <input id="txt-box2" type="text" name="pass-length"
                        placeholder="type something you like to search" value={query} onChange={(e) => setQuery(e.target.value)} />
                    <div>

                        <label className='head2' id="query-exp-id" htmlFor="query-expantion"><input type="checkbox" id="query-expantion" name="query-expantion" value={queryExp} onChange={(e) => setQueryExp(e.target.checked)} />Query Expantion</label>
                    </div>
                    <div className='container3'>
                        <select id="model-selector" className="box3" name="model-name" value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="boolean">Boolean</option>
                            <option value="tf-idf">Tf-idf</option>
                            <option value="transformer">Transformer</option>
                            <option value="fast-text">FastText</option>
                        </select>
                        <button id="query-btn2" onClick={() => hw3_query()} className="btn2">Search</button>
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
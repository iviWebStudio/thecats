/**
 * The not found component.
 * @since 0.1.0
 */

import React, {useEffect, useState} from "react";
import {fetchRandomQuote} from "../../api/api";

/**
 * Not found component.
 *
 * @return {JSX.Element}
 * @constructor
 */
const NotFount = () => {
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        fetchRandomQuote().then(res => {
            if (res.data && res.data.content) {
                setQuote(res.data);
            }
        })
            .catch(err => {
                setQuote({
                    author: 'Unknown poet',
                    content: 'Keep calm',
                });
            })

    }, [])

    return (
        <div className="container">
            <h2>There is 404</h2>

            {quote && <blockquote>
                <p>{quote.content}</p>
                <small>{quote.author}</small>
            </blockquote>}
        </div>
    )
}

export default NotFount;
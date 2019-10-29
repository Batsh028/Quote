import React from 'react';

function DisplayQuote ({ quote }) {
    return (
        <div className="DisplayQuote">
            <img
                src={quote.image}
                alt={quote.character}
            />
                <p>quote: {quote.quote}</p>
        </div>
    );
};

export default DisplayQuote;
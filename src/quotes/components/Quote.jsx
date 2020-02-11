import React from 'react';
import QuoteReader from './QuoteReader';

function Quote({ author, text }) {
  return (
    <>
      <h5>{author}</h5>
      <p>{text}</p>
      <QuoteReader text={text} />
    </>
  );
}

export default Quote;

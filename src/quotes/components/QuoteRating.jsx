import React from 'react';
import { useDispatch } from 'react-redux';

import Quote from './Quote';
import RatingButtons from './RatingButtons';
import { rateQuote } from '../../state/history';

function QuoteRating({ onClick, quote }) {
  const dispatch = useDispatch();

  const _rateQuote = e => {
    const rate = e.target.id;
    dispatch(rateQuote({ ...quote, rate, ratedAt: new Date() }));
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className='card p-3 mt-3'>
      <div className='row'>
        <div className='col-12 col-md-8'>
          <Quote {...quote} />
        </div>
        <div className='col-12 col-md-4'>
          <RatingButtons selectedRate={quote.rate} onClick={_rateQuote} />
        </div>
      </div>
    </div>
  );
}

export default QuoteRating;

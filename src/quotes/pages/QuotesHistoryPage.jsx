import React from 'react';
import { useSelector } from 'react-redux';
import { getQuotesForIp } from '../../state/history/selectors';
import QuoteRating from '../components/QuoteRating';

function QuotesHistoryPage(props) {
  const quotes = useSelector(state => getQuotesForIp(state.history));

  let pageContent;
  if (quotes.length === 0) {
    pageContent = <p className='alert alert-warning'>No History yet!</p>;
  } else {
    pageContent = quotes.map(quote => (
      <QuoteRating quote={quote} key={quote.id} />
    ));
  }

  return <div className='container mt-4'>{pageContent}</div>;
}

export default QuotesHistoryPage;

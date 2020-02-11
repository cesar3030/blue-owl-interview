import React, { Component } from 'react';

import { fetchQuotes } from '../../shared/services/quote.service';
import QuoteRating from '../components/QuoteRating';

class QuoteRatingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      currentQuoteIdx: -1
    };
  }

  componentDidMount() {
    this._fetchQuotes();
  }

  _handleRating = e => {
    this._moveToNextQuote();
  };

  render() {
    const { quotes, currentQuoteIdx } = this.state;
    if (currentQuoteIdx < 0) {
      return <p className='alert alert-dark'>No quotes</p>;
    }
    return (
      <QuoteRating
        quote={quotes[currentQuoteIdx]}
        onClick={this._handleRating}
      />
    );
  }

  _moveToNextQuote() {
    const { quotes, currentQuoteIdx } = this.state;

    if (currentQuoteIdx === quotes.length - 1) {
      this._fetchQuotes();
    } else {
      this.setState({ currentQuoteIdx: currentQuoteIdx + 1 });
    }
  }

  async _fetchQuotes() {
    const { quotes, currentQuoteIdx } = this.state;
    const newQuotes = await fetchQuotes();
    this.setState({
      quotes: [...quotes, ...newQuotes],
      currentQuoteIdx: currentQuoteIdx + 1
    });
  }
}

export default QuoteRatingContainer;

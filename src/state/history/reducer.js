import { HISTORY_ADD_RATE } from './types';
import { getQuotesForIp } from './selectors';
/**
 * {
 *  0.0.0.0 : [quotes],
 *  0.0.0.1 : [quotes],
 *  ...
 * }
 */
const initState = {};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case HISTORY_ADD_RATE:
      const { quote, ip } = action.payload;
      let quotes = getQuotesForIp(state, ip);
      // Update existing quote rating
      quotes = quotes.filter(q => q.id !== quote.id);

      return { ...state, [ip]: [...quotes, quote] };
    default:
      return state;
  }
};

export default reducer;

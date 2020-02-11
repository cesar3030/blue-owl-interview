import store from '../store';
import { HISTORY_ADD_RATE } from './types';

export const rateQuote = quote => ({
  type: HISTORY_ADD_RATE,
  payload: { quote, ip: store.getState().location.ip || 'local' }
});

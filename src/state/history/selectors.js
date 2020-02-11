import store from '../store';

export const getQuotesForIp = (history = {}, ip) => {
  if (!ip) {
    ip = store.getState().location.ip || 'local';
  }
  return history[ip] || [];
};

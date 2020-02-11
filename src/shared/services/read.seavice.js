export const getReadingUrl = text => {
  return `http://api.voicerss.org/?key=${
    process.env.REACT_APP_VOICE_RSS_ACCESS_TOKEN
  }&src=${encodeURI(text)}&hl=en-us&f=ulaw_11khz_stereo`;
};

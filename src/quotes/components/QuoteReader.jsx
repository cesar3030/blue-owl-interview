import React from 'react';
import { getReadingUrl } from '../../shared/services/read.seavice';

function QuoteReader({ text }) {
  const _playAudio = () => {
    const audio = document.getElementById('audio');
    audio.play();
  };
  const url = getReadingUrl(text);
  return (
    <>
      <i className='fa fa-volume-up' onClick={_playAudio}></i>
      <audio id='audio' src={url}></audio>
    </>
  );
}

export default QuoteReader;

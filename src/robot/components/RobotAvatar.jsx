import React from 'react';

function RobotAvatar({ ip = '104.236.21.134' }) {
  return (
    <img
      className='img-fluid'
      alt='robot avatar'
      src={`https://robohash.org/${ip}.png`}
    />
  );
}

export default RobotAvatar;

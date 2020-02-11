import React from 'react';

function RobotDescription({ city = 'San Francisco' }) {
  return (
    <p className='alert alert-info'>
      I was built in {city} to find quotes for you. rate each quote and I will
      try to find even better ones
    </p>
  );
}

export default RobotDescription;

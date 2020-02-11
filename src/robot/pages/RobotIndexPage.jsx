import React from 'react';
import RobotAvatar from '../components/RobotAvatar';
import RobotDescription from '../components/RobotDescription';
import { useSelector } from 'react-redux';
import RobotLocation from '../components/RobotLocation';

function RobotIndexPage(props) {
  const { ip, city, longitude, latitude } = useSelector(
    state => state.location
  );
  const avatar = <RobotAvatar ip={ip} />;
  return (
    <>
      <div className='container'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-4 justify-content-center d-flex'>{avatar}</div>
          <div className='col-12 col-md-6'>
            <RobotDescription city={city} />
          </div>
        </div>
      </div>
      <RobotLocation
        avatar={avatar}
        longitude={longitude}
        latitude={latitude}
      />
    </>
  );
}

export default RobotIndexPage;

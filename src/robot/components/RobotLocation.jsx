import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

const markerContainerStyle = {
  width: '50px',
  height: '50px'
};

function RobotLocation(props) {
  const [viewport, setViewport] = useState({
    zoom: 13
  });

  return (
    <ReactMapGL
      {...props}
      {...viewport}
      width='100vw'
      height='70vh'
      onViewportChange={setViewport}
    >
      <Marker {...props}>
        <div style={markerContainerStyle}>{props.avatar}</div>
      </Marker>
    </ReactMapGL>
  );
}

export default RobotLocation;

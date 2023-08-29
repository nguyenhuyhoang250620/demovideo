import React from 'react';

const BoundingBoxDiv = ({ x, y, width, height, scale }) => {
  const scaledX = x * scale;
  const scaledY = y * scale;
  const scaledWidth = width * scale;
  const scaledHeight = height * scale;

  const divStyle = {
    width: `${scaledWidth}px`,
    height: `${scaledHeight}px`,
    position: 'absolute',
    left: `${scaledX+750}px`,
    top: `${scaledY+200}px`,
    border: '2px solid red'
  };

  return <div style={divStyle}></div>;
};

export default BoundingBoxDiv;
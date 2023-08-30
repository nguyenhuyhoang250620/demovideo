import React from 'react';

const BoundingBoxDiv = ({ x, y, width, height, scale,top,left,title }) => {
  const scaledX = x * scale;
  const scaledY = y * scale;
  const scaledWidth = width * scale;
  const scaledHeight = height * scale;

  const divStyle = {
    width: `${scaledWidth}px`,
    height: `${scaledHeight}px`,
    position: 'absolute',
    left: `${scaledX+left}px`,
    top: `${scaledY+top}px`,
    border: '2px solid #00F0FF'
  };

  return <div style={divStyle}>
    <span style={{
      position:"absolute",top:-30,
      color:"#00F0FF"
    }}>{title}</span>
  </div>;
};

export default BoundingBoxDiv;
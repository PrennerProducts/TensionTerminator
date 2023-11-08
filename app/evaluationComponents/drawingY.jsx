import React, { useState, useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import Svg, { Image as SvgImage, Line, Polygon, Path, Text } from 'react-native-svg';

const DrawingY = ({ maxYLBefore, maxYRBefore, maxYLAfter, maxYRAfter }) => {
  const imageSource = require('../../assets/images/headTopDownBW.png');

  const imageWidth = Dimensions.get("window").width;
  const imageHeight = 340;

  const centerX = imageWidth / 2;
  const centerY = imageHeight / 2;

  const animInterval = 2000; // In Milli-Sekunden
  const [animatingB, setAnimatingB] = useState(true);
 
  const lineLength = imageWidth/2.2;
  const lineYLBeforeEndX = centerX + Math.cos((90+maxYLBefore) * (Math.PI / 180)) * lineLength;
  const lineYLBeforeEndY = centerY + Math.sin((90+maxYLBefore) * (Math.PI / 180)) * lineLength;
  const lineYRBeforeEndX = centerX + Math.cos((90-maxYRBefore) * (Math.PI / 180)) * lineLength;
  const lineYRBeforeEndY = centerY + Math.sin((90-maxYRBefore) * (Math.PI / 180)) * lineLength;

  const lineYLAfterEndX = centerX + Math.cos((90+maxYLAfter) * (Math.PI / 180)) * lineLength;
  const lineYLAfterEndY = centerY + Math.sin((90+maxYLAfter) * (Math.PI / 180)) * lineLength;
  const lineYRAfterEndX = centerX + Math.cos((90-maxYRAfter) * (Math.PI / 180)) * lineLength;
  const lineYRAfterEndY = centerY + Math.sin((90-maxYRAfter) * (Math.PI / 180)) * lineLength;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimatingB((animatingB) => !animatingB);
    }, animInterval);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const dBefore = 'M ' 
  + (centerX+0.75*(lineYLBeforeEndX-centerX))
  + ' ' 
  + (centerY+0.75*(lineYLBeforeEndY-centerY))
  + ' Q ' 
  + ((lineYLBeforeEndX+lineYRBeforeEndX)/2) 
  + ' ' 
  + (((lineYLBeforeEndY+lineYRBeforeEndY)/2)) 
  + ', ' 
  + (centerX+0.75*(lineYRBeforeEndX-centerX))
  + ' ' 
  + (centerY+0.75*(lineYRBeforeEndY-centerY))

  const dAfter = 'M ' 
  + ((centerX+lineYLAfterEndX)/2)
  + ' ' 
  + ((centerY+lineYLAfterEndY)/2)
  + ' Q ' 
  + ((lineYLAfterEndX+lineYRAfterEndX)/2) 
  + ' ' 
  + (((lineYLAfterEndY+lineYRAfterEndY)/2)) 
  + ', ' 
  + ((centerX+lineYRAfterEndX)/2)
  + ' ' 
  + ((centerY+lineYRAfterEndY)/2)

  const polygonBeforePoints = [
    centerX, centerY,
    lineYLBeforeEndX, lineYLBeforeEndY,
    lineYRBeforeEndX, lineYRBeforeEndY,
  ];

  const polygonAfterPoints = [
    centerX, centerY,
    lineYLAfterEndX, lineYLAfterEndY,
    lineYRAfterEndX, lineYRAfterEndY,
  ];

  return (
    <View>
      <View>
      <Text style={{ fontSize: 24 }}>
        Boolean Value: {animatingB.toString()}
      </Text>
    </View>
    <Svg width={imageWidth} height={imageHeight}>
      <SvgImage width={imageWidth} height={imageHeight} href={imageSource} />
{/*BEFORE*/}
      {animatingB && ( 
      <View>
        <Text x={centerX - 120} y={centerY - 100} fill="red" fontSize="32">Rotation vorher</Text>
      <Polygon points={polygonBeforePoints.join(' ')} fill="rgba(255, 0, 0, 0.05)"/>
      <Path d={dBefore} fill="transparent" stroke="red" strokeWidth="2" strokeDasharray="3,10"/>
      <Line
        x1={centerX}
        y1={centerY}
        x2={lineYLBeforeEndX}
        y2={lineYLBeforeEndY}
        stroke="red"
        strokeWidth="3"
        strokeDasharray="5,5"
      />
      <Line
        x1={centerX}
        y1={centerY}
        x2={lineYRBeforeEndX}
        y2={lineYRBeforeEndY}
        stroke="red"
        strokeWidth="3"
        strokeDasharray="5,5"
      />
      <Text x={lineYLBeforeEndX - 10} y={lineYLBeforeEndY + 20} fill="red" fontSize="20">
        {maxYLBefore}°
      </Text>
      <Text x={lineYRBeforeEndX - 10} y={lineYRBeforeEndY + 20} fill="red" fontSize="20">
        {maxYRBefore}°
      </Text>
      <Text x={((centerX+lineYLBeforeEndX+lineYRBeforeEndX)/3)-20} y={((centerY+lineYLBeforeEndY+lineYRBeforeEndY)/3)+20} fill="rgba(255, 0, 0, 0.4)" fontWeight="bold" fontSize="30">
      {maxYLBefore+maxYRBefore}°
      </Text>
      </View>
      )}
{/*After*/}
      {!animatingB && (
      <View>
      <Text x={centerX - 120} y={centerY - 100} fill="blue" fontSize="32">Rotation nachher</Text>
      <Path d={dAfter} fill="transparent" stroke="blue" strokeWidth="2" strokeDasharray="3,10"/>
      <Polygon points={polygonAfterPoints.join(' ')} fill="rgba(0, 0, 255, 0.05)"/>
      <Line
        x1={centerX}
        y1={centerY}
        x2={lineYLAfterEndX}
        y2={lineYLAfterEndY}
        stroke="blue"
        strokeWidth="3"
        strokeDasharray="5,5"
      />
            <Line
        x1={centerX}
        y1={centerY}
        x2={lineYRAfterEndX}
        y2={lineYRAfterEndY}
        stroke="blue"
        strokeWidth="3"
        strokeDasharray="5,5"
      />
      <Text x={lineYLAfterEndX - 10} y={lineYLAfterEndY + 20} fill="blue" fontSize="20">
        {maxYLAfter}°
      </Text>
      <Text x={lineYRAfterEndX - 10} y={lineYRAfterEndY + 20} fill="blue" fontSize="20">
        {maxYRAfter}°
      </Text>
      <Text x={((centerX+lineYLAfterEndX+lineYRAfterEndX)/3)-20} y={((centerY+lineYLAfterEndY+lineYRAfterEndY)/3)} fill="rgba(0, 0, 255, 0.4)" fontWeight="bold" fontSize="30">
        {maxYLAfter+maxYRAfter}°
      </Text>
      </View>
      )}
    </Svg>
    </View>
  );
};

export default DrawingY;

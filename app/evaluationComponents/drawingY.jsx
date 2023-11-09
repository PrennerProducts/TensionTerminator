import React, { useState, useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import Svg, { Image as SvgImage, Line, Polygon, Path, Text } from 'react-native-svg';

const DrawingY = ({ maxLBefore, maxRBefore, maxLAfter, maxRAfter, TitleString, imageSource, degreeAdd, imageHeight, xAdd, yAdd, titleXAdd, titleYAdd }) => {
  const imgWidth = Dimensions.get("window").width;
  const imgHeight = imageHeight;

  const centerX = (imgWidth / 2) +xAdd;
  const centerY = (imgHeight / 2) +yAdd;

  const animInterval = 2000; // In Milli-Sekunden
  const [animatingB, setAnimatingB] = useState(true);
 
  const lineLength = imgWidth/2.2;
  const lineLBeforeEndX = centerX + Math.cos((degreeAdd+maxLBefore) * (Math.PI / 180)) * lineLength;
  const lineLBeforeEndY = centerY + Math.sin((degreeAdd+maxLBefore) * (Math.PI / 180)) * lineLength;
  const lineRBeforeEndX = centerX + Math.cos((degreeAdd-maxRBefore) * (Math.PI / 180)) * lineLength;
  const lineRBeforeEndY = centerY + Math.sin((degreeAdd-maxRBefore) * (Math.PI / 180)) * lineLength;

  const lineLAfterEndX = centerX + Math.cos((degreeAdd+maxLAfter) * (Math.PI / 180)) * lineLength;
  const lineLAfterEndY = centerY + Math.sin((degreeAdd+maxLAfter) * (Math.PI / 180)) * lineLength;
  const lineRAfterEndX = centerX + Math.cos((degreeAdd-maxRAfter) * (Math.PI / 180)) * lineLength;
  const lineRAfterEndY = centerY + Math.sin((degreeAdd-maxRAfter) * (Math.PI / 180)) * lineLength;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimatingB((animatingB) => !animatingB);
    }, animInterval);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const dBefore = 'M ' 
  + (centerX+0.75*(lineLBeforeEndX-centerX))
  + ' ' 
  + (centerY+0.75*(lineLBeforeEndY-centerY))
  + ' Q ' 
  + ((lineLBeforeEndX+lineRBeforeEndX)/2) 
  + ' ' 
  + (((lineLBeforeEndY+lineRBeforeEndY)/2)) 
  + ', ' 
  + (centerX+0.75*(lineRBeforeEndX-centerX))
  + ' ' 
  + (centerY+0.75*(lineRBeforeEndY-centerY))

  const dAfter = 'M ' 
  + ((centerX+lineLAfterEndX)/2)
  + ' ' 
  + ((centerY+lineLAfterEndY)/2)
  + ' Q ' 
  + ((lineLAfterEndX+lineRAfterEndX)/2) 
  + ' ' 
  + (((lineLAfterEndY+lineRAfterEndY)/2)) 
  + ', ' 
  + ((centerX+lineRAfterEndX)/2)
  + ' ' 
  + ((centerY+lineRAfterEndY)/2)

  const polygonBeforePoints = [
    centerX, centerY,
    lineLBeforeEndX, lineLBeforeEndY,
    lineRBeforeEndX, lineRBeforeEndY,
  ];

  const polygonAfterPoints = [
    centerX, centerY,
    lineLAfterEndX, lineLAfterEndY,
    lineRAfterEndX, lineRAfterEndY,
  ];

  return (
    <View>
      <View>
      <Text style={{ fontSize: 24 }}>
        Boolean Value: {animatingB.toString()}
      </Text>
    </View>
    <Svg width={imgWidth} height={imgHeight}>
      <SvgImage width={imgWidth} height={imgHeight} href={imageSource} />
{/*BEFORE*/}
      {animatingB && ( 
      <View>
        <Text x={centerX+titleXAdd} y={centerY+titleYAdd} fill="red" fontSize="32">{TitleString} Vorher</Text>
      <Polygon points={polygonBeforePoints.join(' ')} fill="rgba(255, 0, 0, 0.05)"/>
      <Path d={dBefore} fill="transparent" stroke="red" strokeWidth="2" strokeDasharray="3,10"/>
      <Line
        x1={centerX}
        y1={centerY}
        x2={lineLBeforeEndX}
        y2={lineLBeforeEndY}
        stroke="red"
        strokeWidth="3"
        strokeDasharray="5,5"
      />
      <Line
        x1={centerX}
        y1={centerY}
        x2={lineRBeforeEndX}
        y2={lineRBeforeEndY}
        stroke="red"
        strokeWidth="3"
        strokeDasharray="5,5"
      />
      <Text x={lineLBeforeEndX - 10} y={lineLBeforeEndY + 20} fill="red" fontSize="20">
        {maxLBefore}°
      </Text>
      <Text x={lineRBeforeEndX - 10} y={lineRBeforeEndY + 20} fill="red" fontSize="20">
        {maxRBefore}°
      </Text>
      <Text x={((centerX+lineLBeforeEndX+lineRBeforeEndX)/3)-20} y={((centerY+lineLBeforeEndY+lineRBeforeEndY)/3)+20} fill="rgba(255, 0, 0, 0.4)" fontWeight="bold" fontSize="30">
      {maxLBefore+maxRBefore}°
      </Text>
      </View>
      )}
{/*After*/}
      {!animatingB && (
      <View>
      <Text x={centerX+titleXAdd} y={centerY+titleYAdd} fill="blue" fontSize="32">{TitleString} Nachher</Text>
      <Path d={dAfter} fill="transparent" stroke="blue" strokeWidth="2" strokeDasharray="3,10"/>
      <Polygon points={polygonAfterPoints.join(' ')} fill="rgba(0, 0, 255, 0.05)"/>
      <Line
        x1={centerX}
        y1={centerY}
        x2={lineLAfterEndX}
        y2={lineLAfterEndY}
        stroke="blue"
        strokeWidth="3"
        strokeDasharray="5,5"
      />
            <Line
        x1={centerX}
        y1={centerY}
        x2={lineRAfterEndX}
        y2={lineRAfterEndY}
        stroke="blue"
        strokeWidth="3"
        strokeDasharray="5,5"
      />
      <Text x={lineLAfterEndX - 10} y={lineLAfterEndY + 20} fill="blue" fontSize="20">
        {maxLAfter}°
      </Text>
      <Text x={lineRAfterEndX - 10} y={lineRAfterEndY + 20} fill="blue" fontSize="20">
        {maxRAfter}°
      </Text>
      <Text x={((centerX+lineLAfterEndX+lineRAfterEndX)/3)-20} y={((centerY+lineLAfterEndY+lineRAfterEndY)/3)} fill="rgba(0, 0, 255, 0.4)" fontWeight="bold" fontSize="30">
        {maxLAfter+maxRAfter}°
      </Text>
      </View>
      )}
    </Svg>
    </View>
  );
};

export default DrawingY;

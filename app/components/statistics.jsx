import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Switch,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Svg } from 'react-native-svg';
import React, { useState, useEffect } from 'react';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  axis,
  Axis,
  VictoryPie,
  VictoryLabel,
  Circle,
  VictoryLegend,
  VictoryArea,
  VictoryTooltip,
  VictoryPolarAxis,
} from 'victory-native';

import DropDownPicker from 'react-native-dropdown-picker';
import { evaluationData } from '../evaluationComponents/evaluationData';
import SlotMachine from 'react-native-slot-machine';
import { useUserContext } from './userContextProvider';
import DrawingY from '../evaluationComponents/drawingY';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import CustomDropdown from './customDropdown';

const statistics = () => {
  const date = new Date();

  // highscore Yaw Roll
  const imageSourceR = require('../../assets/images/HeadT.png');
  const imageSourceY = require('../../assets/images/HeadF.png');
  const highscoreYL = 80;
  const highscoreYR = 81;
  const highscoreRL = 45;
  const highscoreRR = 45;

  // GameLevel

  const [highestLevel, setHighestLevel] = useState(0);

  // User Context Provider
  const {
    username,
    gameLevel,
    points,
    profileImageIndex,
    sendData,
    updateUserDetails,
    updateProfileImageIndex,
    updateUsername,
    updateGameLevel,
    updatePoints,
    updateSendData,
  } = useUserContext();

  // Bar Chart
  const [selectedChart, setSelectedChart] = useState('Week'); // Standardmäßig auf 'Week' gesetzt

  //dropdown picker
  const [open, setOpen] = useState(false);

  const handleSelectChart = (chartType) => {
    setSelectedChart(chartType);
    // Weitere Logik, um den Chart zu aktualisieren
  };

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dez',
  ];
  barChartDataMonth = [
    { x: 'w1', y: 310 },
    { x: 'w2', y: 512 },
    { x: 'w3', y: 48 },
    { x: 'w4', y: 183 },
  ];
  barChartDataYear = [
    { x: 'Jan', y: 8 },
    { x: 'Feb', y: 63 },
    { x: 'Mar', y: 183 },
    { x: 'Apr', y: 253 },
    { x: 'May', y: 147 },
    { x: 'Jun', y: 63 },
    { x: 'Jul', y: 183 },
    { x: 'Aug', y: 253 },
    { x: 'Sep', y: 147 },
    { x: 'Oct', y: 63 },
    { x: 'Nov', y: 183 },
    { x: 'Dez', y: 253 },
  ];
  barChartDataWeek = [
    { x: 'Mo', y: 8 },
    { x: 'Di', y: 63 },
    { x: 'Mi', y: 183 },
    { x: 'Do', y: 253 },
    { x: 'Fr', y: 147 },
    { x: 'Sa', y: 63 },
    { x: 'So', y: 183 },
  ];

  pieChartData = [
    { x: 'RollenKlein', y: 8 },
    { x: 'RollenGroß', y: 63 },
    { x: 'Triggerpunkthebel', y: 183 },
  ];

  levelData = [
    { x: '0', y: 0 },
    { x: '1', y: 1 },
    { x: '2', y: 2 },
    { x: '3', y: 3 },
    { x: '4', y: null },
    { x: '5', y: null },
    { x: '6', y: null },
    { x: '7', y: null },
    { x: '8', y: null },
    { x: '9', y: null },
    { x: '10', y: null },
  ];

  const chartData = {
    Week: barChartDataWeek,
    Month: barChartDataMonth,
    Year: barChartDataYear,
  };

  useEffect(() => {
    const getHighestLevel = () => {
      for (const data of levelData) {
        if (
          data.y !== null &&
          (highestLevel === null || data.y > highestLevel)
        ) {
          setHighestLevel(data.y);
        }
      }
    };

    getHighestLevel();
  }, []);

  maxYawData = [
    { x: 40, y: 0 },
    { x: 420, y: 0 },
  ];

  maxRollData = [
    { x: 0, y: 30 },
    { x: 0, y: 31 },
  ];

  titles = ['RollenKlein', 'RollenGroß', 'KratzArm'];
  return (
    <ScrollView
      style={stylesLocal.mainscrollViewContainer}
      nestedScrollEnabled={true}
    >
      {/* <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={stylesLocal.scrollViewContainer}
      > */}
      <View style={stylesLocal.gridContainer}>
        {/* Spalte 1 */}
        <View style={stylesLocal.gridColumn}>
          <Text style={stylesLocal.gridTitle}>Anzahl Trainings</Text>
          <Text style={stylesLocal.gridValue}>123</Text>
        </View>
        {/* Spalte 2 */}
        <View style={stylesLocal.gridColumn}>
          <Text style={stylesLocal.gridTitle}>TrainingsZeit</Text>
          <Text style={stylesLocal.gridValue}>456 Min</Text>
        </View>

        {/* Spalte 3 */}
        <View style={stylesLocal.gridColumn}>
          <Text style={stylesLocal.gridTitle}>Highscore</Text>
          <Text style={stylesLocal.gridValue}>{points} Punkte</Text>
        </View>
      </View>
      {/* </ScrollView> */}

      {/* Slotmachine Points Highscore*/}
      <View style={stylesLocal.slotcontainer}>
        <Text style={stylesLocal.slotheader}> Dein Punkte Highscore:</Text>

        <SlotMachine
          initialAnimation={true}
          text={points}
          duration={2000}
          width={60}
          height={80}
          range={'9876543210'}
          styles={{
            container: {
              backgroundColor: '#10069f', // Hintergrundfarbe des gesamten Slot-Machine-Bereichs

              alignItems: 'center',
              justifyContent: 'center',
              borderColor: '#10069f',
            },
            slotWrapper: {
              backgroundColor: '#10069f', // Hintergrundfarbe des Slot-Containers
              borderColor: '#10069f',
            },
            slotInner: {
              backgroundColor: 'white', // Hintergrundfarbe des inneren Slot-Bereichs
              borderRadius: 10,
              borderColor: '#10069f',
              padding: 5, // Innenabstand
              alignItems: 'center', // Horizontal
              justifyContent: 'center', // Vertikal
            },
            innerBorder: {
              display: 'none',
              // borderWidth: 2,
              // borderColor: 'blue',
            },
            outerBorder: {
              display: 'none',
              // borderWidth: 2,
              // borderColor: 'blue',
            },
            overlay: {
              display: 'none',
            },
            text: {
              color: 'black', // Textfarbe
              fontSize: 48, // Textgröße
              fontWeight: 'bold', // Fetter Text
            },
          }}
        />
      </View>

      {/* --------------------   Level    --------------------------------------- */}
      <View style={stylesLocal.headerWrapper}>
        <Text style={stylesLocal.max_header}>
          Dein aktuelles Game-Level: {gameLevel}
        </Text>
      </View>
      <View style={stylesLocal.levelcontainer}>
        <AnimatedCircularProgress
          size={120}
          width={15}
          fill={gameLevel * 10}
          tintColor="#10069F"
          rotation={270}
          backgroundColor="lightgrey"
          arcSweepAngle={180}
          delay={2000}
          duration={2000}
        >
          {(fill) => (
            <Text style={stylesLocal.max_header}>{`Level ${Math.round(
              gameLevel

              //highestLevel
            )} `}</Text>
          )}
        </AnimatedCircularProgress>
      </View>

      {/* --------------------    Highscore Yaw Roll    --------------------------------------- */}
      <View style={stylesLocal.headerWrapper}>
        <Text style={stylesLocal.max_header}>
          Highscore Kopfrotation: {highscoreYL + highscoreYR}°{' '}
        </Text>
      </View>
      <DrawingY
        maxLBefore={highscoreYL}
        maxRBefore={highscoreYR}
        TitleString={''}
        shouldAnimate={false}
        interval={2000}
        imageSource={imageSourceR}
        degreeAdd={90}
        imageHeight={300}
        xAdd={0}
        yAdd={-40}
        titleXAdd={0}
        titleYAdd={0}
        resize={1}
        lineLengthFactor={2.5}
      />

      <View style={stylesLocal.headerWrapper}>
        <Text style={stylesLocal.max_header}>
          Highscore Kopfneigung: {highscoreRL + highscoreRR}°
        </Text>
      </View>
      <DrawingY
        maxLBefore={highscoreRL}
        maxRBefore={highscoreRR}
        TitleString={''}
        shouldAnimate={false}
        interval={2000}
        imageSource={imageSourceY}
        degreeAdd={90}
        imageHeight={300}
        xAdd={0}
        yAdd={-40}
        titleXAdd={0}
        titleYAdd={0}
        resize={1}
        lineLengthFactor={2.5}
      />

      {/* --------------------------------Trainings Chart------------------------------------------ */}
      <View style={[stylesLocal.barchart, stylesLocal.shadowProp]}>
        <View style={stylesLocal.headerWrapper}>
          <Text style={stylesLocal.max_header}>Dein Training </Text>
        </View>
        {/* ----DropDownPickerCharts--------- */}

        <View style={stylesLocal.dropdownContainer}>
          <CustomDropdown
            selectedChart={selectedChart}
            onSelect={handleSelectChart}
          />
        </View>

        {/* <View style={stylesLocal.dropdownContainer}>
          <DropDownPicker
            nestedScrollEnabled={true}

            open={open}
            setOpen={setOpen}
            value={selectedChart}
            setValue={(selectedChart) => {
              setSelectedChart(selectedChart);
            }}
            items={[
              { label: 'WochenChart', value: 'Week' },
              { label: 'MonatsChart', value: 'Month' },
              { label: 'JahresChart', value: 'Year' },
            ]}
            onChangeValue={(value) => setSelectedChart(value)}
          />

        </View> */}

        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={{ x: 20, y: 50 }}
        >
          {/* VictoryAxis für die X-Achse */}

          <VictoryAxis
            tickValues={selectedChart === 'Year' ? months : undefined}
            tickFormat={selectedChart === 'Year' ? months : undefined}
          />

          <VictoryAxis dependentAxis tickFormat={[60, 120, 180, 240, 300]} />
          <VictoryBar
            data={chartData[selectedChart]}
            labels={({ datum }) => `${datum.y}sec`}
            cornerRadius={{ topLeft: 8 }}
            alignment="start"
            x="x"
            y="y"
            barWidth={18}
            style={{ data: { fill: '#10069F' } }}
            animate
          />
        </VictoryChart>
      </View>

      {/* --------------------------------Geraete Chart------------------------------------------ */}
      <View style={stylesLocal.headerWrapper}>
        <Text style={stylesLocal.max_header}>Deine Geräte</Text>
      </View>
      <View style={stylesLocal.piechart}>
        <Svg
          width={380}
          height={310}
          viewBox="-35 35 350 400"
          //style={{ position: "relative" }}
        >
          <VictoryPie
            standalone={false}
            width={399}
            height={398.1}
            data={pieChartData}
            innerRadius={60}
            labelRadius={90}
            labels={({ datum }) => {
              const total = pieChartData.reduce((acc, val) => acc + val.y, 0);
              return `${((datum.y / total) * 100).toFixed(2)}%`;
            }}
            style={{ labels: { fontSize: 18, fill: 'white' } }}
            animate={{
              duration: 8000,
              onLoad: {
                duration: 8000,
              },
            }}
            colorScale={[
              'lightgreen',
              'orange',
              'cornflowerblue',
              'lightgreen',
              'blue',
              'orange',
              'gold',
              'cyan',
              'navy',
              'cornflowerblue',
              'lightgreen',
            ]}
          />
          <Circle
            cx={200}
            cy={200}
            r={63}
            fill="none"
            stroke="#10069F"
            strokeWidth={0}
          />
          <Circle
            cx={200}
            cy={200}
            r={150}
            fill="none"
            stroke={'#10069F'}
            strokeWidth={0}
          />
          <VictoryLabel
            textAnchor="middle"
            verticalAnchor="middle"
            x={200}
            y={200}
            style={{ fontSize: 30, fill: 'black' }}
            text="Geräte"
          />
          <VictoryLegend
            orientation="vertical"
            gutter={10}
            data={[
              { name: 'Triggerpunkthebel', symbol: { fill: 'cornflowerblue' } },
              { name: 'RollenKlein', symbol: { fill: 'orange' } },
              { name: 'RollenGroß', symbol: { fill: 'lightgreen' } },
            ]}
            labelComponent={<VictoryLabel angle={360} />}
          />
        </Svg>
      </View>
    </ScrollView>
  );
};

const stylesLocal = StyleSheet.create({
  // Main Scroll View vertical
  mainscrollViewContainer: {
    backgroundColor: '#fff',
  },

  // wrapper
  headerWrapper: {
    margin: 10,

    marginBottom: 50,
  },

  // Horizontal Scroll View
  scrollViewContainer: {
    backgroundColor: '#fff',
    padding: 6,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#10069F',
  },

  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 0,
  },
  gridColumn: {
    backgroundColor: 'f0f0f0',
    padding: 8,

    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#10069F',
  },
  gridTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  gridValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#10069F',

    alignItems: 'center',
    justifyContent: 'center',
  },

  // bar chart
  dropdownContainer: {
    alignItems: 'center',

    margin: 0,
  },

  barchart: {
    margin: 0,
    marginTop: 0,
  },
  shadowProp: {},

  // Geraete Chart
  piechart: {
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Slotmachine
  slotheader: {
    fontSize: 20,
    textAlign: 'center',

    marginTop: 10,

    color: '#fff',
    backgroundColor: '#10069F',
  },
  slotcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#10069f',
    paddingBottom: 10,
    marginBottom: 20,

    borderRadius: 20,
    margin: 10,
  },

  // max yaw roll

  max_header: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    color: '#000',
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
    width: '100%',
    borderRadius: 50,
  },

  // Level
  levelcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  points: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
});

export default statistics;

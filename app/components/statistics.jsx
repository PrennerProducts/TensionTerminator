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

const statistics = () => {
  const date = new Date();
  //dropdown picker
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [selectedChart, setSelectedChart] = useState('WochenChart');

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
  barChartData = [
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
  pieChartData = [
    { x: 'RollenKlein', y: 8 },
    { x: 'RollenGroß', y: 63 },
    { x: 'KratzArm', y: 183 },
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
    <ScrollView>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={stylesLocal.scrollViewContainer}
      >
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
            <Text style={stylesLocal.gridValue}>789 Punkte</Text>
          </View>
          {/* Spalte 4 */}
          <View style={stylesLocal.gridColumn}>
            <Text style={stylesLocal.gridTitle}>Anzahl Trainings</Text>
            <Text style={stylesLocal.gridValue}>123</Text>
          </View>
          {/* Spalte 5 */}
          <View style={stylesLocal.gridColumn}>
            <Text style={stylesLocal.gridTitle}>TrainingsZeit</Text>
            <Text style={stylesLocal.gridValue}>456 Min</Text>
          </View>

          {/* Spalte 6 */}
          <View style={stylesLocal.gridColumn}>
            <Text style={stylesLocal.gridTitle}>Highscore</Text>
            <Text style={stylesLocal.gridValue}>789 Punkte</Text>
          </View>
        </View>
      </ScrollView>

      {/* --------------------------------DropDownPickerCharts------------------------------------------ */}

      <View style={stylesLocal.dropdownContainer}>
        <DropDownPicker
          open={open}
          setOpen={setOpen}
          value={selectedChart} // Aktueller ausgewählter Chart
          setValue={(newValue) => {
            setValue(newValue);
          }}
          items={[
            { label: 'WochenChart', value: 'WochenChart' },
            { label: 'MonatsChart', value: 'MonatsChart' },
            { label: 'JahresChart', value: 'JahresChart' },
          ]}
          containerStyle={{ width: 150 }}
          onChangeValue={(value) => setSelectedChart(value)} // Aktualisiere den ausgewählten Chart
        />
      </View>
      {/* Hier ist dein Chart */}
      <View style={[stylesLocal.barchart, stylesLocal.shadowProp]}>
        {/* Hier dein Chart-Inhalt */}
      </View>

      {/* --------------------------------Ende------------------------------------------ */}
      <View style={[stylesLocal.barchart, stylesLocal.shadowProp]}>
        <Text>Dein Training </Text>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={{ x: 20, y: 50 }} //padding for your chart horizontal and vertical
          alignment="middle"
        >
          <VictoryAxis
            tickValues={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
            tickFormat={months}
          />
          <VictoryAxis
            dependentAxis
            //tickFormat specifies how ticks should be displayed
            tickFormat={[60, 120, 180, 240, 300]}
          />
          <VictoryBar
            data={barChartData}
            labels={({ datum }) => `${datum.y}sec`}
            cornerRadius={{ topLeft: 8 }}
            alignment="start"
            x="Month"
            barWidth={18}
            style={{ data: { fill: '#10069F' } }}
            animate
          />
        </VictoryChart>
      </View>

      <View style={stylesLocal.piechart}>
        <Text>High-Score Beweglichkeit</Text>
        <Svg width={400} height={400}>
          <VictoryAxis
            crossAxis
            width={400}
            height={400}
            domain={[-100, 100]}
            theme={VictoryTheme.material}
            offsetY={200}
            standalone={false}
            data={maxRollData}
          />
          <VictoryAxis
            dependentAxis
            crossAxis
            width={400}
            height={400}
            domain={[-50, 50]}
            theme={VictoryTheme.material}
            offsetX={200}
            standalone={false}
          />
        </Svg>
      </View>

      <View style={stylesLocal.piechart}>
        <Text>Welche Geräte hast du verwendet</Text>
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
            //labels={() => null}
            style={{ labels: { fontSize: 28, fill: 'white' } }}
            animate={{
              duration: 4000,
              onLoad: {
                duration: 4000,
              },
            }}
            colorScale={[
              'tomato',
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
            //stroke='black'
            strokeWidth={3}
          />
          <Circle
            cx={200}
            cy={200}
            r={150}
            fill="none"
            //stroke={Theme.primary}
            strokeWidth={3}
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
            data={titles}
            labelComponent={<VictoryLabel angle={360} />}
          />
        </Svg>
      </View>

      <View style={stylesLocal.piechart}>
        <Text>Dein aktuelles Game-Level</Text>
        <VictoryChart
          theme={VictoryTheme.material}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          style={{
            background: { fill: 'lightblue' },
            data: { fill: 'red' },
          }}
        >
          <VictoryArea
            data={levelData}
            style={{
              data: { fill: '#10069F' },
            }}
          />
          <VictoryAxis />
        </VictoryChart>
      </View>
    </ScrollView>
  );
};

const stylesLocal = StyleSheet.create({
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
    backgroundColor: 'lightgray',
    padding: 10,
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

  barchart: {
    margin: 20,
  },
  shadowProp: {},
  piechart: {
    margin: 20,
  },
});

export default statistics;

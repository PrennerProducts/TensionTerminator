import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Switch,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Svg } from 'react-native-svg';
import React from 'react';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryPie,
  VictoryLabel,
  Circle,
  VictoryLegend,
  VictoryTooltip,
} from 'victory-native';

const statistics = () => {
  const date = new Date();
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

  titles = ['RollenKlein', 'RollenGroß', 'KratzArm'];
  return (
    <View>
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
      </View>
      <View style={[stylesLocal.barchart, stylesLocal.shadowProp]}>
        <Text>Your Traing this Year </Text>
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
    </View>
  );
};

const stylesLocal = StyleSheet.create({
  barchart: {
    margin: 20,
  },
  shadowProp: {},
  piechart: {
    margin: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 20,
  },
  gridColumn: {
    alignItems: 'center',
  },
  gridTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  gridValue: {
    fontSize: 14,
    color: '#333',
  },
});

export default statistics;

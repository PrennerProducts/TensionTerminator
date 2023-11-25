import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomDropdown = ({ selectedChart, onSelect }) => {
  const options = [
    { label: 'WochenChart', value: 'Week' },
    { label: 'MonatsChart', value: 'Month' },
    { label: 'JahresChart', value: 'Year' },
  ];

  const isSelected = (optionValue) => {
    return selectedChart === optionValue;
  };

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={[
            styles.option,
            isSelected(option.value) ? styles.optionActive : null,
          ]}
          onPress={() => onSelect(option.value)}
        >
          <Text
            style={[
              styles.optionText,
              isSelected(option.value) ? styles.optionTextActive : null,
            ]}
          >
            {option.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // Container-Styling
    padding: 10,
    paddingBottom: 0,
    margin: 10,
    marginBottom: 0,
    flexDirection: 'row',
  },
  option: {
    // Option-Styling
    backgroundColor: '#f0f0f0',
    padding: 8,
    marginHorizontal: 2,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d0d0d0',
    alignItems: 'space-between',
  },
  optionText: {
    // Text-Styling
    fontSize: 16,
    color: '#333',
  },
  optionActive: {
    // Aktive Option-Styling
    backgroundColor: '#10069F',
    borderColor: '#0056b3',
  },
  optionTextActive: {
    // Aktiver Text-Styling
    color: '#ffffff',
  },
});

export default CustomDropdown;

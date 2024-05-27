import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import _ from "lodash";

const RandomNumberGenerator = () => {
  const [randomNumbers, setRandomNumbers] = useState([]);

  const generateRandomNumbers = () => {
    const length = _.random(10, 15);
    const numbers = _.times(length, () => _.random(1, 289));
    setRandomNumbers(numbers);
  };

  const deleteNumbers = () => {
    setRandomNumbers([]);
  };

  return (
    <View style={styles.container}>
      <Button title="Generate" onPress={generateRandomNumbers} />
      <View style={styles.numberContainer}>
        {randomNumbers.map((number, index) => (
          <Text key={index} style={styles.numberText}>
            {number}
          </Text>
        ))}
      </View>
      <Button title="Delete" onPress={deleteNumbers} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  numberContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  numberText: {
    fontSize: 18,
    padding: 8,
  },
});

export default RandomNumberGenerator;

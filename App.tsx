import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const InventoryCalculator: React.FC = () => {
  const [month, setMonth] = useState<string>('');
  const [beginningInventory, setBeginningInventory] = useState<number>(0);
  const [endingInventory, setEndingInventory] = useState<number>(0);
  const [costOfGoodsSold, setCostOfGoodsSold] = useState<number>(0);
  const [averageInventory, setAverageInventory] = useState<number | null>(null);
  const [turnover, setTurnover] = useState<number | null>(null);

  const calculate = () => {
    if (beginningInventory < 0 || endingInventory < 0 || costOfGoodsSold < 0) {
      Alert.alert('Invalid input', 'Please enter positive values for inventory and cost of goods sold.');
      return;
    }

    const avgInventory = (beginningInventory + endingInventory) / 2;
    const turnoverValue = costOfGoodsSold / avgInventory;

    setAverageInventory(avgInventory);
    setTurnover(turnoverValue);
  };

  const clear = () => {
    setMonth('');
    setBeginningInventory(0);
    setEndingInventory(0);
    setCostOfGoodsSold(0);
    setAverageInventory(null);
    setTurnover(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Month:</Text>
      <TextInput style={styles.input} value={month} onChangeText={setMonth} />

      <Text style={styles.label}>Beginning Inventory:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={beginningInventory.toString()}
        onChangeText={(text) => setBeginningInventory(parseFloat(text))}
      />

      <Text style={styles.label}>Ending Inventory:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={endingInventory.toString()}
        onChangeText={(text) => setEndingInventory(parseFloat(text))}
      />

      <Text style={styles.label}>Cost of Goods Sold:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={costOfGoodsSold.toString()}
        onChangeText={(text) => setCostOfGoodsSold(parseFloat(text))}
      />

      <View style={styles.buttonContainer}>
        <Button title="Calculate" onPress={calculate} />
        <Button title="Clear" onPress={clear} />
      </View>

      <Text style={styles.result}>Average Inventory: {averageInventory !== null ? `$${averageInventory.toFixed(2)}` : ''}</Text>
      <Text style={styles.result}>Turnover: {turnover !== null ? turnover.toFixed(1) : ''}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    marginTop: 10,
    fontSize: 16,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default InventoryCalculator;

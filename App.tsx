import React, { useState } from 'react';
import { StyleSheet ,View, Text, TextInput, Button, Alert } from 'react-native';

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
      <Text>Month:</Text>
      <TextInput value={month} onChangeText={setMonth} />

      <Text>Beginning Inventory:</Text>
      <TextInput
        keyboardType="numeric"
        value={beginningInventory.toString()}
        onChangeText={(text) => setBeginningInventory(parseFloat(text))}
      />

      <Text>Ending Inventory:</Text>
      <TextInput
        keyboardType="numeric"
        value={endingInventory.toString()}
        onChangeText={(text) => setEndingInventory(parseFloat(text))}
      />

      <Text>Cost of Goods Sold:</Text>
      <TextInput
        keyboardType="numeric"
        value={costOfGoodsSold.toString()}
        onChangeText={(text) => setCostOfGoodsSold(parseFloat(text))}
      />

      <Button title="Calculate" onPress={calculate} />
      <Button title="Clear" onPress={clear} />

      <Text>Average Inventory: {averageInventory !== null ? `$${averageInventory.toFixed(2)}` : ''}</Text>
      <Text>Turnover: {turnover !== null ? turnover.toFixed(1) : ''}</Text>
    </View>
  );
};

export default InventoryCalculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

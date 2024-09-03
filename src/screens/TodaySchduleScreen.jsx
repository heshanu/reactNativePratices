import React, { useState, useEffect } from 'react';
import { CheckBox, ScrollView, Text, StyleSheet, View, FlatList } from 'react-native';

const TodaySchduleScreen = () => {
  const [numOfCompletedTask, setNumOfCompletedTask] = useState(0);
  const [data, setData] = useState([
    { id: '1', name: 'Item 1', description: 'Wake Up', time: '05:00', isSelected: false },
    { id: '2', name: 'Item 2', description: 'Wake Up', time: '05:30', isSelected: false },
    { id: '3', name: 'Item 3', description: 'Wake Up', time: '06:00', isSelected: false },
    { id: '4', name: 'Item 4', description: 'Wake Up', time: '06:30', isSelected: false },
    // Add more items as needed
  ]);

  const handleCheckBoxChange = (id) => {
    setData(prevData =>
      prevData.map(item =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  };

  useEffect(() => {
    const completedTasks = data.filter(item => item.isSelected).length;
    setNumOfCompletedTask(completedTasks);
  }, [data]);

  // For pie chart

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.time} - {item.description}</Text>
      <CheckBox
        value={item.isSelected}
        onValueChange={() => handleCheckBoxChange(item.id)}
        style={styles.checkbox}
      />
      <Text style={styles.label}>Do you complete this?</Text>
      <Text>Is CheckBox selected: {item.isSelected ? '👍' : '👎'}</Text>
    </View>
  );

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Today's Schedule Screen</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.list}
        />
        <Text>You're completed: {numOfCompletedTask}/{data.length}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  list: {
    width: '100%',
  },
  item: {
    backgroundColor: 'grey',
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 18,
  },
  checkbox: {
    marginLeft: 10,
  },
  label: {
    marginTop: 10,
  },
});

export default TodaySchduleScreen;

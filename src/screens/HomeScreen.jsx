import React,{useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';

const HomeScreen = () => {
  const [date, setDate] = useState(dayjs());

  const handleDate=(params)=>{
      setDate(params.date);
      console.log(params.date);
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text><br/>
      <Text style={styles.datePicker}>Select Date Here</Text>
      <DateTimePicker
        mode="single"
        date={date}
        onChange={(params)=>handleDate(params)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
  datePicker:{
    margin:'20px'
  }
});

export default HomeScreen;

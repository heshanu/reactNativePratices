import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ValidateEmail from '../validate/emailValidate';
import ValidatePassword  from "../validate/passwordValidate";
import ValidateUsername from '../validate/usernameValidate';

const RegisterScreen=()=>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username,setUserName]=useState('');

  const isValidEmail=ValidateEmail(email);
  const isValidPassword=ValidatePassword(password);
  const isValidateUsername=ValidateUsername(username);
  const navigation = useNavigation();

  const handleRegister = () => {
    if (email === '' || password === ''|| username==='') {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }else{
      navigation.navigate('Home');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUserName}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        keyboardType="default"
        autoCapitalize="none"
      />
      <Button title="Register" onPress={handleRegister} 
      disabled={!isValidEmail || !isValidPassword || !isValidateUsername}/>
    </View>
  ); 
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
    },
    title: {
      fontSize: 24,
      marginBottom: 24,
      textAlign: 'center',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 12,
      paddingHorizontal: 8,
    },
  });
  

export default RegisterScreen;
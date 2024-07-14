import { useNavigation } from '@react-navigation/native';
import { Navigator } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { FIREBASE_AUTH } from '../src/FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { router } from 'expo-router';

const App = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  
    const navigation = useNavigation();
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My App</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry={!passwordVisible}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Icon name={passwordVisible ? 'eye-off' : 'eye'} size={20} color="#888" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
     
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>
      
      <Text style={styles.signUpText}>
        Don't have an account?{' '}
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
      <Text style={styles.signUpLink}>Sign Up</Text>
    </TouchableOpacity>
      </Text>
      
      

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 5,
    marginBottom: 15,
    paddingRight: 10,
  },
  forgotPassword: {
    color: '#fff',
    textAlign: 'right',
    marginBottom: 30,
  },
  signInButton: {
    backgroundColor: '#ffc107',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  signInText: {
    color: '#1c1c1c',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpText: {
    color: '#fff',
    textAlign: 'center',
  },
  signUpLink: {
    color: '#ffc107',
    fontWeight: 'bold',
  },
});

export default App;

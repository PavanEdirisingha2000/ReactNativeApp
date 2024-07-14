import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';



type RootStackParamList = {
  Home: undefined;
  LogOut: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.settingsIcon} onPress={() => navigation.navigate('LogOut')}>
        <Icon name="settings-outline" size={30} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.text}>Characters list goes here!</Text>
      <Text style={styles.subText}>You are free to come up with a design</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1c', 
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  settingsIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});

export default HomeScreen;

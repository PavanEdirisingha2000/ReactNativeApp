import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './src/SignInScreen';
import SignUpScreen from './src/SignUpScreen';
import LogOutScreen from './src/LogOutScreen';
import HomeScreen from './src/HomeScreen';
import LoadingScreen from './src/LoadingScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        
        
        <Stack.Screen name="LogOut" component={LogOutScreen} />
      </Stack.Navigator>
   
  );
};

AppRegistry.registerComponent('MyNewProject', () => App);

export default App;

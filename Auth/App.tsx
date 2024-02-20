import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Pages/Login';
import List from './Pages/List';
import Details from './Pages/Details';
import { Component, useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { Fire_auth } from './FirebaseConfig';
import 'tailwindcss/base';
import 'tailwindcss/components';
import 'tailwindcss/utilities';

const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout(){
  return(
  <InsideStack.Navigator>
    <InsideStack.Screen name='My todos' component={List}/>
    <InsideStack.Screen name='details' component={Details}/>
  </InsideStack.Navigator>
  );
};

export default function App() {

  const [user,setUser]=useState< User |null>(null);

  useEffect(() =>{
    onAuthStateChanged(Fire_auth, (user)=> {
      console.log('user',user);
      setUser(user);

    });
  },[]);

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Login'>
        {user ? (
          <Stack.Screen name='Inside' component={InsideLayout}  options={{headerShown: true}}/>
          ) : (
          <Stack.Screen name='Login' component={Login}  options={{headerShown: false}}/> 
          ) }
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}



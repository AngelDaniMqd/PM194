/* zona 1 importaciones*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();


export default function App() {
  const [appReady, setAppready] = useState(flase);

  useEffect(() => {
    serTimeout( async() => {
      setAppready(true);
      await SplashScreen.hideAsync();
    }, 2000);
  }, []);

}




const styles = StyleSheet.create({
background:{
  flex: 1,
  width:'100%',
  height: '100%',


}



})
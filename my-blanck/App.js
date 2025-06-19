/* zona 1 importaciones*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import React, {useState} from 'react';

const Interruptor = () => {
  const [isEnable, setIsEnable] = useState(false);
  const toggleSwitch = () => setIsEnable(previousState => !previousState);
  return(
   <View style={styles.container}>
    <Text >
      {isEnable ? 'Activado' : 'Desactivado'}
    </Text>
    <Switch
      trackColor={{false: '#767577', true: '#81b0ff'}}
      thumbColor={isEnable ? '#f5dd4b' : '#f4f3f4'}
      onValueChange={toggleSwitch}
      value={isEnable}>
    </Switch>
   </View>
  )
};

const Texto = ({style}) => {
  
  const [contenido, setContenido] = useState('Hola mundo React Native') ;
  const actualizaTexto = () => {setContenido('Hola mundo como estas?')};

 return(
  <View style ={{margin: 10}}>
    <Text style={[styles.text, style]}> {contenido} </Text>
    <Button title='actualizaTexto' onPress={actualizaTexto} color="orange" accessibilityLabel=''/>
    <Switch></Switch>
    </View>
 );
};


const Boton = () =>{
  const [texto, setTexto] = useState('Hola Cecy');
  const actualizaTexto = () => {setTexto('jasjajs')};

 return(
 <Button onPress={actualizaTexto} title={texto} />
 );
}
  

/* zona 2 main*/
export default function App() {
  return (
    <View style={styles.container}>

     <Interruptor />
    </View>
  );
}


/* zona 3 estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  
  },

  text:{
    color: 'white',
    fontSize: 20,
   
  },
  red:{backgroundColor: 'red'},
  blue:{backgroundColor: 'blue'},
  green:{backgroundColor: 'green'},
});

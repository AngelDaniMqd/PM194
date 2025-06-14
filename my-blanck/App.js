/* zona 1 importaciones*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';


const Texto = ({style}) => {
  
  const [contenido, setContenido] = useState('Hola mundo React Native') ;
  const actualizaTexto = () => {setContenido('Estado actualizado del Text')};

 return(
 <Text  style={[styles.text, style]} onPress={actualizaTexto}>{contenido}</Text>

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

      <Boton title='Chambea'> </Boton>

       <Texto style={styles.red}>Hola</Texto>
       <Texto style={styles.blue}>mundo</Texto>
       <Texto style={styles.green}>React native</Texto>
      <StatusBar style="auto" />
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
    flexDirection: 'row-reverse',
  },

  text:{
    color: 'white',
    fontSize: 20,
   
  },
  red:{backgroundColor: 'red'},
  blue:{backgroundColor: 'blue'},
  green:{backgroundColor: 'green'},
});

/* zona 1 importaciones*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';


const Texto = (props) => {
  const [contenido, setContenido] = useState('Hola mundo React Native');
  const actualizaTexto = () => {setContenido('Estado actualizado del Text')};

 return(
 <Text onPress={actualizaTexto}>{contenido}</Text>

 );
};

const Boton = (props) =>{
  const [texto, setTexto] = useState('Hola pepe');
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

       <Texto>Hola</Texto>
       <Texto>mundo</Texto>
       <Texto>React native</Texto>
      <StatusBar style="auto" />
    </View>
  );
}


/* zona 3 estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

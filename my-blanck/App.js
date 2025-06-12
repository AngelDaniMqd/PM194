/* zona 1 importaciones*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const Texto = (props) => {
  const { contenidos } = props;

 return(
 <Text>{contenidos}</Text>

 );
};




/* zona 2 main*/
export default function App() {
  return (
    <View style={styles.container}>

      <Button title='Chambea'> </Button>

       <Texto contenidos='Hola'></Texto>
       <Texto contenidos='mundo'></Texto>
       <Texto contenidos='React native'></Texto>
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

/* zona 1 importaciones*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert, ScrollView } from 'react-native';
import React, {useState} from 'react';







export default function App() {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [comment, setComment] = useState('');
  const [age, setAge] = useState('');


const showAlert = () => {
  if (nombre.trim() === '' || password.trim() === '' || age.trim() === '') {
    window.alert('Error', 'Por favor, completa todos los campos.');
  }else {
    window.alert('Nombre: ' + nombre + '\nContraseña: ' + password + '\nEdad: ' + age + '\nComentario: ' + comment);
  }
};






  return(
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}/>
      <Text style={styles.title}>Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}/>
     
      <Text style={styles.title}>Edad</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu edad"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}/>

      <Text style={styles.title}>Comentarios Multineal</Text>
      <TextInput
        style={[styles.input, {height:100, textAlignVertical:'top'} ]}
        placeholder="Escribe un comentario"
        multiline={true}
        numberOfLines={4}
        value={comment}
        onChangeText={setComment}/>
      <Text style={styles.title}>Campo de solo lectura</Text>
      <TextInput
        style={styles.input}
        value="Este es un campo de solo lectura"
        editable={false}
        selectTextOnFocus={false}>
        </TextInput>
      <Button title="Mostrar Alerta" onPress={showAlert}/>

     

    </ScrollView>

  );
}


/* Estilos */
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 17,
    color: '#333',
    marginBottom: 6,
    alignSelf: 'flex-start',
  },
  input: {
    height: 44,
    borderColor: '#bbb',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    width: '100%',
    fontSize: 15,
  },
});
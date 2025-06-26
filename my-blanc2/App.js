import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Switch, TouchableOpacity, Modal, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';

const Fondo = require('./assets/Fondos-de-pantalla-chidos-3-710x1536.webp');

export default function App() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
     const [tipoModal, setTipoModal] = useState('');
  const [mensaje, setMensaje] = useState('');
    const [mostrarSplash, setMostrarSplash] = useState(true);

     useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarSplash(false);
    }, 2000); 
    
    return () => clearTimeout(timer);
  }, []);




const registrarse = () => {
    if (!nombre || !correo) {
      setMensaje('Llena todos los campos');
      setModalVisible(true);
      return;
    }

    if (!aceptaTerminos) {
      setMensaje('Acepta los términos primero');
      setModalVisible(true);
      return;
    }

    setMensaje(`Nombre: ${nombre}\nEmail: ${correo}`);
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
    setNombre('');
    setCorreo('');
    setAceptaTerminos(false);
  };


  if (mostrarSplash) {
    return (
      <ImageBackground source={Fondo} style={styles.splashContainer} resizeMode="cover">
        <View style={styles.splashOverlay}>
          <Text style={styles.splashTitulo}>Mi App</Text>
          <Text style={styles.splashSubtitulo}>Bienvenido</Text>
        </View>
        <StatusBar style="light" />
      </ImageBackground>
    );
  }

  return (
    <ImageBackground source={Fondo} style={styles.container} resizeMode="cover">
      <View style={styles.overlay}>
        <Text style={styles.titulo}>Registro de Usuraio</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          value={nombre}
          onChangeText={setNombre}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={correo}
          onChangeText={setCorreo}
    />
        
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Aceptar términos y condiciones</Text>
          <Switch
            value={aceptaTerminos}
            onValueChange={setAceptaTerminos}
          />
</View>
        
        <TouchableOpacity style={styles.boton} onPress={registrarse}>
     <Text style={styles.botonTexto}>Registrarse</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={cerrarModal}
      >
   <View style={styles.modalFondo}>
          <View style={styles.modalCaja}>
           <Text style={styles.modalTitulo}>
              {tipoModal === 'error' ? 'error' : tipoModal === 'terminos' ? 'terminos no aceptados' : 'Registro completooooo'}
            </Text>
            <Text style={styles.modalMensaje}>{mensaje}</Text>
            <TouchableOpacity style={styles.modalBoton} onPress={cerrarModal}>
              <Text style={styles.modalBotonTexto}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <StatusBar style="light" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {



    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    padding: 30,
  },
  titulo: {
    fontSize: 24,
    color: 'white',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {


    backgroundColor: 'white',
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  switchText: {
    color: 'white',
    flex: 1,
    marginRight: 10,
  },
  boton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  botonTexto: {
    color: 'white',
    fontSize: 16,
  },
  modalFondo: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalCaja: {
    backgroundColor: 'white',
    padding: 20,



    margin: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalTitulo: {
    fontSize: 18,
    marginBottom: 10,

  },
  modalMensaje: {

    marginBottom: 15,
    textAlign: 'center',
  },
  modalBoton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    minWidth: 80,
  },
  modalBotonTexto: {
    color: 'white',


    textAlign: 'center',
  },
   splashContainer: {
    flex: 1,
  },


  splashOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashTitulo: {
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  splashSubtitulo: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    opacity: 0.8,
  },
});
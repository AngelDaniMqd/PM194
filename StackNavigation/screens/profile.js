import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Ionicons name="person-outline" size={28} color="green" />
        <Text style={styles.title}>Pantalla de Perfil</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.orangeButton]}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.buttonText}>Ir a Configuración</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, styles.greenButton]}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Volver a Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconRow: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'green',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '80%',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center',
  },
  orangeButton: {
    backgroundColor: '#FF8C00',
  },
  greenButton: {
    backgroundColor: '#28A745',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
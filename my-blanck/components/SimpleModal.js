import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function SimpleModal({ visible, onClose, title = "Modal" }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      {/* Overlay - fondo oscuro */}
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          {/* Modal container - evita que se cierre al tocar dentro */}
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              
              {/* Header del Modal */}
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>{title}</Text>
                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>✕</Text>
                </TouchableOpacity>
              </View>
              
              {/* Contenido del Modal */}
              <View style={styles.modalBody}>
                <Text style={styles.emoji}>🎉</Text>
                <Text style={styles.modalText}>
                  ¡Este es un modal sencillo!
                </Text>
                <Text style={styles.modalDescription}>
                  Este modal muestra información importante. 
                  Puedes personalizarlo con cualquier contenido que necesites.
                  
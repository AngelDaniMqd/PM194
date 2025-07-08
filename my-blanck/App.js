import React, { useState, useEffect } from 'react'
import {
  View, Text, SectionList, TouchableOpacity,
  ActivityIndicator, ScrollView, Image, StyleSheet, Modal, SafeAreaView
} from 'react-native'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  const categorias = [ 'Aventura', 'Terror', 'Ciencia Ficción', 'Romance']
  const mapa = { Ficción:'Fiction', Historia:'History', Tecnología:'Technology', Aventura:'Adventure', 
                 Terror:'Horror', 'Ciencia Ficción':'Science Fiction', Romance:'Romance' }
  const [categoria, setCategoria] = useState(categorias[0])
  const [secciones, setSecciones] = useState([])
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState(false)
  const [libroSeleccionado, setLibroSeleccionado] = useState(null)

  useEffect(()=>{
    setCargando(true); setError(false)
    fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${mapa[categoria]}&maxResults=40`)
      .then(r=>r.json())
      .then(j=>{
        const items = j.items || []
        const grupos = items.reduce((ac,x)=>{
          const autor = x.volumeInfo.authors?.[0]||'Desconocido'
          const libro = {
            id: x.id,
            titulo: x.volumeInfo.title,
            portada: x.volumeInfo.imageLinks?.thumbnail,
            editorial: x.volumeInfo.publisher||'',
            descripcion: x.volumeInfo.description||'Sin descripción disponible'
          }
          ac[autor] = ac[autor]||[]
          ac[autor].push(libro)
          return ac
        },{})
        
        const secs = Object.keys(grupos)
          .filter(autor => grupos[autor].length >= 2)
          .map(a=>({ title:a, data:grupos[a] }))
        setSecciones(secs)
      })
      .catch(()=>setError(true))
      .finally(()=>setCargando(false))
  },[categoria])

  if (cargando) return <SafeAreaView style={styles.loader}><ActivityIndicator size="large"/></SafeAreaView>
  if (error)   return <SafeAreaView style={styles.loader}><Text style={styles.errorText}>Error de conexión</Text></SafeAreaView>

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {categorias.map(c=>(
          <TouchableOpacity
            key={c}
            style={[styles.button, c===categoria&&styles.activeButton]}
            onPress={()=>setCategoria(c)}
          >
            <Text style={[styles.buttonText, c===categoria&&styles.activeButtonText]}>{c}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <SectionList
        sections={secciones}
        keyExtractor={item=>item.id}
        renderSectionHeader={({section})=><Text style={styles.author}>{section.title}</Text>}
        renderItem={({item})=>(
          <TouchableOpacity 
            style={styles.bookItem}
            onPress={()=>setLibroSeleccionado(item)}
          >
            {item.portada && <Image source={{uri:item.portada}} style={styles.cover}/>}
            <View style={styles.details}>
              <Text style={styles.title} numberOfLines={2}>{item.titulo}</Text>
              <Text style={styles.publisher}>{item.editorial}</Text>
              <Text style={styles.description} numberOfLines={3}>{item.descripcion}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      
      <Modal
        visible={libroSeleccionado !== null}
        animationType="slide"
        transparent={true}
        onRequestClose={()=>setLibroSeleccionado(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={()=>setLibroSeleccionado(null)}
            >
              <Text style={styles.closeButtonText}>×</Text>
            </TouchableOpacity>
            {libroSeleccionado && (
              <>
                <View style={styles.modalHeader}>
                  {libroSeleccionado.portada && (
                    <Image source={{uri:libroSeleccionado.portada}} style={styles.modalCover}/>
                  )}
                  <View style={styles.modalTitleSection}>
                    <Text style={styles.modalTitle}>{libroSeleccionado.titulo}</Text>
                    <Text style={styles.modalPublisher}>{libroSeleccionado.editorial}</Text>
                  </View>
                </View>
                <ScrollView style={styles.modalDescriptionContainer}>
                  <Text style={styles.modalDescription}>{libroSeleccionado.descripcion}</Text>
                </ScrollView>
              </>
            )}
          </View>
        </View>
      </Modal>
      
      <StatusBar style="auto"/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    padding:12
  },
  header: {
    flexDirection:'row',
    justifyContent:'space-around',
    marginBottom:12,
    marginTop:8
  },
  button: {
    paddingVertical:8,
    paddingHorizontal:16,
    borderRadius:20,
    backgroundColor:'#e9ecef'
  },
  activeButton: {
    backgroundColor:'#007bff'
  },
  buttonText: {
    color:'#495057',
    fontSize:14,
    fontWeight:'500'
  },
  activeButtonText: {
    color:'#fff'
  },
  author: {
    fontSize:16,
    fontWeight:'bold',
    backgroundColor:'#f8f9fa',
    padding:8,
    marginTop:8
  },
  bookItem: {
    flexDirection:'row',
    backgroundColor:'#ffffff',
    marginVertical:4,
    borderRadius:8,
    elevation:2,
    shadowColor:'#000',
    shadowOffset:{width:0,height:1},
    shadowOpacity:0.1,
    shadowRadius:2
  },
  cover: {
    width:60,
    height:90,
    margin:8,
    borderRadius:4
  },
  details: {
    flex:1,
    padding:8,
    justifyContent:'space-between'
  },
  title: {
    fontSize:15,
    fontWeight:'600',
    color:'#212529',
    marginBottom:4
  },
  publisher: {
    fontSize:12,
    color:'#6c757d',
    marginBottom:6
  },
  description: {
    fontSize:12,
    color:'#495057',
    lineHeight:16
  },
  loader: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  errorText: {
    fontSize:16,
    color:'#dc3545'
  },
  modalOverlay: {
    flex:1,
    backgroundColor:'rgba(0,0,0,0.5)',
    justifyContent:'center',
    alignItems:'center',
    padding:10
  },
  modalContent: {
    backgroundColor:'#fff',
    borderRadius:12,
    padding:20,
    height:'90%',
    width:'95%',
    maxHeight:'90%'
  },
  closeButton: {
    position:'absolute',
    right:10,
    top:10,
    zIndex:1,
    width:30,
    height:30,
    borderRadius:15,
    backgroundColor:'#f8f9fa',
    justifyContent:'center',
    alignItems:'center'
  },
  closeButtonText: {
    fontSize:20,
    color:'#495057',
    fontWeight:'bold'
  },
  modalHeader: {
    flexDirection:'row',
    marginBottom:16,
    paddingTop:10
  },
  modalCover: {
    width:80,
    height:120,
    borderRadius:6,
    marginRight:16
  },
  modalTitleSection: {
    flex:1,
    justifyContent:'center'
  },
  modalTitle: {
    fontSize:18,
    fontWeight:'bold',
    color:'#212529',
    marginBottom:8
  },
  modalPublisher: {
    fontSize:14,
    color:'#6c757d'
  },
  modalDescriptionContainer: {
    flex:1
  },
  modalDescription: {
    fontSize:15,
    color:'#495057',
    lineHeight:22,
    textAlign:'justify'
  }
})
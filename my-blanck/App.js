import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Button,
} from "react-native";

export default function App() {
  const [Loading, setLoading] = useState(false);
  const [Mensaje, setMensaje] = useState("Cargando...");

  const simularCarga = () => {
    setLoading(true);
    setMensaje("Cargando...");
    setTimeout(() => {
      setLoading(false);
      setMensaje("Carga completa");
    }, 3000);
  };

  return (
    <View style={style.contaier}>
      <Text style={style.titulo}>Carga</Text>
      {Loading ? (
        <>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={style.texto}>CARGANDO....</Text>
        </>
      ) : (
        <>
          <Button title="Iniciar Carga" onPress={simularCarga} />
          {Mensaje !== "" && <Text style={style.exito}>{Mensaje}</Text>}
        </>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  contaier: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
  },
  texto: {
    fontSize: 18,
    color: "#555",
    marginTop: 10,
  },
  exito: {
    fontSize: 18,
    color: "green",
    marginTop: 10,
  },
});
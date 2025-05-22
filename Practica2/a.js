const persona = {
    nombre: "Ivan Isay",
    edad: 37, 
    direccion: {
        ciudad: "Qro",
        pais: "MX"
    }

}
const resultado = 'Me llamo ' + persona.nombre + ', tengo ' + persona.edad + ' años y vivo en ' + persona.direccion.ciudad;
console.log(resultado);
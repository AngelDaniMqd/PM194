const saludoPersonalizado = (nombre, edad) => {
    let saludo = "Hola, " + nombre + ". Tienes " + edad + " años.";
    return saludo;
}
 let saludo = saludoPersonalizado("Angel", 20)
 console.log(saludo);
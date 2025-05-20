const persona = [
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "Maria", edad: 28},
];


const r= persona.find((persona => persona.nombre === "Luis"));
console.log(r);

console.log ("--------------------------------------------");

persona.forEach((persona) => {
    console.log('Nombre: ' + persona.nombre, 'Edad: ' + persona.edad);
});


console.log ("--------------------------------------------");

const suma = persona.reduce((x, persona) => x + persona.edad, 0);
console.log('suma de edades:' + suma);
const productos = [
    {nombre: "Laptop", precio: 12000},
    {nombre: "Mouse", precio: 250},
    {nombre: "Teclado", precio: 750},
    {nombre: "Monitor", precio: 3000},
];

const r= productos.filter((producto) => producto.precio > 1000).map((producto) => `${producto.nombre} cuesta ${producto.precio}`);
console.log(r);

class Cola {
    constructor(maxSize, tipoDato) {
        this.items = [];
        this.maxSize = maxSize; // Tamaño máximo de la cola             
        this.tipoDato = tipoDato; // Tipo de dato que se va a almacenar  ==  diferencia, ella no la tiene.
    }

    CrearCola() {
        this.items = [];
    }

    Insertar(element) {
        if (this.ColaLlena()) {
            return "La cola está llena";
        }
        if (typeof element !== this.tipoDato) {
            return `El tipo de dato debe ser ${this.tipoDato}`;
        }
        this.items.push(element);
    }

    Quitar() {
        if (this.ColaVacia()) {
            return "La cola está vacía";
        }
        return this.items.shift();
    }

    Frente() {
        if (this.ColaVacia()) {
            return "La cola está vacía";
        }
        return this.items[0];
    }

    ColaVacia() {
        return this.items.length === 0;
    }

    ColaLlena() {
        return this.items.length === this.maxSize;
    }

    Mostrar() {
        console.log(this.items);
    }
}

// Prueba de la cola
let miCola = new Cola(3, "string"); // Crear una cola con tamaño máximo de 3 y tipo de dato "string"

miCola.CrearCola();
miCola.Insertar("Cliente 1");
miCola.Insertar("Cliente 2");
miCola.Insertar("Cliente 3");
miCola.Mostrar();
console.log("Atendiendo:", miCola.Quitar());
console.log("Siguiente en la fila:", miCola.Frente());
console.log("¿Está vacía la cola?:", miCola.ColaVacia());
console.log("¿Está llena la cola?:", miCola.ColaLlena());


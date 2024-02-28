function qualTriangulo(a, b, c) {
    if (a === 0 || b === 0 || c === 0) {
        return "Entrada inválida, o valor inserido não corresponde a um triângulo";
    }
    else {
        // equilátero:
        if (a === b && b === c) {
            return 'Equilátero';
        }
        // isósceles:
        else if (a === b || b === c || a === c) {
            return 'Isósceles';
        }
        // escaleno
        else {
            return 'Escaleno';
        }
    }
}

// Equilátero:
console.log(qualTriangulo(3, 3, 3)); 

// Isósceles:
console.log(qualTriangulo(3, 4, 4)); 

// Escaleno:
console.log(qualTriangulo(3, 4, 5)); 

// Entrada Inválida:
console.log(qualTriangulo(0, 0, 0));
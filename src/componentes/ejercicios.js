let letra, veces, mensaje;

letra = prompt('Ingrese una letra'); 

veces = parseInt(prompt('ingrese un numero'));

for (conteo = 1; conteo < veces; conteo++) {
    mensaje += conteo + letra;
} 

alert(mensaje)
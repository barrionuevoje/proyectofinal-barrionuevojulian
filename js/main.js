//Funcion principal
function calcularPromedioDeNotas(){
    //Variables locales
    let promedio;
    
    let suma = 0;
    let aalumnos = String(prompt("Nombre del Alumno"));
    let nnotas = parseInt(prompt("Digite la cantidad de notas a promediar "));
    
    //Recorre la cantidad de notas ingresadas. Luego pide que a cada una se les de un valor numero para luego sumar las notas.
    for(let i= 0; i < nnotas; i++){
        
        let notas = parseInt(prompt("Digite la nota porfavor " + i));
        suma = suma + notas;
    }

    //Promedia la suma de las notas colocadas. 
    promedio = suma / nnotas;

    //Muestra en pantalla el resultado del promedio junto al nombre del alumno.
    document.write("El resultado del alumno " +aalumnos+ " es: " + promedio);
    
   
    

}

//Se llama a la funcion.

calcularPromedioDeNotas()
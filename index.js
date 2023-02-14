// validaremos en que semana se registraran alumnos
// de un objeto con informacion vamos a extraer sus valores e imprimirlos en el DOM

let alumnos = [{
    nombre: "Adrian Jurado",
    email: "ajuradof1@gmail.com",
    materia: "Química"
},{
    nombre: "Naomi Salinas",
    email: "naomi.jsc@hotmail.com",
    materia: "Literatura"
},{
    nombre: "Perla Jurado",
    email: "pera@gmail.com",
    materia: "Agronomia"
},{
    nombre: "Yolanda Oliveros",
    email: "lamas_linda@gmail.com",
    materia: "Español"
},{
    nombre: "Daniela Jurado",
    email: "danes@gmail.com",
    materia: "Analisis"
},];

const boton = document.querySelector(".btn-confirmar");
const contenedor = document.querySelector(".grid-container");

let htmlCode = "";

for (alumno in alumnos) {
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    htmlCode += `
    <div class="grid-item nombre">${nombre}</div>
		<div class="grid-item email">${email}</div>
		<div class="grid-item materia">${materia}</div>
		<div class="grid-item semana">
			<select class="semana-elegida">
				<option value="Semana 1">Semana 1</option>
				<option value="Semana 2">Semana 2</option>
			</select>
		</div>
        `;
}

contenedor.innerHTML = htmlCode;

boton.addEventListener("click",()=>{
    let confirmar = confirm("¿Realmente quieres confirmar?")
    if (confirmar) {
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll(".semana")
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        for (elemento in elementos){
        semana = elementos[elemento];
        semana.innerHTML = semanasElegidas[elemento].value;
    }
    }
})
let elIdioma = "";

function cambioIdioma(){
    if(idioma == "espanol"){
        idioma = "ingles";
        console.log(`Mutaste a idioma: ${idioma}`)
        elIdioma = document.getElementById("idioma").innerHTML = "Version Español"
        elIdioma = document.getElementById("acerca").innerHTML = "ABOUT ME"
        elIdioma = document.getElementById("proyectos").innerHTML = "PROJECTS"
        elIdioma = document.getElementById("contacto").innerHTML = "CONTACT"
        elIdioma = document.getElementById("home1").innerHTML = "Welcome to my PortFolio"
        elIdioma = document.getElementById("home2").innerHTML = "I am a Full Stack developer, HTML, CSS, JavaScript and Nodejs are my preferred tools."
        elIdioma = document.getElementById("home3").innerHTML = "I invite you to meet me..."

    }
    else{
        idioma = "espanol"
        console.log(`Mutaste a idioma: ${idioma}`)
        elIdioma = document.getElementById("idioma").innerHTML = "English Version"
        elIdioma = document.getElementById("acerca").innerHTML = "ACERCA DE MI"
        elIdioma = document.getElementById("proyectos").innerHTML = "PROYECTOS"
        elIdioma = document.getElementById("contacto").innerHTML = "CONTACTO"
        elIdioma = document.getElementById("home1").innerHTML = "Bienvenido a mi PortFolio"
        elIdioma = document.getElementById("home2").innerHTML = "Soy desarrollador Full Stack, HTML, CSS, JavaScript y Nodejs son mis herramientas preferidas."
        elIdioma = document.getElementById("home3").innerHTML = "Te invito a que me conozcas.."
    }
}
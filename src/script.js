let elIdioma = "";

function cambioIdioma(){
    if(idioma == "espanol"){
        idioma = "ingles";
        console.log(`Mutaste a idioma: ${idioma}`)
        elIdioma = document.getElementById("idioma").innerHTML = "Version Español"
        elIdioma = document.getElementById("acerca").innerHTML = "ABOUT ME"
        elIdioma = document.getElementById("acerca2").innerHTML = "About me"
        elIdioma = document.getElementById("proyectos").innerHTML = "PROJECTS"
        elIdioma = document.getElementById("contacto").innerHTML = "CONTACT"
        elIdioma = document.getElementById("home1").innerHTML = "Welcome to my PortFolio"
        elIdioma = document.getElementById("home2").innerHTML = "I am a Full Stack developer, HTML, CSS, JavaScript and Nodejs are my preferred tools."
        elIdioma = document.getElementById("home3").innerHTML = "I invite you to meet me..."
        elIdioma = document.getElementById("sobreMi1").innerHTML = "Analyst and Full Stack Developer."
        elIdioma = document.getElementById("sobreMi2").innerHTML = "I am passionate about continuous learning and I enjoy applying new technologies to solve a problem."
        elIdioma = document.getElementById("sobreMi3").innerHTML = "I like new challenges. Currently venturing into the freelance world."
        elIdioma = document.getElementById("proyectos1").innerHTML = "Completed Projects"
        
    }
    else{
        idioma = "espanol"
        console.log(`Mutaste a idioma: ${idioma}`)
        elIdioma = document.getElementById("idioma").innerHTML = "English Version"
        elIdioma = document.getElementById("acerca").innerHTML = "ACERCA DE MI"
        elIdioma = document.getElementById("acerca2").innerHTML = "Acerca de mi"
        elIdioma = document.getElementById("proyectos").innerHTML = "PROYECTOS"
        elIdioma = document.getElementById("contacto").innerHTML = "CONTACTO"
        elIdioma = document.getElementById("home1").innerHTML = "Bienvenido a mi PortFolio"
        elIdioma = document.getElementById("home2").innerHTML = "Soy desarrollador Full Stack, HTML, CSS, JavaScript y Nodejs son mis herramientas preferidas."
        elIdioma = document.getElementById("home3").innerHTML = "Te invito a que me conozcas.."
        elIdioma = document.getElementById("sobreMi1").innerHTML = "Analista y Full Stack Developer."
        elIdioma = document.getElementById("sobreMi2").innerHTML = "Soy un apasionado del aprendizaje continuo y disfruto aplicar nuevas tecnologías para llegar a la resolución de un problema."
        elIdioma = document.getElementById("sobreMi3").innerHTML = "Me gustan los nuevos desafíos. Actualmente incursionando en el mundo freelance."
        elIdioma = document.getElementById("proyectos1").innerHTML = "Proyectos Finalizados"
    }
}
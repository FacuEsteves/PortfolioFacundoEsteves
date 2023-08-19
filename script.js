let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){

    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("genexus");
        habilidades[3].classList.add("csharp");
        habilidades[4].classList.add("mssql");
        habilidades[5].classList.add("ws");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("trabajo");
        habilidades[8].classList.add("dedicacion");
    }
}


window.onscroll = function(){
    efectoHabilidades();
} 

document.getElementById("downloadButton").addEventListener("click", function() {

    var fileUrl = "file/CV Facundo Esteves.pdf";

    var fileName = "CV_Facundo_Esteves.pdf";

    var link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;  


    link.click();
});
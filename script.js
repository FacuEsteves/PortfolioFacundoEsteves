let menuVisible = false;

function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("genexus");
    habilidades[3].classList.add("aspnet");
    habilidades[4].classList.add("csharp");
    habilidades[5].classList.add("java");
    habilidades[6].classList.add("mssql");
    habilidades[7].classList.add("ws");
    habilidades[8].classList.add("comunicacion");
    habilidades[9].classList.add("trabajo");
    habilidades[10].classList.add("dedicacion");
  }
}

window.onscroll = function () {
  efectoHabilidades();
};

document
  .getElementById("downloadRubrica")
  .addEventListener("click", function () {
    var fileUrl = "https://drive.google.com/file/d/1ArCVbLPsAsGArdeZQTHgJxDU8lpMu_mO/view?usp=sharing";

    var fileName = "CV_Facundo_Esteves.pdf";

    var link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;

    link.click();
  });

document
  .getElementById("downloadCVes")
  .addEventListener("click", function () {
    var fileUrl = "https://drive.google.com/file/d/1_EQa0_4RN1SM_qy1Ch2DpqdZyY3z-51n/view?usp=sharing";

    var fileName = "CV_Facundo_Esteves.pdf";

    var link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;

    link.click();
  });

document
  .getElementById("downloadCVin")
  .addEventListener("click", function () {
    var fileUrl = "https://drive.google.com/file/d/1_CwSW6wmCQTi7IkVXainq1749HwKUTjI/view?usp=sharing";

    var fileName = "CV_Facundo_Esteves.pdf";

    var link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;

    link.click();
  });

const repoOwner = "FacuEsteves";
const repoName = "PortfolioFacundoEsteves";
const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const lastModified = new Date(data.pushed_at);
    const lastModifiedText = document.getElementById("lastModifiedText");
    lastModifiedText.textContent += lastModified.toLocaleString();
  })
  .catch((error) => {
    console.error("Error al obtener la información del repositorio:", error);
  });

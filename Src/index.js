

function generatePoem(event){
    event.preventDefault();
    
    new Typewriter('#poem', {
        strings: "La tombe dit à la rose",
        autoStart: true,
        cursor:"",
        delay: 1,
      });
}

let peomFormGenerator = document.querySelector("#poem-generator-form");
peomFormGenerator.addEventListener("submit", generatePoem);
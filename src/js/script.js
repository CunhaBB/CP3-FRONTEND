const themeToogle = document.getElementById("theme");
    themeToogle.addEventListener('click', ()=>{
        document.body.classList.toggle("light-mode")
    })

    window.onload = function(){
    const intro = document.getElementById("inicio");

    setTimeout(() => {
        intro.classList.add("efeito-out");
        setTimeout(() => {
            intro.style.display = "none";
        }, 1000);
    }, 3000);
}

const botaoportifolio = document.getElementById("btn-main");

botaoportifolio.addEventListener("click", function() {
    window.location.href = "./pages/portifolio.html";
});
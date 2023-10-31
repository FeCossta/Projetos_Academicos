const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");




  
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e)

        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected");
        })

        const button = e.target;

        const id = button.getAttribute("id");

        button.querySelector(".color").classList.add("selected");

        image.classList.add("changing");
        image.setAttribute("src", `css/img/iphone_${id}.jpg`);

        setTimeout(() => {
            image.classList.toggle("changing");
        },300)
    })
})


let isCelularVisible = false;

document.addEventListener("DOMContentLoaded", function (){
    const fichaBtn = document.getElementById("ficha-btn");

    fichaBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const celularElements = document.querySelectorAll(".celular");
        celularElements.forEach((element) => {
            if (isCelularVisible) {
                element.classList.add("hide");
            } else {
                element.classList.remove("hide");
            }
        });

        isCelularVisible = !isCelularVisible; // Alterna o estado
    });

    document.addEventListener("keyup", (e) => {
        if (e.key === "Escape") {
            const celularElements = document.querySelectorAll(".celular");
            celularElements.forEach((element) => {
                element.classList.add("hide");
            });

            isCelularVisible = false; // Define o estado como oculto
        }
    });
});

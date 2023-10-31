const buttons = document.querySelectorAll(".podList img");
const image = document.querySelector(".shower");
let currentImageID = null;


buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e);
        const button = e.target;

        const id = button.getAttribute("class");

        console.log(id)

        if (id !== currentImageID) {
            image.setAttribute("src", `img/Air${id}.png`);
            currentImageID = id;
        }

        image.classList.add("changing");
        image.classList.add("colorir");


        setTimeout(() => {
            image.classList.toggle("changing");
        }, 400)

    })
    document.addEventListener("keyup", (e) => {
        if (e.key === "Escape") {
            console.log(e.key)
            image.removeAttribute("src");
            image.classList.remove("colorir");
            currentImageID = null;
        }
    })
})

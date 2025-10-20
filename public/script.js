let barra_lateral_div = document.querySelector("#barra_lateral")

let barra_econdida = true

let desplegable_div = document.querySelector("#desplegable")

desplegable_div.addEventListener("click", () => {

    if (barra_econdida) {

        barra_lateral_div.classList.remove("hiden")

        barra_econdida = false

    }

})

/*let disco_logo_img = document.querySelector("#disco_logo")

disco_logo_img.addEventListener("click", () => {

    if (!barra_econdida) {

        barra_lateral_div.classList.add("hiden");
        
        barra_econdida = true;

    }

})*/


document.addEventListener("click", (e) => {

    if (!barra_econdida) {

        if (!barra_lateral_div.contains(e.target) && !desplegable_div.contains(e.target)) {

            barra_lateral_div.classList.add("hiden");
            barra_econdida = true;

        }

    }

});





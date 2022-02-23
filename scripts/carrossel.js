/* concluido, nao alterar */

let time = 3000,
    currentImageIndex = 0,
    
    images_C = document.
            querySelectorAll(".slider-c img")

    images_B = document.
            querySelectorAll(".slider-b img")

    images_A = document.
            querySelectorAll(".slider-a img")
            

    max = 6;

function nextImage() {
    
    images_A[currentImageIndex]
        .classList.remove("selected")
        
    images_C[currentImageIndex]
        .classList.remove("selected")

    images_B[currentImageIndex]
        .classList.remove("selected")


    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images_C[currentImageIndex]
        .classList.add("selected")

    images_B[currentImageIndex]
            .classList.add("selected")

    images_A[currentImageIndex]
        .classList.add("selected")

}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)

import confetti from "canvas-confetti";
const button = document.querySelector("button")

button.onclick = ()=>{
    const lastCanvas = document.querySelector("canvas")
    lastCanvas?.remove()
    
    const myCanvas = document.createElement("canvas")
    myCanvas.width  = window.innerWidth
    myCanvas.height = window.innerHeight
    document.body.appendChild(myCanvas)
    const myConfetti = confetti.create(myCanvas, {
        resize: true,
        useWorker: true
    })

    myConfetti({
    particleCount: 100,
    spread: 160
    });

    myConfetti()
}

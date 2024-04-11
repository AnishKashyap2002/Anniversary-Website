const text = document.getElementById("text");
const gateLeft = document.getElementById("gate-left");
const gateRight = document.getElementById("gate-right");
let target = document.getElementById("target");

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    text.style.marginTop = value * -0.5 + "px";
    gateLeft.style.left = value * 0.35 + "px";
    // gateLeft.style.marginTop = value * 1.5 + "px";
    gateRight.style.left = value * -0.35 + "px";
    // gateRight.style.marginTop = value * 1.5 + "px";
});

game.addEventListener("click",()=> {
    target.addEventListener('mouseover', win);

    function win() {
        target.style.transform = `scale(3)`;
        setTimeout(s,200);

        function s() {
            target.style.transform = `scale(1)`;

        }
        
        clearInterval(timer);
        game.removeEventListener("click");
    }

    let timer = setInterval(jump, 400);
    let counter = 0;

    function jump() {
        target.style.transform = `scale(1)`;

        let x = Math.floor(Math.random() * (1000 - 0 + 1) - 0);
        let y = Math.floor(Math.random() * (500 - 0 + 1) - 0);

        counter++;
        target.style.transform = `translate(${x}px, ${y}px)`;
    }
    
})

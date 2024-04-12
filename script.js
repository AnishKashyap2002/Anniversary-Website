const text = document.getElementById("text");
const gateLeft = document.getElementById("gate-left");
const gateRight = document.getElementById("gate-right");
const info = document.getElementById("info")

// window.addEventListener("scroll", () => {
//     let value = window.scrollY;
//     text.style.marginTop = value * -0.5 + "px";
//     gateLeft.style.left = value * 0.35 + "px";
//     // gateLeft.style.marginTop = value * 1.5 + "px";
//     gateRight.style.left = value * -0.35 + "px";
//     // gateRight.style.marginTop = value * 1.5 + "px";
// });

let target = document.getElementById("target");
let game = document.getElementById("game"); // assuming "game" is the parent element

game.addEventListener("click", () => {
    target.addEventListener("mouseover", win);

    function win() {
        target.style.transform = `scale(3)`;
        setTimeout(s, 200);

        function s() {
            target.style.transform = `scale(1)`;
            info.style.opacity = "1";
        }

        clearInterval(timer);
        game.removeEventListener("click");
    }

    let timer = setInterval(jump, 400);
    let counter = 0;

    function jump() {
        target.style.transform = `scale(1)`;
        info.style.opacity = "0";

        let parentWidth = game.clientWidth;
        let parentHeight = game.clientHeight;
        let targetWidth = target.clientWidth;
        let targetHeight = target.clientHeight;

        let maxX = parentWidth - targetWidth;
        let maxY = parentHeight - targetHeight;

        let x = Math.floor(Math.random() * (maxX + 1));
        let y = Math.floor(Math.random() * (maxY + 1));

        counter++;
        target.style.transform = `translate(${x}px, ${y}px)`;
    }
});

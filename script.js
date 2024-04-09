const text = document.getElementById("text");
const gateRight = document.getElementById("gate-right");
const gateLeft = document.getElementById("gate-left");


window.addEventListener("scroll", () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + "px";
    gateLeft.style.left = value * 0.35 + "px";
    gateRight.style.left = value * -0.35 + "px";
});

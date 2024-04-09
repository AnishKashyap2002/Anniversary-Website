const text = document.getElementById("text");
const gateLeft = document.getElementById("gate-left");
const gateRight = document.getElementById("gate-right");

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    text.style.marginTop = value * -0.5 + "px";
    gateLeft.style.left = value * 0.35 + "px";
    // gateLeft.style.marginTop = value * 1.5 + "px";
    gateRight.style.left = value * -0.35 + "px";
    // gateRight.style.marginTop = value * 1.5 + "px";
});

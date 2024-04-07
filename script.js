const text = document.getElementById("text");
const treeLeft = document.getElementById("tree-left");
const treeRight = document.getElementById("tree-right");

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + "px";
    treeLeft.style.left = value * -1.5 + "px";
    treeRight.style.left = value * 1.5 + "px";
});

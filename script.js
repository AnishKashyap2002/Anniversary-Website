const text = document.getElementById("text");
const gateLeft = document.getElementById("gate-left");
const gateRight = document.getElementById("gate-right");

// window.addEventListener("scroll", () => {
//     let value = window.scrollY;
//     if (gateLeft.style.left > gateRight.style.left) return;

//     text.style.marginTop = value * -0.5 + "px";
//     gateLeft.style.left = value * 0.35 + "px";
//     // gateLeft.style.marginTop = value * 1.5 + "px";
//     gateRight.style.left = value * -0.35 + "px";
//     // gateRight.style.marginTop = value * 1.5 + "px";
// });
function getRandomPosition(
    containerWidth,
    containerHeight,
    ballWidth,
    ballHeight
) {
    var x = Math.floor(Math.random() * (containerWidth - ballWidth));
    var y = Math.floor(Math.random() * (containerHeight - ballHeight));
    return [x, y];
}

function moveBall() {
    var container = document.getElementById("game");
    var ball = document.getElementById("heart");
    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;
    var ballWidth = ball.offsetWidth;
    var ballHeight = ball.offsetHeight;

    var newPosition = getRandomPosition(
        containerWidth,
        containerHeight,
        ballWidth,
        ballHeight
    );
    var newX = newPosition[0];
    var newY = newPosition[1];

    ball.style.left = newX + "px";
    ball.style.top = newY + "px";
}

window.onload = function () {
    moveBall();
    setInterval(moveBall, 300); // Move the ball every second (1000 milliseconds)
};

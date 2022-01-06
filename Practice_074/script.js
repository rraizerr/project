const btnTop = document.querySelector('.top'),
    btnLeft = document.querySelector('.left'),
    btnRight = document.querySelector('.right'),
    btnDown = document.querySelector('.down'),
    elem = document.querySelector('.box');  
let pos = [0, 0];

function myAnimationRight() {
    pos[0]++;
    elem.style.left = pos[0] + "px";

    if (pos[0] < 300) {
        requestAnimationFrame(myAnimationRight);
        console.log(pos);
    }
}

function myAnimationLeft() {
    pos[0]--;
    elem.style.left = pos[0] + "px";

    if (pos[0] > 0) {
        requestAnimationFrame(myAnimationLeft);
        console.log(pos);
    }
}

function myAnimationDown() {
    pos[1]++;
    elem.style.top = pos[1] + "px";

    if (pos[1] < 300) {
        requestAnimationFrame(myAnimationDown);
        console.log(pos);
    }
}

function myAnimationTop() {
    pos[1]--;
    elem.style.top = pos[1] + "px";

    if (pos[1] > 0) {
        requestAnimationFrame(myAnimationTop);
        console.log(pos);
    }
}

btnRight.addEventListener('click', () => requestAnimationFrame(myAnimationRight));
btnDown.addEventListener('click', () => requestAnimationFrame(myAnimationDown));

btnLeft.addEventListener('click', () => requestAnimationFrame(myAnimationLeft));
btnTop.addEventListener('click', () => requestAnimationFrame(myAnimationTop));

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return;
    }
    
    switch (event.code) {
        case "ArrowDown":
            myAnimationDown();
            break;
        case "ArrowUp":
            myAnimationTop();
            break;
        case "ArrowLeft":
            myAnimationLeft();
            break;
        case "ArrowRight":
            myAnimationRight();
            break;
    }
});
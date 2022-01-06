const btn = document.querySelector('.btn'),
    btnReturn = document.querySelector('.return'),
    elem = document.querySelector('.box');  
let pos = 0;

// function myAnimation() {
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//     }
// }

function myAnimationDown() {
    pos++;
    elem.style.top = pos + "px";
    elem.style.left = pos + 'px';

    if (pos < 300) {
        requestAnimationFrame(myAnimationDown);
        console.log(pos);
    }
}

function myAnimationTop() {
    pos--;
    elem.style.top = pos + "px";
    elem.style.left = pos + 'px';

    if (pos > 0) {
        requestAnimationFrame(myAnimationTop);
        console.log(pos);
    }
}

btn.addEventListener('click', () => requestAnimationFrame(myAnimationDown));
btnReturn.addEventListener('click', () => requestAnimationFrame(myAnimationTop));
// let id = requestAnimationFrame(myAnimation);
// cancelAnimationFrame(id);
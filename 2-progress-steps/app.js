// const progressBar = document.getElementById('#progress');
// const circle = document.querySelectorAll('.circle');
// const btnNext = document.getElementById('#next');
// const btnPrev = document.getElementById('#prev');

// document.getElementById('#next').addEventListener('click', moveBar);

// const moveBar = () => {
//     const bar = document.getElementById('#progress');
//     let width = 1;

//     const rate = () => {
//         if (width >= 100) {
//             clearInterval(interval);
//         } else {
//         width++;
//         bar.style.width = `${width}%`;
//         }
//     }
// };

const progress = document.getElementById('progress');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++

    // console.log(currentActive);

    if(currentActive > circles.length) {
        currentActive = circles.length;
    }  

    // console.log(currentActive);

    update();
});

prev.addEventListener('click', () => {
    currentActive--

    // console.log(currentActive);

    if(currentActive < 1) {
        currentActive = 1;
    }  

    update();
});

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length - 1) / (circles.length -1 ) * 100 + '%'; 

    if(currentActive === 1) {
        prev.disabled = true;
    } else if(currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }

};
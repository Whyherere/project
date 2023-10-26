let red = document.querySelectorAll('.red1');
red.forEach(redElement => {
    redElement.addEventListener('click', () => {
        document.body.style.backgroundColor = 'red';
    });
});

let green = document.querySelectorAll('.green1');
green.forEach(greenElement => {
    greenElement.addEventListener('click', () => {
        document.body.style.backgroundColor = 'green';
    });
});

let blue = document.querySelectorAll('.blue1');
blue.forEach(blueElement => {
    blueElement.addEventListener('click', () => {
        document.body.style.backgroundColor = 'blue';
    });
});
let colors = ['red', 'green', 'blue', 'white', 'black', 'orange'];
let btn = document.getElementById('button');
let text = document.getElementById('text');
let colorLoader = 0;
btn.addEventListener('click', () => {
    colorLoader++;

    function loadion() {
        if (colorLoader < colors.length - 1) {
            document.body.style.backgroundColor = colors[colorLoader];
        } else {
            document.body.style.backgroundColor = colors[colorLoader];
        }
    } loadion();
});
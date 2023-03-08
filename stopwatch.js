let [hours, minutes, seconds, milisecond] = [0, 0, 0, 0];
let x = null;
let displayField = document.getElementById('display');

document.getElementById('btn-start').addEventListener('click', function () {
    if (!x == null) {
        clearInterval(x);
    }
        x = setInterval(displayTimer, 10);
});

document.getElementById('btn-pause').addEventListener('click', function () {
    clearInterval(x);
});

document.getElementById('btn-reset').addEventListener('click', function () {
    clearInterval(x);
    [hours, minutes, seconds, milisecond] = [0, 0, 0, 0];
    displayField.innerText = ' 00 : 00 : 00 : 000 ';
});

function displayTimer() {
    milisecond = milisecond + 10;
    if (milisecond === 1000) {
        milisecond = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milisecond < 10 ? "00" + milisecond : milisecond < 100 ? "0"+milisecond:milisecond;
    displayField.innerHTML = ` ${h} : ${m} : ${s} : ${ms} `;
}
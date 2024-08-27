let btnstart = document.querySelector('.btn-start');
let btnstop = document.querySelector('.btn-stop');
let btnreset = document.querySelector('.btn-reset');
let interval; // Declare the interval variable

btnstart.addEventListener('click', () => {
    clearInterval(interval); // Clear any existing intervals before starting a new one
    interval = setInterval(startTimer, 10);
});

btnstop.addEventListener('click', () => {
    clearInterval(interval); // Correct function syntax
});

btnreset.addEventListener('click', () => {
    clearInterval(interval);
    tens = 0;
    seconds = 0;
    gettens.innerHTML = '00';
    getseconds.innerHTML = '00';
});

function startTimer() {
    tens++;

    if (tens <= 9) {
        gettens.innerHTML = '0' + tens;
    } else if (tens > 9 && tens <= 99) {
        gettens.innerHTML = tens;
    } else if (tens > 99) {
        seconds++;
        getseconds.innerHTML = '0' + seconds;
        tens = 0;
        gettens.innerHTML = '00';
    }

    if (seconds > 9) {
        getseconds.innerHTML = seconds;
    }
}

let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let reset = document.querySelector('.reset');
let buttons = document.querySelector('.buttons');
let timeview = document.querySelector('.timeview');
let hoursSpan = document.querySelector('.hours');
let minutesSpan = document.querySelector('.minutes');
let secondsSpan = document.querySelector('.seconds');

class Stopwatch {
    constructor() {
        this.counter = 0;
        this.hours;
        this.minutes;
        this.seconds;
        this.startCount;
    }
    evaluateTime(time) {
        this.hours = Math.floor(time / 3600);
        this.minutes = Math.floor(time % 3600 / 60);
        this.seconds = (time % 3600) % 60;
    }
    show() {
        if(this.hours.toString().length === 1) {
            hoursSpan.textContent = `0${this.hours}`;
        } else {
            hoursSpan.textContent = this.hours;
        }
        if(this.minutes.toString().length === 1) {
            minutesSpan.textContent = `0${this.minutes}`;
        } else {
            minutesSpan.textContent = this.minutes;
        }
        if(this.seconds.toString().length === 1) {
            secondsSpan.textContent = `0${this.seconds}`;
        } else {
            secondsSpan.textContent = this.seconds;
        }
    }
    start() {
        this.startCount = setInterval(() => {
            this.counter += 1;
            this.evaluateTime(this.counter);
            this.show();
        }, 1000);
    }
    stop() {
        clearInterval(this.startCount);
    }
    reset() {
        this.stop();
        this.counter = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.show();
    }
}

let stopwatch;
document.addEventListener('DOMContentLoaded', () => {
    stopwatch = new Stopwatch();
})

buttons.addEventListener('click', (e) => {
    e.preventDefault();
    let clickedClassValue = e.target.className;
    if (clickedClassValue === 'reset') {
        stopwatch.reset();
    } else if (clickedClassValue === 'start') {
        stopwatch.start();
    } else if (clickedClassValue === 'stop') {
        stopwatch.stop();
    } else {

    }
})


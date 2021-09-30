'use strict';
const timer = {
    secondsPassed: 0,
    minsPassed: 0,
    timerId: null,
    strartTimer() {
        console.log(this)

        this.timerId = setInterval(() => {
            console.log(`${this.minsPassed}:${this.secondsPassed}`)
            this.secondsPassed += 1;
            if (this.secondsPassed === 60) {
                this.minsPassed += 1;
                this.secondsPassed = 0;
            }
        }, 1000);
        // setInterval( function () {
        //     console.log(this)
        //     this.secondsPassed +=1;
        // }.bind(this),1000);
        //fixed context with bind
        // const callbackFunc =  function (){
        //     console.log(this);
        //     this.secondsPassed +=1;
        //     const bindedCallbackFunc = callbackFunc.bind(this);
        //     setInterval(bindedCallbackFunc, 1000);
        // }
    },

    stopTimer() {
        clearInterval(this.timerId)
    },
    getTime() {
        let secs = this.secondsPassed;
        if (this.secondsPassed < 10) {
            secs = '0' + this.secondsPassed;
        }
        console.log(`${this.minsPassed}:${secs}`);
        return `${this.minsPassed}:${secs}`
    },
    resetTimer() {
        this.secondsPassed = 0;
        this.minsPassed = 0;
    },
};

//context
//1. know when context is lost (2-3 cases)
//2. fix context 

//test data
timer.strartTimer();
//lose context case #1
// const startTimerFunc = timer.startTimer; 
// // startTimerFunc();

// setInterval(()=>{
//     console.log('Monday')
// }, 200)

//lose context case #2
// [1,2,4].filter(function (){
//     console.log('filter this: ' + this)
// })


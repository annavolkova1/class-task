"use strict";
export default class Timer{
    constructor(secs) {
        this.secs = secs * 1000;
    }

    get start() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.secs);
            }, this.secs)
        })
    }
}

let timer = new Timer(1);
timer.start.then(res => console.log({res: res}));
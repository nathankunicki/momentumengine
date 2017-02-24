"use strict";

class Audio {


    constructor (src) {

        this._loaded = false; // Default is true, set it to false until the audio has loaded
        this._error = false; // If the audio fails to load, this will contain the reason

        this._audioObj = new Audio();

        this._audioObj.addEventListener("loadeddata", () => {
            this._loaded = true;
            this._error = false;
        });

        this._audioObj.addEventListener("error", (err) => {
            this._loaded = false;
            this._error = err;
        });

        this._audioObj.src = src;

    }


    play () {
        if (this._loaded) {
            return this._audioObj.play();
        } else {
            return false;
        }
    }


    pause () {
        if (this._loaded) {
            return this._audioObj.pause();
        } else {
            return false;
        }
    }


    seek (seconds) {
        if (this._loaded) {
            return this._audioObj.currentTime = seconds;
        } else {
            return false;
        }
    }


    isLoaded () {
        return this._loaded;
    }


    isError () {
        return this._error;
    }


}


export default Audio;
/*Initially the SecretDiary class is locked, meaning addEntry(str) and getEntries() should throw an error.
When the user calls unlock(), addEntry() and getEntries() should work as desired.
When the user calls lock() again addEntry() and getEntries() throw errors.
First organise it into one class only.

Then, reorganise it into classes with high cohesion.*/
import Lock from './lock.js'
class Diary {
    #lock;
    constructor(lock) {
        this.#lock = lock;
    }

    isDiaryLocked = () => this.#lock.isLocked();

    checkLock = () => {
        if (this.#lock.isLocked()) {
            throw new Error(`Diary is locked`);
        }
    }

    unlock = unlocker => {
        this.#lock.toggleLock(unlocker);
    }

    getEntries = () => {
        this.checkLock();
    };

    addEntry = () => {
        this.checkLock();
    }
}


export default Diary;
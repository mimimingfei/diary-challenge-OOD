/*Initially the SecretDiary class is locked, meaning addEntry(str) and getEntries() should throw an error.
When the user calls unlock(), addEntry() and getEntries() should work as desired.
When the user calls lock() again addEntry() and getEntries() throw errors.
First organise it into one class only.

Then, reorganise it into classes with high cohesion.*/

const Lock = require('./lock.js')
class Diary {
    constructor(lock){
        this.lock = lock;
        this.entries = [];
    }

    addEntry(entry) {
        if (this.lock.locked) {
            throw new Error("Cannot add entry. Diary is locked.");
        }
        if(typeof entry !== 'string'){
            throw new Error("entry must be a string");
        }
            this.entries.push(entry);
    }

    getEntries() {
        if (this.lock.locked) {
            throw new Error("Cannot get entries. Diary is locked.");
        } else {
        return this.entries;
    }}
}

module.exports = Diary;
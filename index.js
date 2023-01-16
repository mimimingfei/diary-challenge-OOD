const Lock = require('./lock.js');
const Diary = require('./diary.js');

const lock = new Lock();
const diary = new Diary(lock);
diary.addEntry("a string")
console.log(diary.getEntries())
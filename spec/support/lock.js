
class Lock {
    #locked=true
// #private class field stores the state of the class
    isLocked=()=>{
        return this.#locked;
    }
    toggleLock=()=>{ this.#locked=!this.#locked}
// set the value of the private field from within the class and make it accessible to other class methods
// "=" assigns a new value to the private class field "#locked"

}
export default Lock;
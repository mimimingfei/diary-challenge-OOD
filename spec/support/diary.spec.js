import Diary from './diary.js'
import Lock from './lock.js'
let lock, diary
describe('diary tests',()=>{
    describe('instantiation test',()=>{
      
      beforeEach(()=>{
        lock = { isLocked: () => true };
        diary = new Diary(lock);
      })
//lock is a plain objects with a single method which returns true
//It's not an instance of any class and doesn't have any shared behavior or properties
//比较 let lock = { isLocked: true }，这里"isLocked"是property，its value is true.
//几种function expression第一种let X = { method: function() { return "hello"; } }
//第二种let X = { method: () => "hello" };
//第三种let X = { method: () => { return "hello"; } };

      afterEach(()=>{
         lock = undefined;
         diary = undefined;
      });
         it('should be locked when instantiated',()=>{
            const result = diary.isDiaryLocked();
            expect(result).toBeTrue();
         })
         it('call isLocked on the lock item used',()=>{
            const lockSpy = spyOn(lock,'isLocked')
//spy tracks how many times a method was called, with what arguments, and what the returned value was. 
//the first argument is the object, second is the method name of the object
//isDiaryLocked() method of diary is called, this method calls the isLocked method of the lock object internally.
            diary.isDiaryLocked()
            expect(lockSpy).toHaveBeenCalled();
         })  
    })
    describe('getEntries tests', () => {
      it('should return an error when diary is locked', () => {
          // Arrange
          const lock = { isLocked: () => true };
          const diary = new Diary(lock);
          const diarySpy = spyOn(diary, `checkLock`);
          // Act
          diary.getEntries();
          // Assert
          expect(diarySpy).toHaveBeenCalled();

      });
  });
  describe('addEntry tests', () => {
   it('should check to see if diary is locked', () => {
       // Arrange
       const lock = { isLocked: () => true };
       const diary = new Diary(lock);
       const diarySpy = spyOn(diary, `checkLock`)
       // Act
       diary.addEntry();
       // Assert
       expect(diarySpy).toHaveBeenCalled();

   });
});

describe('checkLock tests', () => {
   it('should throw an error when diary is locked', () => {
       const lock= { isLocked: () => true };
       const diary = new Diary(lock);

       expect(() => diary.checkLock()).toThrowError(Error, `Diary is locked`);
   });

   it('should return undefined when diary is unlocked', () => {
       const lock = { isLocked: () => false };
       const diary = new Diary(lock);

       expect(diary.checkLock()).toBeUndefined();
   });
});
describe('unlock tests', () => {
   it('should call toggleLock on the lock when the diary calls unlock', () => {
       // Arrange
       const lock = { toggleLock: () => { } };
       const lockSpy = spyOn(lock, `toggleLock`);
       const diary = new Diary(lock);
       // Act
       diary.unlock();
       // Expect
       expect(lockSpy).toHaveBeenCalled();
   });

   it('should call toggleLock on the lock when the diary calls unlock', () => {
       // Arrange
       const lock = { toggleLock: () => { }, isLocked: () => false };
       const lockSpy = spyOn(lock, `toggleLock`);
       const diary = new Diary(lock);
       // Act
       diary.unlock();
       // Expect
       expect(diary.isDiaryLocked()).toBeFalse();
   });
})

})
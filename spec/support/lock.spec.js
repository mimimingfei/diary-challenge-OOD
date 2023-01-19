import Lock from './lock.js';
import Diary from'./diary.js';


describe('Lock Tests', () => {
    describe('Initial status tests', () => {
        it('should be locked when first made', () => {
            // Arrange   
            const lock = new Lock();
            // Act
            // const result = lock.isLocked();
            // Assert
            // expect(result).toBeTrue();
            expect(lock.isLocked()).toBeTrue();
        });
    });

    describe('lock status toggle tests', () => {
        it('should report locked as false when unlock is called', () => {
            // Arrange
            const lock = new Lock();
            // Act
            lock.toggleLock();
            // Assert
            expect(lock.isLocked()).toBeFalse();
        });
    });
});
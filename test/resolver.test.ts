import { getUsers, getUserById } from '../src/resolver';
import { userData1, userData2 } from '../src/data';
import {DataSource, User} from "../src/types";

describe('Resolver Tests', () => {
    describe('getUsers', () => {
        it('should return merged user data from both sources', () => {
            // Arrange
            const expectedUsers: User[] = []; // Fill this array with the expected merged user data

            // Act
            const result = getUsers();

            // Assert
            // Add your assertion here
            expect(0).toEqual(1);
        });
    });

    describe('getUserById', () => {
        it('should return a user by ID from the specified source', () => {
            // Arrange
            const userId = ''; // Fill this with a valid user ID
            const source = DataSource.DATA_SOURCE_1; // Fill this with the expected source

            // Act
            const result = getUserById(userId, source);

            // Assert
            // Add your assertion here
            expect(0).toEqual(1);
        });
    });
});

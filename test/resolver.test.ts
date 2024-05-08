import {DataSource} from "../src/types";
import {getUserById, getUsers} from "../src/resolver";
import {userData1, userData2} from "../src/data";

describe('Resolver Tests', () => {
    describe('getUsers', () => {
        it('should return merged and normalized user data from both sources', () => {
            const users = getUsers();
            expect(users.length).toEqual(userData1.length + userData2.length);
            users.forEach(user => {
                expect(user).toHaveProperty('id');
                expect(user).toHaveProperty('firstName');
                expect(user).toHaveProperty('lastName');
                expect(user).toHaveProperty('emailAddress');
                expect(user).toHaveProperty('phoneNumber');
                expect(user).toHaveProperty('source');
            });
        });
    });

    describe('getUserById', () => {
        it('should return a user by UUID from DataSource.DATA_SOURCE_1', () => {
            const uuid = 'c3d504e3-4f82-4e28-8db9-b3157647c8c1';
            const user = getUserById(uuid);
            expect(user).not.toBeNull();
            expect(user.id).toEqual(uuid);
            expect(user.source).toEqual(DataSource.DATA_SOURCE_1);
        });

        it('should return a user by numeric ID from DataSource.DATA_SOURCE_2', () => {
            const numericId = 1;
            const user = getUserById(numericId);
            expect(user).not.toBeNull();
            expect(user.id).toEqual(numericId);
            expect(user.source).toEqual(DataSource.DATA_SOURCE_2);
        });

        // Test to verify that the correct data source is used based on the ID type
        it('should correctly determine the data source based on the type of the ID', () => {
            const uuid = 'c3d504e3-4f82-4e28-8db9-b3157647c8c1';
            const numericId = 1;
            const userFromUuid = getUserById(uuid);
            const userFromNumericId = getUserById(numericId);

            expect(userFromUuid.source).toEqual(DataSource.DATA_SOURCE_1);
            expect(typeof userFromUuid.id).toBe('string');
            expect(userFromNumericId.source).toEqual(DataSource.DATA_SOURCE_2);
            expect(typeof userFromNumericId.id).toBe('number');
        });
    });
});

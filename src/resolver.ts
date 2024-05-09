import {userData1, userData2} from "./data";
import {DataSource, User} from "./types";

export function getUsers(): User[] {
    const rawUsers = [...userData1, ...userData2];
    const normalizedUsers = rawUsers.map(normalizeUser);
    return normalizedUsers;
}

export function getUserById(id: string | number): User | null {
    const user = typeof id === 'string'
        ? userData1.find(userData => userData.id === id)
        : userData2.find(userData => userData.id === id);

    if (user) {
        return normalizeUser(user);
    }

    return null;
}

function normalizeUser(user: any): User {
    return {
        id: user.id,
        firstName: user.first || user.first_name || '',
        lastName: user.last || user.last_name || '',
        emailAddress: user.email || user.email_address || '',
        phoneNumber: user.phone || user.phone_number || '',
        source: typeof user.id === 'string' ? DataSource.DATA_SOURCE_1 : DataSource.DATA_SOURCE_2
    };
}

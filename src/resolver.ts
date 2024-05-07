// resolver.ts

import {DataSource, User} from "./types";

export function getUsers(): User[] {
    // TODO: You need to merge data from both sources and return
    return [];
}

export function getUserById(id: string | number, source: DataSource): User | null {
    // TODO: You need to find user by ID in the appropriate data source
    return null;
}

function normalizeUser(user: any): User {
    // TODO: You need to normalize user object to match schema structure
    return {
        id: '',
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        source: DataSource.DATA_SOURCE_1 // Default source
    };
}


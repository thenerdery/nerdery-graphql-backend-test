// resolver.ts
import {userData1, userData2} from "./data";
import {DataSource, User} from "./types";

export function getUsers(): User[] {
    // TODO: You need to merge userData1 / userData2 from both sources and return in structure defined within the schema
    return [];
}

export function getUserById(id: string | number, source: DataSource): User | null {
    // TODO: You need to find user by ID in the appropriate data source. Note, id can be uuid or int id
    return null;
}

function normalizeUser(user: any): User {
    // TODO: You need to normalize the user object to match the schema structure below
    return {
        id: '',
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        source: DataSource.DATA_SOURCE_1 // Default source
    };
}


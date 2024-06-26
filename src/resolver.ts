// This file simulates a full-fledged GraphQL resolver in a simplified context for a take-home test.
import {userData1, userData2} from "./data";
import {DataSource, User} from "./types";

export function getUsers(): User[] {
    // Task: Combine userData1 and userData2 into a single array and return users normalized to match the schema.
    // Hint: You may want to use the normalizeUser function on each user object before returning the final array.
    const rawUsers = [...userData1, ...userData2];

    return []; // TODO: Replace this with the normalized list of users.
}

export function getUserById(id: string | number): User | null {
    // Task: Implement this function to return a user by their ID from the correct data source.
    // Hint: Check the type of `id` to determine whether to search in userData1 or userData2.
    // userData1 contains UUIDs (strings), while userData2 contains numerical IDs.

    return null; // TODO: Implement the logic to find and return the appropriate user.
}

// This function is intended to normalize user data from different formats into a uniform schema.
function normalizeUser(user: any): User {
    // Task: Adapt this function to convert an input user object into the format specified below.
    // Hint: Map properties from both userData1 and userData2 to this uniform schema.
    // Example mapping: `first` or `first_name` should map to `firstName`.
    return {
        id: '', // TODO: Set this to the user's id.
        firstName: '', // TODO: Set this to the user's first name, considering both 'first' and 'first_name'.
        lastName: '', // TODO: Set this to the user's last name, considering both 'last' and 'last_name'.
        emailAddress: '', // TODO: Set this to the user's email address, considering both 'email' and 'email_address'.
        phoneNumber: '', // TODO: Set this to the user's phone number, considering both 'phone' and 'phone_number'.
        source: DataSource.DATA_SOURCE_1 // Hint: Determine the source based on the ID type (string for DATA_SOURCE_1, number for DATA_SOURCE_2).
    };
}

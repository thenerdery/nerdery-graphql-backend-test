# Nerdery GraphQL Take-Home Test Instructions

## Objective

Your task is to complete the implementation of three functions in the `resolver.ts` file. These functions are responsible for fetching and manipulating user data for a GraphQL API.

You will be provided with user data from two different sources (`userData1` and `userData2`). Each source has a different structure for representing user information. Your goal is to merge the data from these two sources and normalize it into a single structure that conforms to the schema defined in the `types.ts` file.

## Instructions

1. **Merge User Data**: Implement the `getUsers()` function in `resolver.ts` to merge user data from two different sources (`userData1` and `userData2`) and return an array of user objects. Ensure that the merged user data contains information from both sources.

2. **Get User by ID**: Implement the `getUserById(id: string | number, source: DataSource)` function in `resolver.ts` to find a user by their ID in the appropriate data source (`userData1` or `userData2`). The function should return the user object if found, or `null` otherwise.

3. **Normalize User**: Implement the `normalizeUser(user: any)` function in `resolver.ts` to normalize a user object to match the schema structure defined in `types.ts`. The normalized user object should contain the required fields (`id`, `firstName`, `lastName`, `emailAddress`, `phoneNumber`, `source`). Handle any inconsistencies or variations in the data structures of the two sources during normalization.

## Guidelines

- Use TypeScript for your implementation.
- Be sure to run `npm install` to install your dependencies.
- Run `npm start` to start the server and access the GraphQL playground for testing.
- Feel free to modify the provided files (`resolver.ts`) as needed.
- You are allowed to create additional helper functions or files if necessary.
- Ensure that your solution is clean, readable, and follows best practices.
- Some parts of this test are ambiguous. It's okay to make decisions, and we can discuss them later in the interview.
- Your code must pass the tests when you run `npm test`. By default, these tests will be failing.

## Submission

Once you have completed the tasks, please invite Mark Jones (`mjones-nerdery`) & Solomon Antoine (`solo-nerdery`) to the forked version of your repository.

If you have any questions or encounter any issues during the test, feel free to reach out to us for assistance.

Good luck!

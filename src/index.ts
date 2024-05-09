// You do not need to touch this file.
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from "./schema";
import {getUserById, getUsers} from "./resolver"

const resolvers = {
    DataSource: {
        DATA_SOURCE_1: 0,
        DATA_SOURCE_2: 1,
    },
    Query: {
        getUsers: () => getUsers(),
        getUserById: (parent, { id }) => {
            // Check if the ID is numeric and convert it if true, otherwise pass it as a string
            const numericId = Number(id);
            // If `numericId` is a valid number and the conversion from string to number and back to string
            // gives the original id, then it's a valid number; otherwise, use the original string ID
            if (!isNaN(numericId) && numericId.toString() === id) {
                return getUserById(numericId);
            } else {
                return getUserById(id);
            }
        }
    },
};

async function main() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });

    console.log(`🚀  Server ready at: ${url}`);
}

main()

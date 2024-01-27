import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://welkom.stepzen.net/api/foiled-goat/__graphql",
    headers: {
        "Authorization": `apikey ${process.env.NEXT_PUBLIC_STEPZEN_KEY}`
    },
    cache: new InMemoryCache()
})

export default client
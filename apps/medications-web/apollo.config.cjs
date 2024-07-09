module.exports = {
  client: {
    service: {
      name: "medications-web",
      // localSchemaFile: "../../servers/medications-api/src/schemas/schema.graphql",
      url: "http://localhost:4000/graphql", // URL del endpoint GraphQL

    },
    includes: ['./src/**/*.{ts,tsx,js,jsx,gql,graphql}']
  }
}

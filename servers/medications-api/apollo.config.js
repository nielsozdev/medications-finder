// module.exports = {
//   service: {
//     name: 'medications-api',
//     localSchemaFile: './src/schemas/*.graphql'
//     // Si tu esquema está disponible en una URL, usa lo siguiente:
//     // endpoint: {
//     //   url: 'http://localhost:4000/graphql',
//     // },
//   }
// }
module.exports = {
  service: {
    name: 'medications-api', // Nombre de tu servicio
    // Configuración del endpoint remoto o archivo de esquema local
    // Puedes elegir entre un endpoint remoto o un archivo local
    localSchemaFile: './src/schemas/*.graphql',
    // // Si tu esquema está disponible en una URL, usa lo siguiente:

    // endpoint: {
    //   url: 'http://localhost:4000', // URL del endpoint remoto
    //   // Opciones adicionales si es necesario
    //   // headers: {
    //   //   authorization: 'Bearer TU_TOKEN_DE_AUTORIZACIÓN' // Si es necesario
    //   // },
    //   skipSSLValidation: true // Opcional, deshabilita la validación SSL
    // },
    // O si prefieres, puedes usar un archivo de esquema local
    // localSchemaFile: './path/to/schema.graphql'
  }
};

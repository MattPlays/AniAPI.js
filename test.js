const aniapi = require("./src/index");
const AuthClient = new aniapi.AuthClient("1234565", "https://localhost:3000");

AuthClient.ConstructURI("Authorization").then(console.log);
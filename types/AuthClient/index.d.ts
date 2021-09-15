export class AuthClient {
    constructor(client_id: string, redirect_uri: string);
    async ConstructURI(response_type: "Authorization" | "Implicit", state?: string): Promise<string>;    
}
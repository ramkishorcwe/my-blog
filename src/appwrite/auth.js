
import { Client, Account, ID } from 'appwrite';
class Auth {
  account;

  constructor() {
    const client = new Client()
    client
      .setEndpoint(String(import.meta.env.VITE_APPWRITE_URL))
      .setProject(String(import.meta.env.VITE_APPWRITE_PROJECT_ID));
    this.account = new Account(client);
  }

  async register(email, password, name = 'No Name') {

    await this.account.create(
      ID.unique(), // userId
      email, // email
      password, // password
      name // name (optional)
    );
    const result = await this.login(email, password)
    return result
  }
  async login(email, password) {
    const resp = await this.account.createEmailPasswordSession(email, password)
    return resp;
  }
  async getUser() {
    const response = await this.account.get();
    return response;
  }
  async logout() {
    const response = await this.account.deleteSessions();
    return response;
  }
}

const auth = new Auth();

export default auth


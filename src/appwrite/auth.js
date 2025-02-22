
import { Client, Account, ID, OAuthProvider } from 'appwrite';
import envConfig from '../../src/environmentConfig'
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
    try {
      await this.account.create(ID.unique(), email, password, name);
      const result = await this.login(email, password)
      return result
    } catch (error) {
      throw error
    }
  }
  async login(data) {
    try {
      const resp = await this.account.createEmailPasswordSession(data.email, data.password)
      return resp;
    } catch (error) {
      throw error
    }
  }

  async registerOAuth() {
    try {
      const resp = await this.account.createOAuth2Session(
        OAuthProvider.Google, // provider
        envConfig.clientBaseUrl, // redirect here on success
        envConfig.clientUrlLogin, // redirect here on failure
        // ['repo', 'user'] // scopes (optional)
      );
      return resp;
    } catch (error) {
      console.log(error)
    }
  }

  async getUser() {
    try {
      const response = await this.account.get();
      return response;
    } catch (error) {
      console.log(error)
    }

  }
  async logout() {
    const response = await this.account.deleteSessions('current');
    return response;
  }
}

const auth = new Auth();

export default auth


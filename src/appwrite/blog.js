import { Client, Databases, ID, Query } from "appwrite";
const databaseId = String(import.meta.env.VITE_APPWRITE_DATABASE_ID);
const baseUrl = String(import.meta.env.VITE_APPWRITE_URL);
const projectId = String(import.meta.env.VITE_APPWRITE_PROJECT_ID)
const collectionId = String(import.meta.env.VITE_APPWRITE_COLLECTION_ID)

class Blog {
  databases = null;
  constructor() {
    const client = new Client()
      .setEndpoint(baseUrl)
      .setProject(projectId);
    this.databases = new Databases(client);
  }

  async createBlog(data) {
    console.log(data)
    const addedData = await this.databases.createDocument(
      databaseId,
      collectionId,
      ID.unique(),
      { ...data });
    console.log(addedData);
    return addedData;
  }

  async updateBlog(recordId, data) {
    const result = await this.databases.updateDocument(
      databaseId,
      collectionId, // collectionId
      recordId, // documentId
      data, // data (optional)
    );
    return result
  }

  async deleteBlog(recordId) {
    const result = await this.databases.deleteDocument(
      databaseId,
      collectionId, // collectionId
      recordId // documentId
    );
    return result
  }

  async listBlog(searchData) {
    const key = Object.keys(searchData)[0];
    const list = await this.databases.listDocuments(
      databaseId,
      collectionId,
      [
        Query.equal(key, searchData[key])
      ]
    );
    return list;
  }

  async getBlog(recordId) {
    const result = await this.databases.getDocument(
      databaseId,
      collectionId,
      recordId,
      []
    );
    return result;
  }
}
const blog = new Blog();
export default blog;
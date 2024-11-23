import { Client, ID } from "appwrite";
const baseUrl = String(import.meta.env.VITE_APPWRITE_URL);
const projectId = String(import.meta.env.VITE_APPWRITE_PROJECT_ID)
const bucketId = String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
class Bucket {
  bucket;
  constructor() {
    const client = new Client()
      .setEndpoint(baseUrl)
      .setProject(projectId)
    this.bucket = new Storage(client);
  }
  async addImage(data) {                          //TODO
    const result = await this.bucket.createFile(
      bucketId, // bucketId
      ID.unique(), // fileId
      document.getElementById('uploader').files[0],
    );
    return result;
  }
}

export default new Bucket()
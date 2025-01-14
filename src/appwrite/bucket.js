import { Client, ID, Storage } from "appwrite";
const baseUrl = String(import.meta.env.VITE_APPWRITE_URL);
const projectId = String(import.meta.env.VITE_APPWRITE_PROJECT_ID)
const bucketId = String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
class Bucket {
  bucket = null;
  constructor() {
    const client = new Client()
      .setEndpoint(baseUrl)
      .setProject(projectId)
    this.bucket = new Storage(client);
    console.log(this.bucket)
  }
  async addImage(data) {       //  TODO
    const result = await this.bucket.createFile(
      bucketId, // bucketId
      ID.unique(), // fileId
      data
      // document.getElementById('uploader').files[0],
    );
    return result;
  }

  async downloadImage(fileId) {
    const result = this.bucket.getFileDownload(
      bucketId, // bucketId
      fileId // fileId
    );
    return result;
  }

  async fetchImage(id) {
    const result = this.bucket.getFilePreview(
      bucketId, // bucketId
      id, // fileId
      // 0, // width (optional)
      // 0, // height (optional)
      // // ImageGravity.Center, // gravity (optional)
      // 0, // quality (optional)
      // 0, // borderWidth (optional)
      // '', // borderColor (optional)
      // 0, // borderRadius (optional)
      // 0, // opacity (optional)
      // -360, // rotation (optional)
      // '', // background (optional)
      // // ImageFormat.Jpg // output (optional)
    );

    console.log(result);
    return result;
  }

  async deleteImage(fileId) {
    const result = await this.bucket.deleteFile(
      bucketId, // bucketId
      fileId // fileId
    );
    return result;
  }
  async previewImage(fileId) {
    const result = this.bucket.getFilePreview(
      bucketId, // bucketId
      fileId, // fileId
      0, // width (optional)
      0, // height (optional)
      ImageGravity.Center, // gravity (optional)
      0, // quality (optional)
      0, // borderWidth (optional)
      '', // borderColor (optional)
      0, // borderRadius (optional)
      0, // opacity (optional)
      -360, // rotation (optional)
      '', // background (optional)
      ImageFormat.Jpg // output (optional)
    );
    console.log(result);
  }
  async viewImage(fileId) {
    const result = await this.bucket.getFileView(
      bucketId, // bucketId
      fileId // fileId
    );
    return result;
  }
  async updateImage(fileId, file) {
    const result = await this.bucket.updateFile(
      bucketId, // bucketId
      fileId, // fileId
      file.name, // name (optional)
      // ["read("any")"] // permissions (optional)
    );
    return result;
  }

}

export default new Bucket()
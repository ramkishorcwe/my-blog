const config = {
  appWriteBaseUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appWriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appWriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appWriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appWriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  tinymceKey: String(import.meta.env.VITE_TINYMCE_KEY),
  bucketImageBaseUrl: String(import.meta.env.VITE_BUCKET_IMAGE_BASEURL),
  clientBaseUrl: String(import.meta.env.VITE_CLIENT_URL),
  clientGoogleId: String(import.meta.env.VITE_GOOGLE_CLIENTID)
}
export default config;
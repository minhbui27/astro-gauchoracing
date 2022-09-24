import { google } from 'googleapis'
export async function getServerSideProps() {
    //getting the auth
    const auth = await google.auth.getClient({
      credentials: JSON.parse(import.meta.env.GOOGLE_SHEETS_AUTHENTICATION),
      scopes: ['https://www.googleapis.com/auth/documents.readonly'],
    })
    const docs = google.docs({ version: 'v1', auth })
    //query
    const response = await docs.documents.get({
      documentId: import.meta.env.DOCS_ID,
    })
    return response
}

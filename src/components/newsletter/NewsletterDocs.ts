// This module was used for experimental testing with pulling from a Newsletter google docs, not used at the moment
// import { google } from 'googleapis'
// export async function getServerSideProps() {
//     //getting the auth
//     const auth = await google.auth.getClient({
//       credentials: JSON.parse(import.meta.env.GOOGLE_AUTHENTICATION),
//       scopes: ['https://www.googleapis.com/auth/documents.readonly'],
//     })
//     const docs = google.docs({ version: 'v1', auth })
//     //query
//     const response = await docs.documents.get({
//       documentId: import.meta.env.DOCS_ID,
//     })
//     return response
// }
// export async function getNewsletters(cellRange: number[]) {
//     //getting the auth
//     const auth = await google.auth.getClient({
//       credentials: JSON.parse(import.meta.env.GOOGLE_AUTHENTICATION),
//       scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
//     })
//     const sheets = google.sheets({ version: 'v4', auth })
//     //query
//     const range = `Sheet1!A${cellRange[0]}:B${cellRange[1]}`
//     const response = await sheets.spreadsheets.values.get({
//       spreadsheetId: import.meta.env.NEWSLETTER_SHEETS,
//       range,
//     })
//     return response
// }

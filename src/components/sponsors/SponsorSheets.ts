import { google } from 'googleapis'
export async function getServerSideProps(cellRange: number[]) {
    //getting the auth
    const auth = await google.auth.getClient({
      keyFilename: './secrets.json',
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    })
    const sheets = google.sheets({ version: 'v4', auth })

    //query
    const range = `Sheet1!A${cellRange[0]}:A${cellRange[1]}`
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: import.meta.env.SHEET_ID,
      range,
    })
    return response
}

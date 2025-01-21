import fs from 'fs'
import path from 'path'

export default defineEventHandler(async () => {
  const filePath = path.resolve('data/tableData.json')
  const fileContent = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(fileContent)
})

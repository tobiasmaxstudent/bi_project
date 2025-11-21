import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, 'public')))

app.get('/',(res, req) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server runs on http://localhost:${PORT}`);
});
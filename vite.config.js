import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// En développement, sert les PDF et les enregistrements du dossier de révision
// (le dossier parent du projet) sous /local/, sans les copier dans le dépôt.
const STUDY_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SOURCES = {
  pdf: { dir: STUDY_DIR, ext: '.pdf', type: 'application/pdf' },
  audio: { dir: path.join(STUDY_DIR, 'audio', 'Audio-files'), ext: '.mp3', type: 'audio/mpeg' },
}

function listFiles({ dir, ext }) {
  try {
    return fs.readdirSync(dir).filter((name) => name.toLowerCase().endsWith(ext)).sort()
  } catch {
    return []
  }
}

function sendFile(req, res, file, type) {
  const { size } = fs.statSync(file)
  const range = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range ?? '')
  res.setHeader('Content-Type', type)
  res.setHeader('Accept-Ranges', 'bytes')
  if (!range) {
    res.setHeader('Content-Length', size)
    fs.createReadStream(file).pipe(res)
    return
  }
  const start = range[1] ? Number(range[1]) : 0
  const end = range[2] ? Math.min(Number(range[2]), size - 1) : size - 1
  if (start > end) {
    res.statusCode = 416
    res.end()
    return
  }
  res.statusCode = 206
  res.setHeader('Content-Range', `bytes ${start}-${end}/${size}`)
  res.setHeader('Content-Length', end - start + 1)
  fs.createReadStream(file, { start, end }).pipe(res)
}

function localStudyFiles() {
  return {
    name: 'local-study-files',
    configureServer(server) {
      server.middlewares.use('/local', (req, res, next) => {
        const [, kind, rawName] = decodeURIComponent(req.url.split('?')[0]).split('/')
        if (kind === 'index.json') {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ pdf: listFiles(SOURCES.pdf), audio: listFiles(SOURCES.audio) }))
          return
        }
        const source = SOURCES[kind]
        // Seuls les fichiers listés sont servis : aucun chemin arbitraire.
        if (!source || !listFiles(source).includes(rawName)) return next()
        sendFile(req, res, path.join(source.dir, rawName), source.type)
      })
    },
  }
}

export default defineConfig({
  base: './',
  plugins: [react(), localStudyFiles()],
  server: { port: 5173 },
})

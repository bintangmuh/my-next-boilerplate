const express = require('express')
const next = require('next')
const dotenv = require('dotenv')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

// Next Routes
const routes = require('./routes.js')
const handler = routes.getRequestHandler(app)

dotenv.config()

const port = parseInt(process.env.PORT, 10) || 3000

app.prepare()
  .then(() => {
    const server = express()
    server.use(handler)

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })

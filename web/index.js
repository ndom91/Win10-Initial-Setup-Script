const next = require('next')
const nextAuth = require('next-auth')
const nextAuthConfig = require('./next-auth.config')

require('dotenv').config({ path: './.env' })

const nextApp = next({
  dir: '.',
  dev: (process.env.NODE_ENV === 'development')
})

nextApp.prepare()
  .then(async () => {
    const nextAuthOptions = await nextAuthConfig()
    const nextAuthApp = await nextAuth(nextApp, nextAuthOptions)
    console.log(`Ready on http://localhost:${process.env.NODE_PORT || 3000}`)
  })
  .catch(err => {
    console.error('An error occurred, unable to start the server')
    console.error(err)
  })

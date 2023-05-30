import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test')
    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`)
    })
    console.log(`🛢Database connected successfully`)
  } catch (error) {
    console.log(`⚠ Failed to connect database`, error)
  }
}

main().catch(err => console.log(err))

// Imports
import dotenv from 'dotenv'
import path from 'path'
// Load .env
dotenv.config()
// Environment
export const NODE_ENV = process.env.NODE_ENV

// Port
export const PORT = process.env.PORT || 8000

// Username
export const ENV = {
  HOST: process.env.HOST,
  DATABASE: process.env.DATABASE,
  USERNAME: process.env.USER,
  PASSWORD: process.env.PASSWORD
}

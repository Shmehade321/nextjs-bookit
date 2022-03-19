/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_LOCAL_URI: 'mongodb+srv://bookit_db_admin:juOTqyu7AxyeQANY@cluster0.ytmz5.mongodb.net/BookItDB?retryWrites=true&w=majority'
  }
}

module.exports = nextConfig

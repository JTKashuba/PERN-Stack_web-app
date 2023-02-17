// documentation: https://node-postgres.com/guides/async-express

const { Pool } = require('pg')

//this Pool is what connects to the postgres database 
const pool = new Pool()
 
module.exports = {
  query: (text, params) => pool.query(text, params),
}
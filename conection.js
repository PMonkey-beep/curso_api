import mysql from 'mysql2/promise'

const conection = await mysql.createConnection({
    
    host: 'localhost',
    user: 'root',
    password: '55267656',
    database: 'projeto_api'
})

export { conection }


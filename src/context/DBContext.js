
import mysql2 from 'mysql2'

class DBContenxt {
    connection = () => {
        return mysql2.createConnection({
            host: "localhost",
            user: "root",
            password: "12345678",
            database: "jwt"
        })
    }
}

module.exports = new DBContenxt();

import context from '../context/DBContext';

class UserDao{
    #connection = context.connection();

    create(email, hashPassword, username){
        this.#connection.query(
            `INSERT INTO users (email, password, username) VALUES (?, ?, ?)`,
            [email, hashPassword, username],
            function (err, result, field) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(result);
                }
            }
        )
    }

}

module.exports = new UserDao();
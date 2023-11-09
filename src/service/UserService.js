import bcrypt from 'bcryptjs';
import userDao from '../dao/UserDao'
class UserService{
    #salt = bcrypt.genSaltSync(10);

    createUser = (req) =>{
        let email = req.body.email;
        let password = req.body.email;
        let username = req.body.username;
        let hashPassword = bcrypt.hashSync(password, this.#salt)
        userDao.create(email,hashPassword,username);
    }
}
module.exports = new UserService();
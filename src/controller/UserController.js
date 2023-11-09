
import userService from '../service/UserService'

class UserController {


    handleCreateUser = (req, res) => {
        userService.createUser(req);
        return res.send('home');
    }

}

module.exports = new UserController();
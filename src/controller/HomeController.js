class HomeController {
    handleHelloWorld = (req, res) => {
        const name = "Trong Nguyen"
        return res.render('home', { name });
    }

    handleUserPage = (req, res) => {
        return res.render('user');
    }
}

module.exports = new HomeController();
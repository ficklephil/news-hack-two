package news.hack.two

class UserService {

    def signup(String login) {
        if (!User.findByLogin(login)) {
            def user = new User(
                login: login,
                ready: new Preferences().save(),
                move: new Preferences().save(),
                needbreak: new Preferences().save(),
                end: new Preferences().save(),
                surprise: new Preferences().save())

            user.save()

            if (user.hasErrors()){
                log.error("ERRORS!")
                log.error(user.errors.allErrors)
            }
        }
    }
}

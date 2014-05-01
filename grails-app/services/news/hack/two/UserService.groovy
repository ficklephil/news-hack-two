package news.hack.two

class UserService {

    def signup(String login) {
        if (!User.findByLogin(login)) {
            def user = new User(
                login: login,
                ready: new Context().save(),
                move: new Context().save(),
                needbreak: new Context().save(),
                end: new Context().save(),
                surprise: new Context().save())

            user.save()

            if (user.hasErrors()){
                log.error("ERRORS!")
                log.error(user.errors.allErrors)
            }
        }
    }
}

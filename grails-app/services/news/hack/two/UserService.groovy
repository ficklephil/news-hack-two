package news.hack.two

class UserService {

    def signup(String login) {
        if (!User.findByLogin(login)) {
            def user = new User(
                login: login,
                ready: new Preferences(happy:1,sad:1,optimistic:1,hopeful:1,fearful:1,amused:1,unamused:1,exited:1,total:8).save(),
                move: new Preferences(happy:1,sad:1,amused:1,unamused:1,nostalgic:1,flabbergasted:1,total: 6).save(),
                needbreak: new Preferences(happy:1,optimistic:1,hopeful:1,amused:1,excited:1,total:5).save(),
                end: new Preferences(happy:1,sad:1,optmistic:1,pesimistic:1,hopeful:1,fearful:1,angry:1,nostalgic:1,total:8).save(),
                surprise: new Preferences(optimistic:1,amused:1,flabbergasted:1,total:3).save())

            user.save()

            if (user.hasErrors()){
                log.error("ERRORS!")
                log.error(user.errors.allErrors)
            }
        }
    }
}

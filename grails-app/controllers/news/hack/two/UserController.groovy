package news.hack.two

import grails.converters.JSON

class UserController {

    def userService

    def index() {}

    def signup() {
        userService.signup(request.JSON.login);

        return get()
    }

    def get() {

        def user = User.findByLogin(request.JSON.login);

        def json = [
                login: user.login,
                id: user.id
        ]

        ContextEnum.values()*.toString().each { context ->
            def moods = [:]
            Mood.values()*.toString().each { mood ->
                moods <<  [mood : user[context].total == 0 ? 0.0 : user[context][mood] * 1.0 / user[context].total * 1.0 ]
            }

            json << [ "${context}" : moods ]

        }

        render json as JSON

    }
}

package news.hack.two

import grails.converters.JSON

class StoryController {

    def storyService

    def index() { }

    def list() {

        def stories = storyService.getStoriesByMood(params);
        render stories as JSON
//        render hardcoded as JSON
    }

    def post() {}

}

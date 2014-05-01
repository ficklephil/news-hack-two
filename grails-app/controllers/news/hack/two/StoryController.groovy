package news.hack.two

import grails.converters.JSON

class StoryController {

    def storyService

    def index() { }

    def list() {

        def stories = storyService.getStoriesByMood(request.JSON);
        render stories as JSON
    }

    def update() {

        storyService.rateStory(params.id as Integer, params.tag);

        render "OK"

    }

}

package news.hack.two

import grails.converters.JSON

class StoryController {

    def storyService

    def index() { }

    def list() {

        def stories = storyService.getStoriesByMood(request.JSON.user as Integer, request.JSON.context);
        render stories as JSON
    }

    def update() {
        storyService.rateStory(request.JSON.id as Integer, request.JSON.tag, request.JSON.user as Integer, request.JSON.context, request.JSON.vote as Integer);

        render "OK"

    }

}

package news.hack.two

class StoryService {

    List getStoriesByMood(Map preferences) {
        List stories = Story.list(max:100, sort:"publishDate", order:"desc");

        stories.each { story ->
            calculateScore(story, preferences)
        }

        stories.sort { a, b ->
            //return b.score == a.score ? b.ratings - a.ratings : b.score - a.score
            return (b.score - a.score) * 10000 //Descending order and big to fit in an integer
        }
    }

    private int calculateScore(Story story, Map preferences) {
        double score = 0.0
        Mood.values()*.toString().each { mood ->
            score += (preferences[mood] as Double) * story[mood]/story.ratings
        }
        story.score = score
    }
}

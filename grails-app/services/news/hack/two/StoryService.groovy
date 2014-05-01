package news.hack.two

class StoryService {

    List getStoriesByMood(int userId, String context) {
        List stories = Story.list(max:100, sort:"publishDate", order:"desc");

        Preferences preferences = User.get(userId)[context]

        stories.each { story ->
            calculateScore(story, preferences)
        }

        stories.sort { a, b ->
            //return b.score == a.score ? b.ratings - a.ratings : b.score - a.score
            return (b.score - a.score) * 10000 //Descending order and big to fit in an integer
        }
    }

    def rateStory(int storyId, String mood, int userId, String context, int vote) {

        if (! (mood in Mood.values()*.toString()) ) {
            log.error("Unrecognised mood!!!");
            return;
        }

        def user = User.get(userId);
        user[context][mood] += vote
        user[context].total += 1
        user[context].save()

        def story = Story.get(storyId)

        if (!story) {
            log.error("Couldn't find Story with ID ${storyId}")
            return;
        }

        story.ratings += 1
        story[mood] += 1
        story.save()

    }

    private int calculateScore(Story story, Preferences preferences) {
        double score = 0.0
        Mood.values()*.toString().each { mood ->
            score += (preferences[mood] as Double) * story[mood]/story.ratings
        }
        story.score = score
    }
}

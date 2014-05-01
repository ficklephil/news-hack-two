package news.hack.two

class StoryService {

    List getStoriesByMood(int userId, String context) {
        List stories = Story.list(max:100, sort:"publishDate", order:"desc");

        Preferences preferences = User.get(userId)[context]

        stories.each { story ->
            calculateScore(story, preferences)
        }

        stories.sort { a, b ->
            return a.score == b.score?      //If they have the same score
                    a.ratings - b.ratings : //Display the least rated story (asc order ~ least first)
                    (b.score - a.score)     //Otherwise display the most relevant (desc order ~ highest rating first)
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
        int score = 0
        Mood.values()*.toString().each { mood ->
            score += preferences[mood] * story[mood]
        }
        story.score = score
    }
}

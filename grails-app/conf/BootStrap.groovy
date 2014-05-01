import news.hack.two.Mood
import news.hack.two.Story

class BootStrap {

    def init = { servletContext ->

        def random = new Random();

        (1..100).each {
            def story = new Story(body: "Story ${it}");
            story.publishDate = new Date();
            Mood.values()*.toString().each { mood ->
                int rating = random.nextInt(20);
                story[mood] = rating
                story.ratings += rating;
            }
            story.save()
        }
    }
    def destroy = {
    }
}

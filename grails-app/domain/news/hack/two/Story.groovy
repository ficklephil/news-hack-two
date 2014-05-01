package news.hack.two

class Story {

    static constraints = {
        headline(nullable: true)
        body(nullable: true, maxSize: 100000)
        source(nullable: true)
        publishDate(nullable: true)
        imageUrl(nullable: true)
    }

    String contentId
    String headline
    String body
    String source
    String imageUrl
    Date publishDate
    int ratings = 0
    int happy = 0
    int sad = 0
    int optimistic = 0
    int pessimistic = 0
    int hopeful = 0
    int fearful = 0
    int amused = 0
    int unamused = 0
    int excited = 0
    int angry = 0
    int nostalgic = 0
    int flabbergasted = 0

    float score

    static transients =['score']
}

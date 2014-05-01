package news.hack.two

import grails.converters.JSON
import org.codehaus.groovy.grails.web.json.JSONElement


class NewsIngestJob {

    def host = "http://data.bbc.co.uk"
    def apikey = "apikey=G9M5nEpcdIaxAgRiKzmjg3cfPBAsdyIr"

    static triggers = {
      simple startDelay: 5000l, repeatInterval: 3600000l //every hour

    }

    def execute() {

        println("Ingesting news articles")
        def sources = [
                "TheGuardian",
                "SkyNews",
                "TheFinancialTimes",
                "TheMirror",
                "TheHuffingtonPost",
                "TheIrishTimes",
                "TheIrishSun",
                "NewsWeb"

        ]

        sources.each {
            def articles = getArticles(it)
            articles.each { def article ->
                def fullArticle = getArticle(article.cps_id)
                createStories(fullArticle)
            }
            println "Ingested from ${it}"
        }

        println "Ingested ${Story.findAll().size()} stories!"

    }

    private void createStories(def article) {

        if(!Story.findByContentId(article.cps_id)) {
            def publishDate = Date.parse("yyyy-MM-dd'T'HH:mm:ss'Z'", article.published as String)
            def random = new Random()

            Story story = new Story(contentId: article.cps_id, headline: article.title, body: article.body, source: article.source, publishDate: publishDate)
            Mood.values()*.toString().each { mood ->
                int rating = random.nextInt(20)
                story[mood] = rating
                story.ratings += rating
            }
            story.save(flush: true, failOnError: true)
        }
    }

    private JSONElement getArticles(String source) {
        def path = "/bbcrd-juicer/articles.json"

        def contentFormat = "content_format[]=TextualFormat"
        def productSource = "product[]=${source}"

        def response =  ("${host}${path}?${contentFormat}&${apikey}&${productSource}").toURL().text

        return JSON.parse(response).articles
    }

    private getArticle(def articleId) {
        def path = "/bbcrd-juicer/articles/${articleId}.json"
        def response =  ("${host}${path}?${apikey}").toURL().text

        return JSON.parse(response).article

    }
}

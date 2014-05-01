package news.hack.two

import grails.converters.JSON


class NewsIngestJob {
    static triggers = {
      simple startDelay: 5000l, repeatInterval: 600000l // execute job once in 5 seconds

    }

    def execute() {

        log.info("Ingesting news articles")
        def host = "http://data.bbc.co.uk"
        def path = "/bbcrd-juicer/articles.json"

        //product[]=NewsWeb&
        def sources = "product[]=TheGuardian&product[]=SkyNews&product[]=TheFinancialTimes&product[]=TheMirror&product[]=TheHuffingtonPost&product[]=TheIrishTimes&product[]=TheIrishSun"
        def apikey = "apikey=G9M5nEpcdIaxAgRiKzmjg3cfPBAsdyIr"
        def dateRange = "published_after=2010-04-20&published_before=2014-05-03"
        def contentFormat = "content_format[]=TextualFormat"

        def response = ("${host}${path}?${contentFormat}&${dateRange}&${apikey}&${sources}").toURL().text

        def articlesJson = JSON.parse(response)

        articlesJson.articles.each { def article ->
            println "id: ${ article.cps_id} | published: ${article.published} | headline: ${article.title} |  source: ${article.source} "
        }

    }
}

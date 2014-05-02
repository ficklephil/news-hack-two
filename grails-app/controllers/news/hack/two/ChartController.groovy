package news.hack.two

class ChartController {

    def index(String source) {
        List<Story> stories = Story.findAllBySource(source)

        Map dataSet = [:]

        [ "happy", "sad", "optimistic", "pessimistic" ,"hopeful","fearful","amused","unamused","excited","angry","nostalgic" ,"flabbergasted" ].each { String mood ->
            dataSet.put(mood, 0)
            stories.each { Story story ->
                dataSet[mood] += story."$mood"
            }
        }

        def keys = []
        dataSet.keySet().each {
            keys << "'${it}'"
        }
        render(view: "index", model: [keys: keys, values: dataSet.values() ])

    }
}

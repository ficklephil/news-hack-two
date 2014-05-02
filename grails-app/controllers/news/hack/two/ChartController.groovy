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

    def context() {
        List users = User.findAll()
        def moods = [ "happy", "sad", "optimistic", "pessimistic" ,"hopeful","fearful","amused","unamused","excited","angry","nostalgic" ,"flabbergasted" ]
        def contexts = ["ready","move", "needbreak", "end", "surprise"]
        def dataSet = [:]
        contexts.each { String context ->
            dataSet[context] = [:]
            users.each { User user ->
                moods.each { String mood ->
                    if (!dataSet[context][mood]) dataSet[context][mood] = 0
                    dataSet[context][mood] += user."$context"."$mood"
                    if (dataSet[context][mood] < 0) dataSet[context][mood] = 0
                }
            }
        }

        render dataSet
    }
}

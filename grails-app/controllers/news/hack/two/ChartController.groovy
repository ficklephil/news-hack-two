package news.hack.two

class ChartController {

    private static List moods = ["happy", "sad", "optimistic", "pessimistic", "hopeful", "fearful", "amused", "unamused", "excited", "angry", "nostalgic", "flabbergasted"]

    def index() {

        Map sources = [:]
        NewsIngestJob.sources.each { String source  ->
            List<Story> stories = Story.findAllBySource(source)

            Map dataSet = [:]

            moods.each { String mood ->
                dataSet.put(mood, 0)
                stories.each { Story story ->
                    dataSet[mood] += story."$mood"
                }
            }

            sources.put(source, dataSet.values())
        }

        def moodKeys = []
        moods.each {
            moodKeys << "'${it}'"
        }

        render(view: "index", model: [sources: sources, moodKeys: moodKeys] )
    }

    def context() {
        List users = User.findAll()
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

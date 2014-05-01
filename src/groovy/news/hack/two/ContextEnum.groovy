package news.hack.two

/**
 * Created by carcelem on 01/05/2014.
 */
public enum ContextEnum {
    ready("Ready for a new day"),
    move("On the move"),
    needbreak("Need a break"),
    end("End of the day"),
    surprise("Surprise me!");

    String description

    ContextEnum(String description) {
        this.description = description
    }
}
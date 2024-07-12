import FirstLine from "./FirstLine";
import SecondLine from "./SecondLine";

export default class {
    readonly firstLine = new FirstLine()
    readonly secondLine =  new SecondLine()

    isVisible() {
        this.firstLine.isVisible()
        this.secondLine.isVisible()
    }
}
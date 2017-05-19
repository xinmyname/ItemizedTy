export default class Descriptor {

    private static _instance:Descriptor = new Descriptor();

    private constructor() {
    }

    public static get default() : Descriptor {
        return Descriptor._instance || (Descriptor._instance = new Descriptor());
    }

    toString() : string {
        return "DESCRIPTOR";
    }

}

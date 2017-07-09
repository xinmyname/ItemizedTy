import Descriptor from "./Descriptor"

export default class Item {

    private _descriptor:Descriptor

    constructor() {
        this._descriptor = new Descriptor();
    }

    get descriptor() : Descriptor {
        return this._descriptor;
    }

    toString() : string {
        return "item";
    }

}

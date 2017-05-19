import Descriptor from "./Descriptor.js"

export default class Item {

    private _descriptor:Descriptor

    constructor() {
        this._descriptor = Descriptor.default;
    }

    get descriptor() : Descriptor {
        return this._descriptor;
    }

    toString() : string {
        return "item";
    }

}

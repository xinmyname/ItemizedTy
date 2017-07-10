export default class Descriptor {

    private _contents:number[] = []

    public constructor(obj?:any) {

        if (obj instanceof Array) {
            this._contents = (obj as number[]);
        } else if (typeof obj === 'string') {
            this._contents = (obj as string).split("-").map(x => x === '?' ? -1 : Number(x));
            let strIndex = obj as string;
        }
    }

    toString() : string {
        return this._contents.map(x => x < 0 ? "?" : String(x)).join("-");
    }

    iterator() : DescriptorIterator {
        return new DescriptorIterator(this);
    }

    append(index:number|null) {
        this._contents.push(index === null ? -1 : index);
    }

}

class DescriptorIterator {

    private _descriptor:Descriptor;

    public constructor(descriptor:Descriptor) {
        this._descriptor = descriptor;
    }
}
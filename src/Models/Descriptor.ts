export default class Descriptor {

    private _contents : number[] = []

    public constructor(obj? : any) {

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

    append(index : number|null) {
        this._contents.push(index === null ? -1 : index);
    }

    at(position : number) : number {
        let index = this._contents[position];

        if (index < 0)
            return null;

        return index;
    }

    get length() : number { 
        return this._contents.length;
    }
}

class DescriptorIterator {

    private _descriptor : Descriptor;
    private _position : number = 0;

    public constructor(descriptor:Descriptor) {
        this._descriptor = descriptor;
    }

    public next() : number {

        if (this._position >= this._descriptor.length) {
            throw "no more items";
        }

        let index = this._descriptor.at(this._position);

        this._position += 1;

        return index;
    }
}
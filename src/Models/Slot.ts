import Item from "./Item"

export default class Slot {

    private _quantity: number;
    private _item: Item;

    constructor(item: Item) {
        this._quantity = 1;
        this._item = item;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }

    get item(): Item {
        return this._item;
    }

    toString() : string {

        let quantityText = ""

        let text = this._quantity === 1
            ? `${this._item}` 
            : `${this._item}s`;

        switch (this._quantity) {

            case 1: quantityText = "An"; break;
            case 0: quantityText = "No"; break;
            case 2: quantityText = "Two"; break;
            case 3: quantityText = "Three"; break;
            case 4: quantityText = "Four"; break;
            case 5: quantityText = "Five"; break;
            case 6: quantityText = "Six"; break;
            case 7: quantityText = "Seven"; break;
            case 8: quantityText = "Eight"; break;
            case 9: quantityText = "Nine"; break;
            default: quantityText = this._quantity.toString(); break;
        }

        return `${quantityText} ${text}`;
    }

}

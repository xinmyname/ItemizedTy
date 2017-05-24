import Descriptor from "./Descriptor"
import Item from "./Item"
import Slot from "./Slot"

export default class Inventory {

    private _slots: { [index: string]: Slot } = {};

    addItem(item:Item) {

        const descriptor: string = item.descriptor.toString();

        if (this._slots.hasOwnProperty(descriptor)) {
            let slot = this._slots[descriptor];
            slot.quantity += 1;
        } else {
            this._slots[descriptor] = new Slot(item);
        }
        
    }    
    
    get slots(): Slot[] {

        var slots: Slot[] = [];

        for (var index in this._slots) {
            slots.push(this._slots[index]);
        }

        return slots;
    }

}

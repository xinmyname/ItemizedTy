import Item from "../Models/Item.js"

export default class ItemFactory {

    makeItem(): Item {
        return new Item();
    }

}

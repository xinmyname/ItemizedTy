import Item from "../Models/Item"

export default class ItemFactory {

    makeItem(): Item {
        return new Item();
    }

}

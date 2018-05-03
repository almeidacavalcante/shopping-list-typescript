import { Item } from "./Item";

export class ItemList {
    private _items: Item[] = [];

    get items(): Item[] {
        return ([] as Item[]).concat(this._items);
    }

    /**
     * add
     */
    public add(item: Item) {
        this._items.push(item);
    }
}
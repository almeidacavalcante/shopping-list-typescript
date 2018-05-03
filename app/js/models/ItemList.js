class ItemList {
    constructor() {
        this._items = [];
    }
    get items() {
        return this._items;
    }
    add(item) {
        this._items.push(item);
    }
}

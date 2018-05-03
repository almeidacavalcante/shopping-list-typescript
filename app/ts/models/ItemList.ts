class ItemList {
    private _items: Item[] = [];

    get items(): Item[] {
        return this._items;
    }

    /**
     * add
     */
    public add(item: Item) {
        this._items.push(item);
    }
}
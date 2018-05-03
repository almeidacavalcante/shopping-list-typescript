class ShoppingController {
    constructor() {
        this._itemList = new ItemList();
        this._itemView = new ItemView('#item-view');
        this._form = $('.form');
        this._inputItem = $('#item');
    }
    add(event) {
        event.preventDefault();
        let item = new Item(this._inputItem.val());
        debugger;
        this._itemList.add(item);
        this._itemView.update(this._itemList);
    }
    import() {
    }
    clear() {
    }
}

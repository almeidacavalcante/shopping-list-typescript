class ShoppingController {
    
    private _itemList: ItemList;
    private _itemView: ItemView;
    private _inputItem: JQuery;
    private _form: JQuery;

    constructor(){
        this._itemList = new ItemList();
        this._itemView = new ItemView('#item-view');
        this._form = $('.form');

        this._inputItem = $('#item');
    }

    /**
     * add
     */
    public add(event: Event): void {
        event.preventDefault();
        
        let item = new Item(this._inputItem.val());
        debugger
        this._itemList.add(item);
        this._itemView.update(this._itemList);
    }

    /**
     * import
     */
    public import() {
        
    }

    /**
     * clear
     */
    public clear() {
        
    }
}
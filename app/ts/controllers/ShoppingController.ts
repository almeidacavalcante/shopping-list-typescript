import { ItemList } from "../models/ItemList";
import { ItemView } from "../views/ItemView";
import { Item } from "../models/Item";
import { lazy } from "../helpers/decorators/index";

export class ShoppingController {
    
    
    private _itemList: ItemList;
    private _itemView: ItemView;
    private _inputItem: JQuery;

    @lazy('.form')
    private _form: JQuery;

    constructor(){
        this._itemList = new ItemList();

        this._inputItem = $('#item');
    }

    /**
     * add
     */
    public add(event: Event): void {
        event.preventDefault();
        
        let item = new Item(this._inputItem.val());
        
        this._itemList.add(item);
        this._itemView.update(this._itemList);
    }

    /**
     * import
     */
    public import(event: Event): void {
        event.preventDefault();
    }

    /**
     * clear
     */
    public clear(event: Event): void {
        event.preventDefault();

        this._itemList = new ItemList();
        this._itemView.update(this._itemList);
    }
}
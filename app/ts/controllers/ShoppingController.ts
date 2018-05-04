import { ItemList } from "../models/ItemList";
import { ItemView } from "../views/ItemView";
import { Item } from "../models/Item";
import { lazy, throttle } from "../helpers/decorators/index";
import { ImportedItem } from "../models/ImportedItem";
import { ShoppingService } from "../services/index";



export class ShoppingController {
    
    private _itemList: ItemList;
    private _itemView: ItemView;

    @lazy('#item')
    private _inputItem: JQuery;

    @lazy('.form')
    private _form: JQuery;

    private _service = new ShoppingService();

    constructor(){
        this._itemList = new ItemList();
        this._itemView = new ItemView('#item-view');
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

    @throttle(1000)
    public import(event: Event): void {
        event.preventDefault();

        function responseHandler(res: Response): Response {
            if(res.ok){
                return res;
            }else{
                throw new Error(res.statusText);
            }
        }

        this._service.fetchFromServer(responseHandler)
            .then(list => {
                list.map(item => {
                    this._itemList.add(item)
                    this._itemView.update(this._itemList);  
                }
            )
        })
              
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
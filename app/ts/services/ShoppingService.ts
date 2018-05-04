import { Item } from "../models/Item";
import { ImportedItem } from "../models/ImportedItem";

export class ShoppingService {
    
    /**
     * fetchFromServer
     */
    public fetchFromServer(handler: any): Promise<Item[]>{

        return fetch('https://demo8733027.mockable.io/list')
            .then(res => handler(res))
            .then(res => res.json())
            .then((list: ImportedItem[]) => {
                return list
            }
        )
        
    }
}
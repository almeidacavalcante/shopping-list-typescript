import { ItemList } from "../models/ItemList";
import { View } from "./View";

export class ItemView extends View<ItemList>{
    
    constructor(selector: string){
        super(selector);       
    }

    template(model: ItemList): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr class="center">
                    <td colspan="2"><b>LIST</b></td>
                </tr>
            </thead>
            <tbody>
                ${model.items.map(item => 
                    `
                    <tr>
                        <td class="name-td">

                            ${item.name}  

                        </td>

                        <td class="delete-td">

                            <button id='delete' class='btn btn-danger'>Delete</button>

                        </td>

                    </tr>
                    `
                ).join('')}

            </tbody>
        </table>    

        `;
    }
}
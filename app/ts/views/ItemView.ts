class ItemView extends View<ItemList>{
    
    constructor(selector: string){
        super(selector);
    }

    template(model: ItemList): string{
        return `
        
        <table class="table table-hover table-bordered">
            <thead>
                <tr class="center">
                    <td><b>ITEMS</b></td>
                </tr>
            </thead>
            <tbody>
                
                <tr>
                    <td></td>
                </tr>
            </tbody>
        </table>    

        `;
    }


}
class ItemView extends View {
    constructor(selector) {
        super(selector);
    }
    template(model) {
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

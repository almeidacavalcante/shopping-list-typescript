System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View_1, ItemView;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            ItemView = class ItemView extends View_1.View {
                constructor(selector) {
                    super(selector);
                }
                template(model) {
                    return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr class="center">
                    <td colspan="2"><b>LIST</b></td>
                </tr>
            </thead>
            <tbody>
                ${model.items.map(item => `
                    <tr>
                        <td class="name-td">

                            ${item.name}  

                        </td>

                        <td class="delete-td">

                            <button id='delete' class='btn btn-danger'>Delete</button>

                        </td>

                    </tr>
                    `).join('')}

            </tbody>
        </table>    

        `;
                }
            };
            exports_1("ItemView", ItemView);
        }
    };
});

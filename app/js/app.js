System.register(["./controllers/ShoppingController"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ShoppingController_1, controller;
    return {
        setters: [
            function (ShoppingController_1_1) {
                ShoppingController_1 = ShoppingController_1_1;
            }
        ],
        execute: function () {
            controller = new ShoppingController_1.ShoppingController();
            $('.form').submit(controller.add.bind(controller));
            $('#clear').click(controller.clear.bind(controller));
        }
    };
});

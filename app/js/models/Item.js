System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Item;
    return {
        setters: [],
        execute: function () {
            Item = class Item {
                constructor(name) {
                    this.name = name;
                }
            };
            exports_1("Item", Item);
        }
    };
});

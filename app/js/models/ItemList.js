System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ItemList;
    return {
        setters: [],
        execute: function () {
            ItemList = class ItemList {
                constructor() {
                    this._items = [];
                }
                get items() {
                    return [].concat(this._items);
                }
                add(item) {
                    this._items.push(item);
                }
            };
            exports_1("ItemList", ItemList);
        }
    };
});

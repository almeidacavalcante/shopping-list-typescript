System.register(["../models/ItemList", "../views/ItemView", "../models/Item", "../helpers/decorators/index", "../services/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var ItemList_1, ItemView_1, Item_1, index_1, index_2, ShoppingController;
    return {
        setters: [
            function (ItemList_1_1) {
                ItemList_1 = ItemList_1_1;
            },
            function (ItemView_1_1) {
                ItemView_1 = ItemView_1_1;
            },
            function (Item_1_1) {
                Item_1 = Item_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            ShoppingController = class ShoppingController {
                constructor() {
                    this._service = new index_2.ShoppingService();
                    this._itemList = new ItemList_1.ItemList();
                    this._itemView = new ItemView_1.ItemView('#item-view');
                }
                add(event) {
                    event.preventDefault();
                    let item = new Item_1.Item(this._inputItem.val());
                    this._itemList.add(item);
                    this._itemView.update(this._itemList);
                }
                import(event) {
                    event.preventDefault();
                    function responseHandler(res) {
                        if (res.ok) {
                            return res;
                        }
                        else {
                            throw new Error(res.statusText);
                        }
                    }
                    this._service.fetchFromServer(responseHandler)
                        .then(list => {
                        list.map(item => {
                            this._itemList.add(item);
                            this._itemView.update(this._itemList);
                        });
                    });
                }
                clear(event) {
                    event.preventDefault();
                    this._itemList = new ItemList_1.ItemList();
                    this._itemView.update(this._itemList);
                }
            };
            __decorate([
                index_1.lazy('#item')
            ], ShoppingController.prototype, "_inputItem", void 0);
            __decorate([
                index_1.lazy('.form')
            ], ShoppingController.prototype, "_form", void 0);
            __decorate([
                index_1.throttle(1000)
            ], ShoppingController.prototype, "import", null);
            exports_1("ShoppingController", ShoppingController);
        }
    };
});

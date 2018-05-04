System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ShoppingService;
    return {
        setters: [],
        execute: function () {
            ShoppingService = class ShoppingService {
                fetchFromServer(handler) {
                    return fetch('https://demo8733027.mockable.io/list')
                        .then(res => handler(res))
                        .then(res => res.json())
                        .then((list) => {
                        return list;
                    });
                }
            };
            exports_1("ShoppingService", ShoppingService);
        }
    };
});

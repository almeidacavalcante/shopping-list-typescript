System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function lazy(selector) {
        return function (target, key) {
            let element;
            const getter = function () {
                if (!element) {
                    console.log(`Searching ${selector} to load in ${key}`);
                    element = $(selector);
                }
                return element;
            };
            Object.defineProperty(target, key, {
                get: getter
            });
        };
    }
    exports_1("lazy", lazy);
    return {
        setters: [],
        execute: function () {
        }
    };
});

System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function throttle(timeOut) {
        return function (target, propertyKey, descriptor) {
            const originalMethod = descriptor.value;
            let timer = timeOut;
            descriptor.value = function (...args) {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    originalMethod.apply(this, args);
                }, timeOut);
            };
            return descriptor;
        };
    }
    exports_1("throttle", throttle);
    return {
        setters: [],
        execute: function () {
        }
    };
});

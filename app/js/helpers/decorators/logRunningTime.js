System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logRunningTime() {
        return function (target, propertyKey, descriptor) {
            const sourceMethod = descriptor.value;
            descriptor.value = function (...args) {
                console.log(`Parameters of ${propertyKey}: ${JSON.stringify(args)}`);
                const t1 = performance.now();
                const retorno = sourceMethod.apply(this, args);
                const t2 = performance.now();
                console.log(`${propertyKey} last ${t2 - t1} ms`);
                console.log('--------------------------------');
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("logRunningTime", logRunningTime);
    return {
        setters: [],
        execute: function () {
        }
    };
});

export function throttle(timeOut: number) {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor){

        const originalMethod = descriptor.value;

        let timer = timeOut;

        descriptor.value = function (...args: any[]) {

            clearTimeout(timer);         
            timer = setTimeout(() => {
                originalMethod.apply(this, args)
            }, timeOut);

        }

        return descriptor;

    }

}
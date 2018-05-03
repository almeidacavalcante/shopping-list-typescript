export function logRunningTime() {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        //Guarda a lógica do método fonte onde o decorator está anotado;
        const sourceMethod = descriptor.value;

        //Substitui a lógica do método fonte pela função passada;
        descriptor.value = function (...args: any[]) {

            /**
             * Rotina anterior à execução do método em questão.
             */

            console.log(`Parameters of ${propertyKey}: ${JSON.stringify(args)}`);
            const t1 = performance.now();

            //Executa o método fonte no contexto do objeto onde esse método está e passando os
            //argumentos todos.
            const retorno = sourceMethod.apply(this, args);

            /**
             * Rotina posterior à execução do método em questão.
             */
            const t2 = performance.now();
            console.log(`${propertyKey} last ${t2 - t1} ms`);
            console.log('--------------------------------');
            
            //Retorna o retorno do método;
            return retorno;
        }

        //Retorna o descriptor
        return descriptor;
    }
}
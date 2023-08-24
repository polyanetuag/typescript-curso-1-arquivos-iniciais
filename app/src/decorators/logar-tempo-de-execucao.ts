export function logarTempoDeExecucao() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value
        descriptor.value = function() {
            const t1 = performance.now()
            const retorno = metodoOriginal()
            const t2 = performance.now()
            console.log(`${propertyKey}: O tempo de execução foi de ${(t2 - t1)/1000} segundos`)
            retorno
        } 


        return descriptor
    }
}
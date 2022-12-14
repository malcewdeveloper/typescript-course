import "reflect-metadata";

// Decorators
const LogTime = (target: Object, propertyName: string, descriptor: PropertyDescriptor) => {
    const method = descriptor.value;
    descriptor.value = function(...args: any) {
        console.time(propertyName);
        const result = method.apply(this, args);
        console.timeEnd(propertyName);
        
        return result;
    }
}
export class TestClass {
    @LogTime
    testMethod() {
        return Math.random() * Math.random() * Math.random() * Math.random();
    }
}

console.log(new TestClass().testMethod());

// Class decorator
type Constructor = new (...args: any[]) => {};
const Singleton = (constructor: Constructor) => {
    Reflect.defineMetadata('Singleton', true, constructor)
}

@Singleton
class TestClassTwo {
    constructor() {
        console.log('Created');
    }
}
const instanceMap = new Map();
function getInstance(constructor: Constructor) {
    const isSingleton = Reflect.getMetadata('Singleton', constructor);

    if(isSingleton) {
        if(instanceMap.has(constructor)) {
            instanceMap.set(constructor, new constructor());
        }
        return instanceMap.get(constructor);
    }

    return new constructor();
}
const instanceOne = getInstance(TestClassTwo);
const instanceTwo = getInstance(TestClassTwo);
const instanceThree = getInstance(TestClassTwo);
const instanceFour = getInstance(TestClassTwo);

// Properties decorator
function Check(metadata: {min: number, max: number}) {
    return (object: Object, propertyName: string) => {
        Reflect.defineMetadata(`validate-${propertyName}`, metadata, object.constructor)
    }
}
class Bulldog {
    @Check({
        min: 10,
        max: 15
    })
    weigh: number;
    constructor(weight: number) {
        this.weigh = weight
    }
}

class Corgi {
    @Check({
        min: 8,
        max: 13
    })
    weigh: number;
    constructor(weight: number) {
        this.weigh = weight
    }
}

function validateDogs<T extends object>(dog: T): boolean {
    const properties = Object.getOwnPropertyNames(dog);

    return properties.every(propertyName => {
        let metadata = Reflect.getMetadata(`validate-${propertyName}`, dog.constructor);
        if(metadata?.min && metadata?.max) {
            const value = dog[propertyName as keyof T];
            return value >= metadata.min && value <= metadata.max;
        }
        return true;
    });
}

validateDogs(new Bulldog(16));
validateDogs(new Bulldog(12));

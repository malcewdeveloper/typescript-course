// Infer
export let testVar = '';

function getRandom(max: number): number {
    return Math.random() * max;
}

let dog = {
    owner: '',
    name: ''
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}

getProperty(dog, 'name');


function call<ArgType extends any[], ReturnType>(callback: (...args: ArgType) => ReturnType, ...args: ArgType): ReturnType {
    return callback(...args);
}

const result = call(getRandom, 123);

type ReturnType<FunctionType extends (...args: any[]) => any> = FunctionType extends (...args: any[]) => infer ReturnType ? ReturnType : never;
type ArgumentsType<FunctionType extends (...args: any[]) => any> = FunctionType extends (...args: infer ArgumentsType) => any ? ArgumentsType : never;
type CallReturnType = ReturnType<typeof getRandom>;
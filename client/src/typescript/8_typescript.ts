//Generics
interface Dog {
    owner: string,
    name?: string
}

interface Cat {
    name: string
}

export type Getters<T> = {
    [key in keyof T as `get${Capitalize<string & key>}`]: () => T[key]
}

type Readonly<T> = {
    readonly [key in keyof T]: T[key]
}

let dogGetters: Getters<Dog> = {
    getOwner(): string{
        return ''
    }
}

let catGetters: Getters<Cat> = {
    getName(): string {
        return ''
    }
}

let dog: Readonly<Dog> = {
    owner: '',
    name: ''
}

function getProperty<T, K extends keyof T>(object: T, key: K) {
    return object[key];
}

getProperty(dog, 'owner');

interface Response<T> {
    status: 200 | 300 | 400 | 500;
    result: T
}

let dogResponse: Response<Dog>;

// Потярял связь с кодом
interface TransformMin {
    a: string;
    b: string;
}

interface TransformMax extends TransformMin {
    b2: string;
    b3: string;
}

interface Transformer<T extends TransformMin> {
    transformer(obj: T) : T
}

class Transformer<T extends TransformMin> {
    transform(obj: T): T {
        return {
            ...obj,
            a: `${obj.a} - a`,
            b: `${obj.b} - b`,
        }
    }
}

class Transformer2<T extends TransformMin> {
    transform(obj: T): T {
        return {
            ...obj,
            b2: `${obj.a}: a`,
            b3: `${obj.b}: b`,
        }
    }
}

function getTransformer<T extends TransformMin>() {
    return 1 > 2 ? new Transformer<T>() : new Transformer2<T>()
}

const result = getTransformer<TransformMax>().transform({a: '', b: '', b2: '', b3: ''})
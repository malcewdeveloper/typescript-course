// Mapped Types

export type Record = {
    [key: string]: number;
}

const record: Record = {
    a: 0,
    2: 2
}

interface Dog {
    weight: number;
    readonly color: string;
    name: string;
    bark: () => void;
    owner: {
        name: string
    }
}

type Bark = Dog['bark'];

type DogClone = {
    [key in keyof Dog]: Dog[key];
}

type DogReadonly = {
    readonly [key in keyof Dog]: Dog[key];
}

type DogNoReadonly = {
    -readonly [key in keyof Dog]: Dog[key];
}

type DogOptional = {
    [key in keyof Dog]?: Dog[key];
}

type DogNoOptional = {
    [key in keyof Dog]-?: Dog[key];
}

const dogWithOpt: DogOptional = {
    weight: 10,
    color: 'dark'
} 

type ReadonlyType = {
    readonly id: number
    readonly name: string
}

type NoReadonlyType = {
    age: number
}

type mixTypes = ReadonlyType & NoReadonlyType;

const mix: mixTypes = {
    id: 1,
    name: 'Maksim',
    age: 20
}

type DogGetters = {
    [key in keyof Dog as `get${Capitalize<key>}`]: () => Dog[key]
}

type DogSetters = {
    [key in keyof Dog as `set${Capitalize<key>}`]: (param: Dog[key]) => void;
}

type ComletedDog = Dog & DogGetters & DogSetters;
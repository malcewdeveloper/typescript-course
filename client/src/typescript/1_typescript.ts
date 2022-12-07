// Boolean
export let isTrue: boolean = true;
isTrue = false;

// Number
let num : number = 10;
let float: number = 10.6;
let binary: number = 0b101;

// Bigint
let bigint: bigint = 100n;

// String 
let str: string = 'Hello TS';

// null
let nullVar: null = null;

// undefined
let undefinedVar: undefined = undefined;

// Object
let objectVar: {
    id: number
    name: string
    isAdmin: boolean
    user: {
        id: number,
        name: string,
        children: {
            count: number
        } 
    }
} = { id: 1, name: 'Maksim', isAdmin: true, user: { id: 1, name: 'Maksim', children: { count: 5 } } };

// Array
let arrayVar: { a: number, b: string }[] = [{ a: 1, b: '2' }, { a: 1, b: '2' }, { a: 1, b: '2' }];
let dubbleArrayVar: string[][] = [['a', 'b'], ['b']];

// Tuple
const tuple: [string, number] = ['a', 123];

// Any
let anyVar: any;
anyVar = 10;
anyVar = 'string';
anyVar = true;
anyVar = [{}, [], 11, 'sfgd'];

// Unknown
let unknownVar: unknown = {a: 'a', b: 'b'};

// function
function typedFunction({ id, name }: { id: number, name: string }): { id: number, name: string, age: number } {
    return { id: id, name: name, age: 20 };
}
const result = typedFunction({ id: 1, name: 'Maksim' });

// Void
function log(): void {
    console.log('Hello world');
}

// Never
function neverEnd(): never {
    throw new Error('This is error');
}

// Litiral Types + Union Types
let fontWeight: 400 | 500 | 600 | 700 | 800 = 400;
let position : 'fixed' | 'absolute' = 'fixed';
let resetLiteralTypeVar: { a: 123, b: 'a' | 'c' } | [123, 456] = [123, 456];



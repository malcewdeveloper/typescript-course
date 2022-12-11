interface Dog {
    name: string;
    weight: number;
}

export type Test = Readonly<any>
type TestTwo = Pick<Dog, 'name'> // Создает новый тип с указанными свойствами
type TestThree = Omit<Dog, 'name'> // Исключает указанное свойство создавая новый тип
type TestFour = Record<string, number> //Mapped type с более простым синтаксисом

// TypeGuard
// 1. typeof
function padLeft(padding: number | string, input: string): string {
    if(typeof padding === 'number') {
        return new Array(padding + 1).join(' ') + input;
    }
    return padding + input;
}

// 2. Проверка на равенство
function anyFunc(x: string | number, y: string | boolean) {
    if(x === y) {
        x.toUpperCase();
        y.toUpperCase();
    }
}

// 3. Проверка на истинность
function logName(name?: string) {
    name?.toUpperCase()
}

// 4. in operator
interface Dog {
    bark(): void
}
interface Cat {
    meow(): void
}
function makeSomeNoise(pet: Dog | Cat) {
    if('bark' in pet) {
       pet.bark();
    }else {
        pet.meow();
    }
}

// 5. instanceof
function logDate(date: Date | string) {
    if(date instanceof Date) {
        console.log(date.getFullYear);
    } else {
        console.log(date.toUpperCase());
        
    }
}

// 6. Type predicate
function isDog(pet: unknown): pet is Dog {
    const dog = pet as Dog; // Вытащили собаку
    return dog.bark !== undefined && typeof dog.bark === 'function'; // Проверил на сколько она собака
}


interface MovieBase<T> {
    type: T
}
interface Film extends MovieBase<'film'> {
    duration: number;
}
interface Series extends MovieBase<'series'> {
    seasons: number;
}

function logDuration(movie: Film | Series) {
    if(movie.type === 'film') {
        console.log(movie.duration);
    } else {
        console.log(movie.seasons);
    }
}
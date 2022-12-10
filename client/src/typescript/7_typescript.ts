// Extends, implements
export interface I1 {
    bark: () => void
};
// export interface I2 extends I1, I3, T1, C2 { //Любое количество расширений, как от interface, так и class, type

// };
export interface I3 {

};

type T1 = {} & I1 & T2 & C2; //Любое количество расширений, как от interface, так и class, type
type T2 = {};
type T3 = {};

abstract class CA1 {
    abstract bark(): void; //Необходимо реализовать при наследовании
    run() {
        console.log('run');
    }
}

// class C1 extends T1, I1 { //Множественное наследование и аследование от type, interface недоступно

// };
class C2 extends CA1 {
    bark() {
        console.log('Bark');
        this.run() //Уже реализованные методы можем использовать
    }
};
class C3 extends C2 implements I1, I3, T1, C2 { //Наследоваться от одного роидтеля, но реализовываться от множества class, type, interface
    bark() {
        console.log('Bark!');
    }
};


interface Pet {
    name?: string;
    makeNoise: () => void;
}
class Bulldog implements Pet {
    name = 'Billdog';
    makeNoise() {
        console.log('Bark!');
    }
}
class Corgi implements Pet {
    name = 'Corgi';
    makeNoise() {
        console.log('Bark!Bark!');
    }
}
class Cat implements Pet {
    makeNoise() {
        console.log('Cat!Cat!');
    }
}
function makeNoise(pet: Pet) {
    console.log(pet.name);
    pet.makeNoise();
}
makeNoise(new Bulldog());
makeNoise(new Corgi());
makeNoise(new Cat())
// Classes vs interface
// У класса есть реализация

export interface DogInterface {
    weight: number;
    readonly color: string;
    name: string;
    bark: () => void
}

class DogClass {
    public name: string;
    protected weight: number;

    constructor(name: string, weight: number) {
        this.name = name;
        this.weight = weight;
    }

    private bark(): void {
        console.log('bark');
    }
}

class BulldogClass extends DogClass {
    snoringVolume: number;

    constructor(name: string, weight: number, snoringVolume: number) {
        super(name, weight);
        this.snoringVolume = snoringVolume;

        this.bark()
    }
}

const dog = new DogClass('Bark', 12);

console.log(dog.bark());



const dog2: DogClass = {
    name: 'Robbie',
    weight: 5,
    bark(): void {
        console.log('Bark! Bark!');
    },
};

console.log(dog2.name);
console.log(dog2.weight);
console.log(dog2.bark());



// Interfaces
export interface Owner {
    name: string,
}

interface Dog {
    weight: number;
    readonly color: string;
    name: string;
    bark: () => void;
    owner: Owner;
    awards?: Awards[];
}

interface Awards {
    price: number
}

interface frenchBulldog extends Dog {
    color: 'fawn' | 'black' | 'brown';
    snorihgVolume: number;
}

const owner: Owner = {
    name: 'Maksim'
}

const frenchBulldog: frenchBulldog = {
    weight: 12,
    color: 'fawn',
    name: 'Richard',
    bark() {
        console.log('bark');
    },
    owner: owner,
    awards: [{price: 10000}],
    snorihgVolume: 10
}

const ownerDogie = {
    name: 'Daria'
}

const corgi: Dog = {
    weight: 10,
    color: 'blue', 
    name: 'dogie',
    bark() {
        console.log('dogie');
    },
    owner: ownerDogie
}
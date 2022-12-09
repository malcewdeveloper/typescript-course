// Type Alias
type CustomString = string;
type FontWeight = 400 | 500 | 600 | 700;

const fontWeight: FontWeight = 400;

type Dogies = {
    weight: number;
    readonly color: number;
    name: string;
    bark: () => void;
}

type FrenchBulldogProperties = {
    readonly color: 'fawn' | 'black' | 'brown';
    snoringVolume: number;
}

type FranchBulldog = Dogies & FrenchBulldogProperties

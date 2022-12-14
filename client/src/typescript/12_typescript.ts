// Conditional type
export interface IdLabel {
    id: number
}

interface NameLabel { 
    name: string
}

type NameOrId<T extends number | string> = T extends number ?  IdLabel : NameLabel;

function createLabel<T extends string | number>(idOrNameLabel: T): NameOrId<T> {
    throw '-';
}

let numberLabelObject = createLabel(23);
let stringLabelObject = createLabel('hello');

numberLabelObject.id
stringLabelObject.name
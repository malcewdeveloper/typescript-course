// Mixins
export class Animal {
    food(): void {

    }
}
class Movable {
    move(): void {

    }
}
class Horse {

}
interface Horse extends Animal, Movable {};

type Constructor = new (...args: any[]) => {};

function applyMixins(target: Constructor, baseClasses: Constructor[]) {
    baseClasses.forEach(baseClass => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
            target.prototype[name] = baseClass.prototype[name];
        })
    });
}

applyMixins(Horse, [Animal, Movable]);

let horse: Horse = new Horse();

horse.move();



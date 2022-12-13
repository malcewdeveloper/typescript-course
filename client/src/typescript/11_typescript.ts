// Factory
export class Animal {
    feed(): void {

    }
}

class Horse extends Animal {

}

type Constructor = new (...args: any[]) => {};

function createMovable<T extends Constructor>(Base: T) {
    return class Movable extends Base {
        speed = 0;
        move() {

        }
    }
}

const MovableHorse = createMovable(Horse);

const movableHorse = new MovableHorse();

movableHorse.move();
movableHorse.feed();
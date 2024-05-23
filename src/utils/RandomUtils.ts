export namespace RandomUtils {
    export function getRandomInt(min: number, max: number): number {
        min = Math.floor(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    export function getRandomElement(elements: any[]): any {
        let temporalArray = elements.sort(() => Math.random() - 0.5);
        return temporalArray[0];
    }
}
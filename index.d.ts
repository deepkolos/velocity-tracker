export declare class Point {
    x: number;
    y: number;
    timeStamp: number;
    constructor(x: any, y: any);
}
export default class VelocityTracker {
    pointsLen: number;
    points: Array<Point>;
    constructor(len?: number);
    destroy(): void;
    clear(): void;
    addMovement(point: any): void;
    getPoint(lastPointCount?: number): Point;
    getXVelocity(lastPointCount: number, predictTime: any): number;
    getYVelocity(lastPointCount: number, predictTime: any): number;
    getXAcceleration(lastPointCount?: number): number;
    getYAcceleration(lastPointCount?: number): number;
    predictX(a?: number): {
        s: number;
        t: number;
    };
    predictY(a?: number): {
        s: number;
        t: number;
    };
}

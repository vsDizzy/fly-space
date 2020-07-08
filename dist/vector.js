export class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    get unit() {
        return this.mul(1 / this.length);
    }
    sub(other) {
        return new Vector(this.x - other.x, this.y - other.y);
    }
    mul(by) {
        return new Vector(this.x * by, this.y * by);
    }
    rotate(angleRad) {
        const cos = Math.cos(angleRad);
        const sin = Math.sin(angleRad);
        const x = this.x * cos - this.y * sin;
        const y = this.x * sin + this.y * cos;
        return new Vector(x, y);
    }
}
//# sourceMappingURL=vector.js.map
export class Vector {
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  get unit() {
    return this.mul(1 / this.length);
  }

  constructor(public readonly x: number, public readonly y: number) {}

  sub(other: Vector) {
    return new Vector(this.x - other.x, this.y - other.y);
  }

  mul(by: number) {
    return new Vector(this.x * by, this.y * by);
  }

  rotate(angleRad: number) {
    const cos = Math.cos(angleRad);
    const sin = Math.sin(angleRad);

    const x = this.x * cos - this.y * sin;
    const y = this.x * sin + this.y * cos;

    return new Vector(x, y);
  }
}

import { width, height } from './app.js';
import { maxZ, speed } from './app.js';
import { beam } from './beam.js';
import { Vector } from './vector.js';

export class Star {
  x: number;
  y: number;
  z: number;

  px: number;
  py: number;
  pr: number;

  reset() {
    this.x = Math.random() * width - width / 2;
    this.y = Math.random() * height - height / 2;
    this.z = Math.random() * maxZ * 3;

    this.pr = null;
  }

  update() {
    this.z -= speed;
    if (this.z < 1) {
      this.reset();
    }
    if (this.z > maxZ * 3) {
      this.reset();
    }
  }

  draw() {
    const sx = (this.x / this.z) * maxZ;
    const sy = (this.y / this.z) * maxZ;

    const r1 = maxZ / this.z;

    const s = new Vector(sx, sy);
    beam(s, this.pr ? new Vector(this.px, this.py) : s, r1, this.pr);

    this.px = sx;
    this.py = sy;
    this.pr = r1;
  }
}

import { ctx, width, height } from './ctx.js';
import { maxZ, speed } from './app.js';

export class Star {
  x: number;
  y: number;
  z: number;

  reset() {
    this.x = Math.random() * width - width / 2;
    this.y = Math.random() * height - height / 2;
    this.z = Math.random() * maxZ * 2;
  }

  update() {
    this.z -= speed;
    if (this.z < 1) {
      this.reset();
    }
  }

  draw() {
    const sx = (this.x / this.z) * maxZ;
    const sy = (this.y / this.z) * maxZ;

    const r = maxZ / this.z;

    ctx.beginPath();
    ctx.arc(sx, sy, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }
}

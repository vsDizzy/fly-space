import { ctx, width, height } from './ctx.js';
import { maxZ } from './app.js';

export class Star {
  x: number;
  y: number;
  z: number;

  reset() {
    this.x = Math.random() * width - width / 2;
    this.y = Math.random() * height - height / 2;
    this.z = Math.random() * maxZ;
  }

  update() {
    this.z -= 8;
    if (this.z < 1) {
      this.reset();
    }
  }

  draw() {
    const sx = (this.x / this.z) * maxZ;
    const sy = (this.y / this.z) * maxZ;

    ctx.beginPath();
    ctx.arc(sx, sy, 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }
}

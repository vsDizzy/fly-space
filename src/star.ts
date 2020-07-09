import { ctx, width, height } from './ctx.js';
import { maxZ } from './app.js';

export class Star {
  x: number;
  y: number;
  z: number;

  update() {
    this.z -= 1;
  }

  draw() {
    const sx = (this.x / this.z) * maxZ;
    const sy = (this.y / this.z) * maxZ;

    ctx.beginPath();
    ctx.arc(sx, sy, 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }
}

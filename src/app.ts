import { ctx, width, height } from './ctx.js';
import { beam } from './beam.js';
import { Vector } from './vector.js';
import { Star } from './star.js';

ctx.translate(width / 2, height / 2);
ctx.fillStyle = '#ffffff';

beam(new Vector(50, 50), new Vector(550, 550), 30, 50);

const stars = new Array<Star>(300);
export const maxZ = Math.max(width, height);
for (let i = 0; i < stars.length; i++) {
  const s = new Star();
  stars[i] = s;

  s.x = Math.random() * width - width / 2;
  s.y = Math.random() * height - height / 2;
  s.z = maxZ;
}

requestAnimationFrame(draw);

let lastTs: DOMHighResTimeStamp;
function draw(ts: DOMHighResTimeStamp) {
  const fps = Math.round((1000 / (ts - lastTs)) * 100) / 100;
  lastTs = ts;

  ctx.clearRect(-width / 2, -height / 2, width, height);
  ctx.fillStyle = 'white';
  ctx.fillText(fps.toString(), 4 - width / 2, 12 - height / 2);

  for (const s of stars) {
    s.update();
    s.draw();
  }

  requestAnimationFrame(draw);
}

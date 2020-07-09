import { ctx, width, height } from './ctx.js';
import { beam } from './beam.js';
import { Vector } from './vector.js';
import { Star } from './star.js';
export const speed = 8;
export const maxZ = Math.max(width, height);
ctx.translate(width / 2, height / 2);
ctx.fillStyle = '#ffffff';
beam(new Vector(50, 50), new Vector(550, 550), 30, 50);
const stars = new Array(500);
for (let i = 0; i < stars.length; i++) {
    const s = new Star();
    stars[i] = s;
    s.reset();
}
requestAnimationFrame(draw);
let lastTs;
function draw(ts) {
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
//# sourceMappingURL=app.js.map
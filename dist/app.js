import { ctx, width, height } from './ctx.js';
import { beam } from './beam.js';
import { Vector } from './vector.js';
import { Star } from './star.js';
ctx.fillStyle = '#ffffff';
beam(new Vector(50, 50), new Vector(550, 550), 30, 50);
const stars = new Array(300);
for (let i = 0; i < stars.length; i++) {
    const s = new Star();
    stars[i] = s;
    s.x = Math.random() * width;
    s.y = Math.random() * height;
    s.z = Math.random() * Math.max(width, height);
}
requestAnimationFrame(draw);
let lastTs;
function draw(ts) {
    const fps = Math.round((1000 / (ts - lastTs)) * 100) / 100;
    lastTs = ts;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'white';
    ctx.fillText(fps.toString(), 4, 12);
    for (const s of stars) {
        s.update();
        s.draw();
    }
    requestAnimationFrame(draw);
}
//# sourceMappingURL=app.js.map
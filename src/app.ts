import { Star } from './star.js';

const cv = document.getElementById('canvas') as HTMLCanvasElement;
export const ctx = cv.getContext('2d');

export const width = cv.width;
export const height = cv.height;

export let speed: number;
export const maxZ = Math.max(width, height);

const spEl = document.getElementById('speed') as HTMLInputElement;
spEl.addEventListener('change', () => {
  let val = parseInt(spEl.value);
  speed = val;
});
spEl.dispatchEvent(new Event('change'));

window.addEventListener('wheel', (ev) => {
  let val = parseInt(spEl.value);
  val += -Math.sign(ev.deltaY) * 8;

  spEl.value = val.toString();
  spEl.dispatchEvent(new Event('change'));
});

ctx.translate(width / 2, height / 2);
ctx.fillStyle = '#ffffff';

const stars = new Array<Star>(500);
for (let i = 0; i < stars.length; i++) {
  const s = new Star();
  stars[i] = s;
  s.reset();
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

  setTimeout(() => {
    requestAnimationFrame(draw);
  }, 0);
}

import { ctx } from './ctx.js';
export function beam(start, end, s1, s2) {
    const normal = end
        .sub(start)
        .unit.mul(s2)
        .rotate(Math.PI / 2);
    const ang = Math.atan2(normal.y, normal.x);
    const ne = end.sub(normal);
    ctx.beginPath();
    ctx.arc(start.x, start.y, s1, ang, ang + Math.PI);
    ctx.lineTo(ne.x, ne.y);
    ctx.arc(end.x, end.y, s2, ang + Math.PI, ang);
    ctx.closePath();
    ctx.fill();
}
//# sourceMappingURL=beam.js.map
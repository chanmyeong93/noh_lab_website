/* ==========================================================================
   js/main.js - 3D Molecule Interactive Canvas (화면 전체 확장)
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initMoleculeCanvas();
});

function initMoleculeCanvas() {
  const hero = document.getElementById("hero-bg");
  if (!hero) return;

  const canvas = document.createElement("canvas");
  canvas.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none;";
  hero.insertBefore(canvas, hero.firstChild);
  const ctx = canvas.getContext("2d");

  let w = 0, h = 0, dpr = 1;
  let targetRotX = 0, targetRotY = 0;
  let rotX = 0, rotY = 0;

  const atoms = [];
  const bonds = [];
  const ATOM_COUNT = 65; // 분자 입자 수 확대

  for (let i = 0; i < ATOM_COUNT; i++) {
    atoms.push({
      x: (Math.random() - 0.5) * 800, // 공간 범위 확장
      y: (Math.random() - 0.5) * 500,
      z: (Math.random() - 0.5) * 600,
      radius: Math.random() > 0.85 ? 6 : 3,
      color: Math.random() > 0.35 ? "16, 185, 129" : "59, 130, 246"
    });
  }

  for (let i = 0; i < ATOM_COUNT; i++) {
    for (let j = i + 1; j < ATOM_COUNT; j++) {
      const dx = atoms[i].x - atoms[j].x;
      const dy = atoms[i].y - atoms[j].y;
      const dz = atoms[i].z - atoms[j].z;
      if (Math.sqrt(dx * dx + dy * dy + dz * dz) < 140) {
        bonds.push([i, j]);
      }
    }
  }

  function resize() {
    const rect = hero.getBoundingClientRect();
    dpr = window.devicePixelRatio || 1;
    w = rect.width; h = rect.height;
    canvas.width = w * dpr; canvas.height = h * dpr;
    canvas.style.width = w + "px"; canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function frame() {
    ctx.clearRect(0, 0, w, h);
    rotX += (targetRotX - rotX) * 0.04;
    rotY += (targetRotY - rotY) * 0.04;

    const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
    const cosY = Math.cos(rotY), sinY = Math.sin(rotY);

    const projected = atoms.map(a => {
      let x1 = a.x * cosY - a.z * sinY;
      let z1 = a.z * cosY + a.x * sinY;
      let y1 = a.y * cosX - z1 * sinX;
      let z2 = z1 * cosX + a.y * sinX;
      const p = 700 / (700 + z2);
      return { x: x1 * p + w / 2, y: y1 * p + h / 2, scale: p, color: a.color, radius: a.radius };
    });

    bonds.forEach(([i, j]) => {
      const p1 = projected[i], p2 = projected[j];
      ctx.strokeStyle = `rgba(16, 185, 129, ${0.2 * p1.scale})`;
      ctx.lineWidth = 1.2 * p1.scale;
      ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
    });

    projected.forEach(p => {
      ctx.fillStyle = `rgba(${p.color}, ${0.8 * p.scale})`;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.radius * p.scale, 0, Math.PI * 2); ctx.fill();
    });

    targetRotY += 0.002;
    requestAnimationFrame(frame);
  }

  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    targetRotY = ((e.clientX - rect.left) / w - 0.5) * 1.5;
    targetRotX = -((e.clientY - rect.top) / h - 0.5) * 1.5;
  });

  window.addEventListener("resize", resize);
  resize(); frame();
}
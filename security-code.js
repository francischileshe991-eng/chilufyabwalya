function drawSecurityCode(canvas, code) {
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  const noise = ctx.createImageData(width, height);
  // Small irregular patches recreate the reference's blue-grey texture.
  for (let y = 0; y < height; y += 2) {
    for (let x = 0; x < width; x += 2) {
      const shade = Math.random() < 0.36 ? 72 + Math.random() * 60 : 170 + Math.random() * 65;
      for (let dy = 0; dy < 2 && y + dy < height; dy++) {
        for (let dx = 0; dx < 2 && x + dx < width; dx++) {
          const i = ((y + dy) * width + x + dx) * 4;
          noise.data[i] = shade * 0.85;
          noise.data[i + 1] = shade * 0.94;
          noise.data[i + 2] = shade;
          noise.data[i + 3] = 255;
        }
      }
    }
  }
  ctx.putImageData(noise, 0, 0);
  ctx.strokeStyle = 'rgba(50, 77, 97, 0.65)';
  ctx.lineWidth = 1;
  for (let i = 0; i < 9; i++) {
    ctx.beginPath();
    const y = Math.random() * height;
    ctx.moveTo(0, y);
    ctx.lineTo(width, y + Math.random() * 10 - 5);
    ctx.stroke();
  }
  ctx.fillStyle = '#102b55';
  ctx.font = 'bold 34px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(code, width / 2, height / 2 + 1, width - 12);
}

const canvas = document.getElementById("holiCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

document.addEventListener("click", (event) => {
    throwColor(event.clientX, event.clientY);
});

function throwColor(x, y) {
    const colors = ["red", "blue", "yellow", "green", "purple", "orange", "pink"];
    for (let i = 0; i < 20; i++) {
        let angle = Math.random() * 2 * Math.PI;
        let speed = Math.random() * 10 + 2;
        let color = colors[Math.floor(Math.random() * colors.length)];
        createParticle(x, y, speed * Math.cos(angle), speed * Math.sin(angle), color);
    }
}

function createParticle(x, y, vx, vy, color) {
    let particle = {
        x: x,
        y: y,
        vx: vx,
        vy: vy,
        alpha: 1,
        color: color
    };

    let interval = setInterval(() => {
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 10, 0, Math.PI * 2);
        ctx.fill();
        
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.alpha -= 0.02;

        if (particle.alpha <= 0) {
            clearInterval(interval);
        }
    }, 16);
}

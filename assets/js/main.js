document.addEventListener("DOMContentLoaded", () => {
    const vapourContainer = document.querySelector(".vapour");
    const vapourCount = 20;

    for (let i = 0; i < vapourCount; i++) {
        const span = document.createElement("span");
        const delay = Math.random(1, 20) * 20;

        span.style.setProperty("--i", delay);

        vapourContainer.appendChild(span);
    }
});

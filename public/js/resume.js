function createBubbles(bubbleQuantity) {
    document.querySelectorAll(".bubbles").forEach((container) => {
        container.style.display = "inline-grid";
        for (let i = 0; i < bubbleQuantity; i++) {
            var rup = Math.random() * 8;

            var bubble = document.createElement("div");
            bubble.className = "bubble";
            bubble.style.top = `${rup}px`;

            var anim_delay = Math.random() * 5;
            var hugger = document.createElement("div");
            hugger.className = "bubblehugger";
            bubble.style.animationDelay = `${anim_delay}s`;
            hugger.style.animationDelay = `${anim_delay}s`;
            hugger.appendChild(bubble);

            container.appendChild(hugger);
        }
    })
}

// window.addEventListener("DOMContentLoaded", () => {
//     createBubbles(20);
// })

document.addEventListener("readystatechange", () => {
    createBubbles(20);
    changePanelBorder();
});

function windowResized() {
    changePanelBorder();
}

function changePanelBorder() {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var main_panel = document.getElementById("main-panel");
    var extra_panel = document.getElementById("extra-panel");

    if (width <= 767) {
        main_panel.style.borderRadius = "50px 50px 0 0";
        extra_panel.style.borderRadius = "0 0 50px 50px";
    } else {
        main_panel.style.borderRadius = "50px 0 0 50px";
        extra_panel.style.borderRadius = "0 50px 50px 0";

    }
}
7
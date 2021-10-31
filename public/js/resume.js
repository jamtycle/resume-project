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

        var percent_container = document.createElement("div");
        percent_container.id = "percent-indicator";
        percent_container.style.display = "flex";
        percent_container.style.position = "absolute";
        percent_container.style.top = -1;
        percent_container.style.left = -2;
        percent_container.style.width = "100%";
        percent_container.style.height = "10px";
        for (let i = 0; i < 10; i++) {
            var percent = document.createElement("div");
            percent.style.border = "0.1px solid black";
            if (i > 0 || i < 10) percent.style.borderWidth = "0.1px 0px 0.1px 0.1px";
            if (i == 0) percent.style.borderRadius = "20px 0px 0px 20px";
            if (i == 10) percent.style.borderRadius = "0px 20px 20px 0px";
            percent.style.width = "10%";
            percent.style.height = "10px";
            percent_container.appendChild(percent);
        }

        var progress_bar = container.parentElement;
        progress_bar.appendChild(percent_container);
    })
}

// window.addEventListener("DOMContentLoaded", () => {
//     createBubbles(20);
// })

document.addEventListener("DOMContentLoaded", () => {
    createBubbles(10);
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
const textEl = document.getElementById("text");
const text = "Coming soon...";
let i = 0;
function type() {
    if (i < text.length) {
        textEl.textContent += text.charAt(i);
        i++;
        setTimeout(type, 120);
    }
}
window.onload = () => {
    // Start typing after logo animation finishes
    setTimeout(type, 1500);
};
export {};
//# sourceMappingURL=main.js.map
const flipButtons = document.querySelectorAll(".flip-button");
const cardInner = document.getElementById("cardInner");

flipButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const isFlipped = cardInner.classList.toggle("is-flipped");

        flipButtons.forEach((btn) => {
            btn.setAttribute("aria-pressed", String(isFlipped));
            btn.setAttribute(
                "aria-label",
                isFlipped ? "Show front of card" : "Show back of card"
            );
        });
    });
});
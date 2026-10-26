
const inputs = document.querySelectorAll(".css-controller input");

inputs.forEach(function (input) {
    input.addEventListener("input", function () {
        const name = this.name;
        const value = this.value;

        // Read the unit from your existing HTML
        const sizing =
            this.getAttribute("data-sizing") ||
            this.getAttribute("data-sizeing") ||
            "";

        // Update the CSS variable
        document.documentElement.style.setProperty(
            "--" + name,
            value + sizing
        );
    });
});

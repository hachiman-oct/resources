document.addEventListener("DOMContentLoaded", function () {
    const toc = document.querySelector("#TOC");
    const btn = document.querySelector("#toc-toggle");

    btn.addEventListener("click", (event) => {
        event.stopPropagation();
        toc.classList.toggle("show");
    });

    toc.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    document.addEventListener("click", () => {
        if (toc.classList.contains("show")) {
            toc.classList.remove("show");
        }
    });
});

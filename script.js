document.getElementById("news-button").addEventListener("click", function() {
    const newsContent = document.getElementById("news-content");
    if (newsContent.classList.contains("hidden")) {
        newsContent.classList.remove("hidden");
    } else {
        newsContent.classList.add("hidden");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Gérer les onglets
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabLinks.forEach(link => {
        link.addEventListener("click", function () {
            tabLinks.forEach(link => link.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            link.classList.add("active");
            document.getElementById(link.dataset.tab).classList.add("active");
        });
    });

    // Charger les vidéos YouTube via un appel d'API fictif (ou scraping si possible)
    const youtubePosts = document.getElementById("youtube-posts");
    setTimeout(() => {
        youtubePosts.innerHTML = `
            <div>
                <h3>Vidéo 1 : Titre de la vidéo</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/xxxxxxxx" frameborder="0" allowfullscreen></iframe>
            </div>
            <div>
                <h3>Vidéo 2 : Titre de la vidéo</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/yyyyyyyy" frameborder="0" allowfullscreen></iframe>
            </div>
        `;
    }, 2000);
});

// Petit jeu : deviner un nombre
function playGame() {
    const userGuess = parseInt(document.getElementById("guess-input").value);
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const resultText = document.getElementById("game-result");

    if (userGuess === randomNumber) {
        resultText.textContent = "Bravo ! Vous avez deviné le bon nombre : " + randomNumber;
    } else {
        resultText.textContent = "Dommage ! Le bon nombre était : " + randomNumber;
    }
}

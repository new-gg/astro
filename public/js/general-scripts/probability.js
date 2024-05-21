document.addEventListener('DOMContentLoaded', () => {
    fetch('/json/games.json')
        .then(response => response.json())
        .then(data => {
            const gameContainer = document.querySelector('.game-container');

            data.forEach(game => {
                const gameItem = document.createElement('div');
                gameItem.classList.add('game-item');

                const img = document.createElement('img');
                img.src = game.img;
                img.alt = game.title;

                const title = document.createElement('h2');
                title.textContent = game.title;

                const description = document.createElement('p');
                description.textContent = game.description;

                // Add onclick event to redirect
                gameItem.onclick = function() {
                    window.location.href = game.url;
                };

                gameItem.appendChild(img);
                gameItem.appendChild(title);
                gameItem.appendChild(description);

                gameContainer.appendChild(gameItem);
            });
        })
        .catch(error => console.error('Error fetching the games data:', error));
});

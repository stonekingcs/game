// CloudGame - Main JavaScript File

// Sample game data (in a real application, this would come from a database or API)
const games = [];

// Function to render game cards
function renderGames(gameList) {
    const gameListElement = document.getElementById('game-list');
    if (!gameListElement) return;
    
    gameListElement.innerHTML = '';
    
    if (gameList.length === 0) {
        gameListElement.innerHTML = '<p class="col-span-full text-center text-gray-500 py-8">No games found in this category.</p>';
        return;
    }
    
    gameList.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition';
        gameCard.innerHTML = `
            <a href="game.html?id=${game.id}" class="block">
                <img src="${game.thumbnail}" alt="${game.name}" class="w-full h-40 object-cover">
                <div class="p-4">
                    <h3 class="text-lg font-semibold text-apple-dark mb-2">${game.name}</h3>
                    <p class="text-gray-600 text-sm">${game.description}</p>
                </div>
            </a>
        `;
        gameListElement.appendChild(gameCard);
    });
}

// Function to filter games by category
function filterGamesByCategory(category) {
    if (category === 'all') {
        return games;
    }
    return games.filter(game => game.category === category);
}

// Function to handle category click
function handleCategoryClick(e) {
    e.preventDefault();
    const categoryLinks = document.querySelectorAll('.category-link');
    categoryLinks.forEach(link => link.classList.remove('bg-apple-blue', 'text-white'));
    e.target.classList.add('bg-apple-blue', 'text-white');
    
    const category = e.target.dataset.category;
    const categoryTitle = document.getElementById('category-title');
    if (categoryTitle) {
        categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1) + ' Games';
    }
    
    const filteredGames = filterGamesByCategory(category);
    renderGames(filteredGames);
}

// Function to handle search
function handleSearch() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        renderGames(games);
        return;
    }
    
    const filteredGames = games.filter(game => 
        game.name.toLowerCase().includes(searchTerm) || 
        game.description.toLowerCase().includes(searchTerm)
    );
    
    const categoryTitle = document.getElementById('category-title');
    if (categoryTitle) {
        categoryTitle.textContent = `Search Results: "${searchTerm}"`;
    }
    
    renderGames(filteredGames);
}

// Function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to render game details
function renderGameDetails(gameId) {
    const gameDetailsElement = document.getElementById('game-details');
    if (!gameDetailsElement) return;
    
    const game = games.find(g => g.id === parseInt(gameId));
    
    if (!game) {
        window.location.href = 'index.html';
        return;
    }
    
    // Update page title
    document.title = `${game.name} - CloudGame`;
    
    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
        canonicalLink.setAttribute('href', `https://cloudgame.online/game.html?id=${gameId}`);
    }
    
    // Render game details
    gameDetailsElement.innerHTML = `
        <h2 class="text-3xl font-bold text-apple-dark">${game.name}</h2>
        <p class="text-lg text-gray-600 mt-2">${game.description}</p>
        <div class="flex flex-wrap gap-2 mt-4">
            <span class="px-3 py-1 bg-apple-blue text-white text-sm rounded-full">${game.category.charAt(0).toUpperCase() + game.category.slice(1)}</span>
        </div>
    `;
    
    // Set iframe source
    const gameIframe = document.getElementById('game-iframe');
    if (gameIframe) {
        gameIframe.src = game.iframeUrl;
    }
    
    // Render game description
    const gameDescriptionElement = document.getElementById('game-description');
    if (gameDescriptionElement) {
        gameDescriptionElement.innerHTML = `
            <h2 class="text-2xl font-semibold text-apple-dark mb-4">How to Play</h2>
            ${game.fullDescription}
        `;
    }
    
    // Render recommended games (excluding current game)
    renderRecommendedGames(game.id, game.category);
}

// Function to render recommended games
function renderRecommendedGames(currentGameId, category) {
    const recommendedGamesElement = document.getElementById('recommended-games');
    if (!recommendedGamesElement) return;
    
    // Get games from the same category, excluding the current game
    let recommendedGames = games.filter(game => game.category === category && game.id !== currentGameId);
    
    // If we don't have enough games from the same category, add some random games
    if (recommendedGames.length < 4) {
        const otherGames = games.filter(game => game.id !== currentGameId && game.category !== category);
        const randomOtherGames = otherGames.sort(() => 0.5 - Math.random()).slice(0, 4 - recommendedGames.length);
        recommendedGames = [...recommendedGames, ...randomOtherGames];
    }
    
    // Limit to 4 games
    recommendedGames = recommendedGames.slice(0, 4);
    
    recommendedGamesElement.innerHTML = '';
    
    recommendedGames.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition';
        gameCard.innerHTML = `
            <a href="game.html?id=${game.id}" class="block">
                <img src="${game.thumbnail}" alt="${game.name}" class="w-full h-40 object-cover">
                <div class="p-4">
                    <h3 class="text-lg font-semibold text-apple-dark mb-2">${game.name}</h3>
                    <p class="text-gray-600 text-sm">${game.description}</p>
                </div>
            </a>
        `;
        recommendedGamesElement.appendChild(gameCard);
    });
}

// Initialize the page based on its type
document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on the game details page
    const gameDetailsElement = document.getElementById('game-details');
    if (gameDetailsElement) {
        const gameId = getUrlParameter('id');
        if (gameId) {
            renderGameDetails(gameId);
        } else {
            window.location.href = 'index.html';
        }
    }
    
    // Check if we're on the home page
    const gameListElement = document.getElementById('game-list');
    if (gameListElement) {
        // Render all games initially
        renderGames(games);
        
        // Add event listeners to category links
        const categoryLinks = document.querySelectorAll('.category-link');
        categoryLinks.forEach(link => {
            link.addEventListener('click', handleCategoryClick);
        });
        
        // Check if there's a search parameter in the URL
        const searchTerm = getUrlParameter('search');
        if (searchTerm) {
            const searchInput = document.getElementById('search-input');
            if (searchInput) {
                searchInput.value = searchTerm;
                handleSearch();
            }
        }
    }
    
    // Add event listener to search button
    const searchButton = document.getElementById('search-button');
    if (searchButton) {
        searchButton.addEventListener('click', handleSearch);
    }
    
    // Add event listener for Enter key in search input
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }
});

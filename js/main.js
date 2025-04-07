// CloudGame - Main JavaScript File

// Sample game data (in a real application, this would come from a database or API)
const games = [
    {
        id: 1,
        name: "Monster Survivors",
        category: "action",
        thumbnail: "https://via.placeholder.com/300x200?text=Monster+Survivors",
        description: "Battle waves of monsters in this thrilling survival game.",
        fullDescription: "<p>Monster Survivors is an intense action-packed survival game where you must battle against endless waves of monsters. Upgrade your character, unlock new abilities, and see how long you can survive in this challenging world.</p><p>The game features:</p><ul class='list-disc pl-5 space-y-2 mt-4'><li>Multiple character classes with unique abilities</li><li>Procedurally generated levels for endless replayability</li><li>Dozens of upgrades and power-ups to discover</li><li>Epic boss battles that will test your skills</li><li>Beautiful pixel art graphics and immersive sound design</li></ul>",
        iframeUrl: "https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html"
    },
    {
        id: 2,
        name: "Space Explorer",
        category: "adventure",
        thumbnail: "https://via.placeholder.com/300x200?text=Space+Explorer",
        description: "Explore the vast universe in this epic space adventure.",
        fullDescription: "<p>Space Explorer takes you on an epic journey through the cosmos. Discover new planets, encounter alien species, and unravel the mysteries of the universe in this immersive adventure game.</p><p>Key features include:</p><ul class='list-disc pl-5 space-y-2 mt-4'><li>Open-world exploration across multiple star systems</li><li>Engaging storyline with meaningful choices</li><li>Spacecraft customization and upgrades</li><li>Trading, mining, and resource management</li><li>Stunning visuals of cosmic phenomena</li></ul>",
        iframeUrl: "https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html"
    },
    {
        id: 3,
        name: "Pixel Dungeon",
        category: "pixel",
        thumbnail: "https://via.placeholder.com/300x200?text=Pixel+Dungeon",
        description: "Navigate through dangerous dungeons in this pixel art roguelike.",
        fullDescription: "<p>Pixel Dungeon is a challenging roguelike game with retro pixel art graphics. Descend into the depths of treacherous dungeons, battle fearsome monsters, and collect powerful items to aid your quest.</p><p>Game features:</p><ul class='list-disc pl-5 space-y-2 mt-4'><li>Permadeath mechanics for high-stakes gameplay</li><li>Randomly generated levels for unique experiences</li><li>Hundreds of items, weapons, and armor to discover</li><li>Multiple character classes with different playstyles</li><li>Challenging boss encounters that require strategy</li></ul>",
        iframeUrl: "https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html"
    },
    {
        id: 4,
        name: "Racing Rivals",
        category: "racing",
        thumbnail: "https://via.placeholder.com/300x200?text=Racing+Rivals",
        description: "Compete against rivals in high-speed racing action.",
        fullDescription: "<p>Racing Rivals puts you behind the wheel in intense high-speed competitions. Race against skilled opponents, upgrade your vehicles, and become the ultimate racing champion.</p><p>Experience the thrill of:</p><ul class='list-disc pl-5 space-y-2 mt-4'><li>Multiple race tracks across diverse environments</li><li>Realistic physics and driving mechanics</li><li>Extensive vehicle customization options</li><li>Career mode with progression and challenges</li><li>Multiplayer competitions against other players</li></ul>",
        iframeUrl: "https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html"
    },
    {
        id: 5,
        name: "Puzzle Master",
        category: "puzzle",
        thumbnail: "https://via.placeholder.com/300x200?text=Puzzle+Master",
        description: "Test your brain with challenging puzzles and riddles.",
        fullDescription: "<p>Puzzle Master offers a collection of brain-teasing challenges designed to test your problem-solving skills. From logic puzzles to spatial reasoning, this game will keep your mind sharp and engaged.</p><p>Features include:</p><ul class='list-disc pl-5 space-y-2 mt-4'><li>Hundreds of unique puzzles with increasing difficulty</li><li>Multiple puzzle types including logic, pattern recognition, and more</li><li>Hint system for when you get stuck</li><li>Daily challenges with special rewards</li><li>Track your progress and compare with friends</li></ul>",
        iframeUrl: "https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html"
    },
    {
        id: 6,
        name: "Sniper Elite",
        category: "sniper",
        thumbnail: "https://via.placeholder.com/300x200?text=Sniper+Elite",
        description: "Take out targets with precision in this sniper simulation.",
        fullDescription: "<p>Sniper Elite puts your marksmanship to the test in realistic sniping scenarios. Calculate distance, wind, and bullet drop as you eliminate targets with surgical precision.</p><p>The game includes:</p><ul class='list-disc pl-5 space-y-2 mt-4'><li>Realistic ballistics and environmental factors</li><li>Various mission types and objectives</li><li>Stealth mechanics and enemy AI</li><li>Detailed weapon customization</li><li>Slow-motion kill cam for perfect shots</li></ul>",
        iframeUrl: "https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html"
    },
    {
        id: 7,
        name: "Farm Simulator",
        category: "simulator",
        thumbnail: "https://via.placeholder.com/300x200?text=Farm+Simulator",
        description: "Build and manage your own virtual farm in this relaxing simulator.",
        fullDescription: "<p>Farm Simulator offers a peaceful escape to rural life where you can build and manage your own farm. Plant crops, raise animals, and expand your agricultural empire at your own pace.</p><p>Enjoy features such as:</p><ul class='list-disc pl-5 space-y-2 mt-4'><li>Realistic farming cycles and seasons</li><li>Variety of crops and livestock to manage</li><li>Farm equipment and machinery to purchase and operate</li><li>Market economy for buying and selling goods</li><li>Farm customization and expansion options</li></ul>",
        iframeUrl: "https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html"
    },
    {
        id: 8,
        name: "Soccer Stars",
        category: "sports",
        thumbnail: "https://via.placeholder.com/300x200?text=Soccer+Stars",
        description: "Lead your team to victory in this exciting soccer game.",
        fullDescription: "<p>Soccer Stars lets you manage your own soccer team and lead them to championship glory. Make strategic decisions, train your players, and dominate the league.</p><p>Game highlights include:</p><ul class='list-disc pl-5 space-y-2 mt-4'><li>Team management and player development</li><li>Realistic match simulations</li><li>Transfer market for buying and selling players</li><li>Multiple leagues and tournaments</li><li>Stadium upgrades and club management</li></ul>",
        iframeUrl: "https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html"
    },
    {
        id: 9,
        name: "Kingdom Conquest",
        category: "strategy",
        thumbnail: "https://via.placeholder.com/300x200?text=Kingdom+Conquest",
        description: "Build your empire and conquer kingdoms in this strategic adventure.",
        fullDescription: "<p>Kingdom Conquest is an epic strategy game where you build your empire from the ground up. Manage resources, train armies, forge alliances, and conquer rival kingdoms to expand your territory.</p><p>Strategic elements include:</p><ul class='list-disc pl-5 space-y-2 mt-4'><li>City building and resource management</li><li>Military unit training and combat tactics</li><li>Diplomatic relations with other kingdoms</li><li>Research and technology advancement</li><li>Hero characters with special abilities</li></ul>",
        iframeUrl: "https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html"
    }
];

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

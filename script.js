// Dados dos fragmentos disponíveis
const fragmentTypes = {
    fate: { name: "Fate Fragment", image: "Imagens/fate orb fragment.gif" },
    enchant: { name: "Enchant Fragment", image: "Imagens/enchant orb fragment.gif" },
    shuffle: { name: "Shuffle Fragment", image: "Imagens/shuffle orb fragment.gif" },
    cleaner: { name: "Cleaner Fragment", image: "Imagens/cleaner orb fragment.gif" },
    upgrade: { name: "Upgrade Fragment", image: "Imagens/upgrade orb fragment.gif" },
    ancient: { name: "Ancient Fragment", image: "Imagens/ancient orb fragment.gif" }
};

// Array com todos os itens
const items = [
    // Uncommon Items
    { name: "🪓 Uncommom Hatchet", power: 32, rarity: "Uncommon", fate: [7, 10], enchant: [3, 4], shuffle: [0, 0], cleaner: [1, 2], upgrade: [1, 2], ancient: [1, 1] },
    { name: "🛡️ Uncommom Copper Shield", power: 32, rarity: "Uncommon", fate: [7, 10], enchant: [3, 4], shuffle: [0, 0], cleaner: [1, 2], upgrade: [1, 2], ancient: [1, 1] },
    { name: "🥾 Uncommom Leather Boots", power: 42, rarity: "Uncommon", fate: [9, 14], enchant: [4, 7], shuffle: [0, 0], cleaner: [2, 3], upgrade: [3, 3], ancient: [1, 1] },
    { name: "🛡️ Uncommom Copper Shield", power: 42, rarity: "Uncommon", fate: [7, 10], enchant: [3, 4], shuffle: [0, 0], cleaner: [1, 2], upgrade: [1, 3], ancient: [1, 1] },
    { name: "🛡️ Uncommom Battle Shield", power: 42, rarity: "Uncommon", fate: [8, 12], enchant: [3, 5], shuffle: [0, 0], cleaner: [2, 3], upgrade: [2, 2], ancient: [1, 1] },
    { name: "🛡️ Uncommom Battle Shield", power: 51, rarity: "Uncommon", fate: [9, null], enchant: [4, null], shuffle: [0, 0], cleaner: [3, null], upgrade: [4, null], ancient: [1, 1] },
    { name: "🛡️ Uncommom Battle Shield", power: 55, rarity: "Uncommon", fate: [14, null], enchant: [5, null], shuffle: [0, 0], cleaner: [3, null], upgrade: [4, null], ancient: [2, 2] },
    { name: "🗡️ Uncommom Crimson Sword +1", power: 50, rarity: "Uncommon", fate: [12, null], enchant: [5, null], shuffle: [0, 0], cleaner: [2, null], upgrade: [2, null], ancient: [2, null] },
    { name: "🏹 Uncommom Bow +2", power: 60, rarity: "Uncommon", fate: [15, null], enchant: [6, null], shuffle: [0, 0], cleaner: [3, null], upgrade: [4, null], ancient: [2, null] },
    { name: "🪓 Uncommom Orcish axe +2", power: 60, rarity: "Uncommon", fate: [12, null], enchant: [7, null], shuffle: [0, 0], cleaner: [3, null], upgrade: [4, null], ancient: [2, 2] },
    { name: "👖 Uncommon Plate Legs +3", power: 70, rarity: "Uncommon", fate: [16, null], enchant: [6, null], shuffle: [0, 0], cleaner: [5, null], upgrade: [5, null], ancient: [2, null] },
    { name: "🔨 Uncommom Battle Hammer +2", power: 60, rarity: "Uncommon", fate: [12, null], enchant: [6, 7], shuffle: [0, 0], cleaner: [4, null], upgrade: [3, 4], ancient: [1, 2] },
    { name: "🔨 Uncommom Battle Hammer +3", power: 70, rarity: "Uncommon", fate: [13, 17], enchant: [8, null], shuffle: [0, 0], cleaner: [4, null], upgrade: [4, 5], ancient: [2, 2] },
    { name: "🪓 Uncommon Double Axe", power: 66, rarity: "Uncommon", fate: [14, null], enchant: [5, null], shuffle: [0, 0], cleaner: [5, null], upgrade: [4, null], ancient: [2, null] },
    { name: "🗡️ Uncommom Fire Sword", power: 70, rarity: "Uncommon", fate: [11, null], enchant: [7, null], shuffle: [0, 0], cleaner: [5, null], upgrade: [4, null], ancient: [2, null] },
    { name: "🪓 Uncommon Knight Axe", power: 70, rarity: "Uncommon", fate: [13, null], enchant: [7, null], shuffle: [0, 0], cleaner: [4, null], upgrade: [4, null], ancient: [2, null] },
    { name: "🔨 Uncommon Brutetamer's Staff +2", power: 90, rarity: "Uncommon", fate: [20, null], enchant: [7, null], shuffle: [0, 0], cleaner: [6, null], upgrade: [7, null], ancient: [2, null] },

    // Rare Items
    { name: "🪓 Rare Hatchet", power: 32, rarity: "Rare", fate: [7, 13], enchant: [3, 4], shuffle: [0, 0], cleaner: [1, 2], upgrade: [1, 2], ancient: [1, 1] },
    { name: "🧥 Rare Chain Armor", power: 34, rarity: "Rare", fate: [11, null], enchant: [4, null], shuffle: [0, 0], cleaner: [2, null], upgrade: [3, null], ancient: [1, 1] },
    { name: "🛡️ Rare Dwarven Shield +1", power: 50, rarity: "Rare", fate: [19, null], enchant: [6, null], shuffle: [0, 0], cleaner: [3, null], upgrade: [5, null], ancient: [2, null] },
    { name: "👑 Rare Steel Helmet +2", power: 60, rarity: "Rare", fate: [21, null], enchant: [8, null], shuffle: [0, 0], cleaner: [5, null], upgrade: [5, null], ancient: [3, null] },
    { name: "🧥 Rare Scale Armor +3", power: 70, rarity: "Rare", fate: [20, null], enchant: [9, null], shuffle: [0, 0], cleaner: [5, null], upgrade: [6, null], ancient: [2, null] },
    { name: "👖 Rare Brass Legs +4", power: 80, rarity: "Rare", fate: [27, null], enchant: [9, null], shuffle: [0, 0], cleaner: [6, null], upgrade: [6, null], ancient: [4, null] },
    { name: "🔨 Rare Battle Hammer +4", power: 80, rarity: "Rare", fate: [20, null], enchant: [11, null], shuffle: [0, 0], cleaner: [7, null], upgrade: [7, null], ancient: [3, null] },
    { name: "🗡️ Rare Crimson Sword +4", power: 80, rarity: "Rare", fate: [24, null], enchant: [11, null], shuffle: [0, 0], cleaner: [6, null], upgrade: [6, null], ancient: [3, null] },

    // Epic Items
    { name: "🧥 Epic Studded Armor", power: 32, rarity: "Epic", fate: [20, null], enchant: [5, null], shuffle: [0, 0], cleaner: [2, null], upgrade: [2, null], ancient: [1, null] },
    { name: "🧥 Epic Scale Armor", power: 42, rarity: "Epic", fate: [21, null], enchant: [6, null], shuffle: [0, 0], cleaner: [5, null], upgrade: [5, null], ancient: [1, 1] },
    { name: "🛡️ Epic Steel Shield", power: 44, rarity: "Epic", fate: [16, null], enchant: [6, null], shuffle: [0, 0], cleaner: [4, null], upgrade: [4, null], ancient: [1, null] },

    // Legendary Items
    { name: "👑 Legendary Leather Helmet", power: 37, rarity: "Legendary", fate: [30, null], enchant: [10, null], shuffle: [0, 0], cleaner: [6, null], upgrade: [4, null], ancient: [2, null] },
    { name: "🗡️ Legendary Sword", power: 42, rarity: "Legendary", fate: [29, null], enchant: [12, null], shuffle: [0, 0], cleaner: [6, null], upgrade: [7, null], ancient: [2, 2] }
];

// Função para formatar a quantidade de fragmentos
function formatQuantity(min, max) {
    if (min === 0 && max === 0) return '0x';
    if (max === null) return `${min}x - ?x`;
    if (min === max) return `${min}x`;
    return `${min}x - ${max}x`;
}

// Função para criar o HTML de um fragmento
function createFragmentHTML(type, quantity) {
    const fragment = fragmentTypes[type];
    return `
        <div class="fragment-item">
            <div class="fragment-image">
                <img src="${fragment.image}" alt="${fragment.name}">
            </div>
            <div class="fragment-name">${fragment.name}</div>
            <div class="fragment-quantity">${quantity}</div>
        </div>
    `;
}

// Função para criar o HTML de um card de item
function createItemCard(item) {
    const fragmentsHTML = Object.keys(fragmentTypes).map(type => {
        const quantity = formatQuantity(item[type][0], item[type][1]);
        return createFragmentHTML(type, quantity);
    }).join('');

    return `
        <div class="item-card">
            <div class="item-header">
                <div class="item-name">${item.name} : ${item.power} Power</div>
            </div>
            <div class="fragments-section">
                <div class="fragments-title"> Fragmentos Obtidos</div>
                <div class="fragments-grid">
                    ${fragmentsHTML}
                </div>
            </div>
        </div>
    `;
}

// Função para renderizar todo o catálogo
function renderCatalog() {
    const catalogGrid = document.getElementById('catalog-grid');
    if (catalogGrid) {
        catalogGrid.innerHTML = items.map(createItemCard).join('');
    }
}

// Função para atualizar estatísticas
function updateStats() {
    const totalItems = items.length;
    const totalFragmentTypes = Object.keys(fragmentTypes).length;
    
    const totalItemsElement = document.getElementById('total-items');
    const totalFragmentsElement = document.getElementById('total-fragments');
    const avgFragmentsElement = document.getElementById('avg-fragments');
    const itemCountElement = document.getElementById('item-count');
    
    if (totalItemsElement) totalItemsElement.textContent = totalItems;
    if (totalFragmentsElement) totalFragmentsElement.textContent = totalFragmentTypes;
    if (avgFragmentsElement) avgFragmentsElement.textContent = totalFragmentTypes.toFixed(1);
    if (itemCountElement) itemCountElement.textContent = totalItems;
}

// Inicializar a aplicação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    renderCatalog();
    updateStats();
});
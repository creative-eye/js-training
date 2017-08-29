const games = [
    {name: 'alibaba', type: 'pacanele', jackpot: false},
    {name: 'alibaba2', type: 'live', jackpot: false},
    {name: 'gonzo cautare', type: 'poker', jackpot: false},
    {name: 'alibaba', type: 'live', jackpot: true},
    {name: 'dracula', type: 'pacanale', jackpot: false},
    {
        name: 'dracula', type: 'pacanale', jackpot: true,
        children: [{name: 'cosmic fortune', type: 'pacanele', jackpot: true}, {
            name: 'gonzo cautare',
            type: 'poker',
            jackpot: false
        }]
    }
];
const target = document.getElementById('target');
const search = document.getElementById('search');


games.forEach(game => {
    target.insertAdjacentHTML('beforeend', `<li data-type="${game.type}" data-jackpot="${game.jackpot}">${game.name}</li>`);
});

search.addEventListener('keyup', function () {
    let searchInput = this.value;
    console.log(searchInput);
});

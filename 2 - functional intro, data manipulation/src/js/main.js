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
const searchname = document.getElementById('searchname');
const searchtype = document.getElementById('searchtype');

const flattengames = games.reduce(
    (acumulator, item) => {
        if (!item.children) {
            return acumulator.concat(item);
        } else {
            return acumulator.concat(item, item.children);
        }
    },
    []
);

flattengames.forEach(game => {
    target.insertAdjacentHTML('beforeend', `<li data-type="${game.type}" data-jackpot="${game.jackpot}">${game.name}</li>`);
});

console.log(flattengames);

searchname.addEventListener('keyup', function () {
    let searchInput = this.value;
    let filteredbyname = flattengames.filter(game => {
        if (game.name === searchInput) {
            return game;
        }}
    );
    console.log(filteredbyname);

});
searchtype.addEventListener('keyup', function () {
    let searchInput = this.value;
    console.log(searchInput);
});


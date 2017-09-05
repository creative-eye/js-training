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
const jackpot = document.getElementById('jackpot');
const flattenGames = games.reduce(
	(acumulator, item) => {
		if (!item.children) {
			return acumulator.concat(item);
		} else {
			return acumulator.concat(item, item.children);
		}
	},
	[]
);

let searchName = '';
let searchType = '';
let filteredGames = flattenGames.slice(0);
let jackpotCheck = false;

filteredGames.forEach(game => {
	target.insertAdjacentHTML('beforeend', `<li data-type="${game.type}" data-jackpot="${game.jackpot}">${game.name}</li>`);
});


searchname.addEventListener('keyup', function () {
	searchName = this.value;
	filteredGames = flattenGames.slice(0);

	filteredGames = FilterJackPot(filteredGames, jackpotCheck);
	filteredGames = FilterGames(filteredGames, 'type', searchType);
	filteredGames = FilterGames(filteredGames, 'name', searchName);

	while (target.hasChildNodes()) {
		target.removeChild(target.firstChild);
	}
	filteredGames.forEach(game => {
		target.insertAdjacentHTML('beforeend', `<li data-type="${game.type}" data-jackpot="${game.jackpot}">${game.name}</li>`);
	});
	console.log(filteredGames);

});
searchtype.addEventListener('keyup', function () {
	searchType = this.value;
	filteredGames = flattenGames.slice(0);

	filteredGames = FilterJackPot(filteredGames, jackpotCheck);
	filteredGames = FilterGames(filteredGames, 'name', searchName);
	filteredGames = FilterGames(filteredGames, 'type', searchType);

	while (target.hasChildNodes()) {
		target.removeChild(target.firstChild);
	}
	filteredGames.forEach(game => {
		target.insertAdjacentHTML('beforeend', `<li data-type="${game.type}" data-jackpot="${game.jackpot}">${game.name}</li>`);
	});
	console.log(filteredGames);

});

jackpot.addEventListener('click', function () {
	jackpotCheck = !jackpotCheck;
	filteredGames = flattenGames.slice(0);

	filteredGames = FilterGames(filteredGames, 'name', searchName);
	filteredGames = FilterGames(filteredGames, 'type', searchType);
	filteredGames = FilterJackPot(filteredGames, jackpotCheck);
	while (target.hasChildNodes()) {
		target.removeChild(target.firstChild);
	}
	filteredGames.forEach(game => {
		target.insertAdjacentHTML('beforeend', `<li data-type="${game.type}" data-jackpot="${game.jackpot}">${game.name}</li>`);
	});
});

function FilterGames(arr, apliedfilter, input) {
	let output = [];
	arr.filter(game => {
		if (game[apliedfilter].toLowerCase().indexOf(input.toLowerCase()) !== -1) {
			output.push(game);
		}
	});
	return output;
}

function FilterJackPot(arr, input) {
	let output = [];
	if (input) {
		arr.filter(game => {
			if (game.jackpot) {
				output.push(game);
			}
		})
	} else {
		return arr;
	}
	return output;
}
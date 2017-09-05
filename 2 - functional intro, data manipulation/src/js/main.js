//I haven't used jQuerry because I want to learn to be independent of jQuerry
//I have used ES6 because I want to learn to use ES6

//I had a functional programming approach because it's easier to code


/*Variabels*/
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

/*Initial Game Loade game*/
filteredGames.forEach(game => {
	target.insertAdjacentHTML('beforeend', `<li data-type="${game.type}" data-jackpot="${game.jackpot}">${game.name}</li>`);
});

/*Event listeners*/
searchname.addEventListener('keyup', function () {
	searchName = this.value;
	Search();
});
searchtype.addEventListener('keyup', function () {
	searchType = this.value;
	Search();
});

jackpot.addEventListener('click', function () {
	jackpotCheck = !jackpotCheck;
	Search();
});

/*Custom made functions to help me*/
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

function Search() {

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
}

/*-----------------------------------*/
const secondTarget = document.getElementById('secondTarget');
let user;

peopleArray = [
	{id: 123, name: 'dave', age: 23},
	{id: 456, name: 'chris', age: 23},
	{id: 789, name: 'bob', age: 23},
	{id: 101, name: 'tom', age: 23},
	{id: 102, name: 'tim', age: 23}
];

peopleArray.forEach(user => {
	secondTarget.insertAdjacentHTML('beforeend', `<li class="itemUser" data-age="${user.age}" data-id="${user.id}">${user.name}</li>`);
});


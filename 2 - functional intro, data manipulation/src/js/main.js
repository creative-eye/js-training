//I haven't used jQuerry because I want to learn to be independent of jQuerry
//I have used ES6 because I want to learn to use ES6

//I had a functional programming approach because it's easier to code

/*-----------------------------------*/
/*ex 1*/
/*-----------------------------------*/

/*Variables*/
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
elementInsertToDom();


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

/*Custom made functions*/
function FilterGames(arr, apliedfilter, input) {
    return arr.filter(game => game[apliedfilter].toLowerCase().indexOf(input.toLowerCase()) > -1);
}

function FilterJackPot(arr, input) {
    if (input === true) {
        return arr.filter(game => game.jackpot)
    }
    return arr;
}

function Search() {
    filteredGames = flattenGames.slice(0);

    filteredGames = FilterJackPot(filteredGames, jackpotCheck);
    filteredGames = FilterGames(filteredGames, 'name', searchName);
    filteredGames = FilterGames(filteredGames, 'type', searchType);

    while (target.hasChildNodes()) {
        target.removeChild(target.firstChild);
    }
    elementInsertToDom()
}

function elementInsertToDom() {
    let temp;
    for (i = 0; i < filteredGames.length; i++) {
        if (temp) {
            temp = temp + `<li data-type="${filteredGames[i].type}" data-jackpot="${filteredGames[i].jackpot}">${filteredGames[i].name}</li>`;
        } else {
            temp = `<li data-type="${filteredGames[i].type}" data-jackpot="${filteredGames[i].jackpot}">${filteredGames[i].name}</li>`;
        }
    }
    if (temp) {
        target.insertAdjacentHTML('beforeend', temp);
    }
}

/*-----------------------------------*/
/*ex 2*/
/*-----------------------------------*/

/*Variables*/
const peopleArray = [
    {id: 123, name: 'dave', age: 23},
    {id: 456, name: 'chris', age: 23},
    {id: 789, name: 'bob', age: 23},
    {id: 101, name: 'tom', age: 23},
    {id: 102, name: 'tim', age: 23}
];
const secondTarget = document.getElementById('secondTarget');
const thirdTarget = document.getElementById('thirdTarget');

(function(){
    let temp;
    for (i = 0; i < peopleArray.length; i++) {
        if (temp) {
            temp = temp + `<option value="${peopleArray[i].id}">${peopleArray[i].name + ' ' + peopleArray[i].age}</option>`;
        } else {
            temp = `<option value="${peopleArray[i].id}">${peopleArray[i].name + ' ' + peopleArray[i].age}</option>`;
        }
    }
    if (temp) {
        secondTarget.insertAdjacentHTML('beforeend', temp);
    }
})();

secondTarget.addEventListener('change', function () {
    thirdTarget.textContent = this.value;
});

// First exercise:
const games = [
    {name: 'alibaba', type: 'pacanele', jackpot: false},
    {name: 'alibaba2', type: 'live', jackpot: false},
    {name: 'gonzo cautare', type: 'poker', jackpot: false},
    {name: 'alibaba', type: 'live', jackpot: true},
    {name: 'dracula', type: 'pacanele', jackpot: false},
    {name: 'dracula', type: 'pacanele', jackpot: true,
        children: [
            {name: 'cosmic fortune', type: 'pacanele', jackpot: true},
            {name: 'gonzo cautare', type: 'poker', jackpot: false},
        ]
    }
];

let flatten = function flatten(array) {

    let newArray = array.reduce((prev, next) => {
        if (next.children) {
            const children = next.children.reduce((prev, next) => {
                return prev.concat(next)
            }, []);
            delete next.children;
            return prev.concat(next, children)
        }
        return prev.concat(next);
    }, []);

    let searchByName = document.getElementById('name');
    let searchByType = document.getElementById('type');
    let jackpotCheckbox = document.getElementById('jackpot');
    let displayType = document.getElementById('typeText');
    let displayGame = document.getElementById('nameText');
    let types = [];
    let games = [];

    searchByName.addEventListener('blur', (e) => {

        newArray.filter((object) => {

            if (e.target.value === object.name) {
                const gameName = object.name.toUpperCase();
                displayGame.innerHTML = 'You are a lucky person.  The game you looking for, ' + gameName + ' exists.';
                games.push(object);
            }
            return games;

        }).filter((game) => {

            searchByType.addEventListener('blur', (e) => {

                if (game.type === e.target.value) {
                    const typeName = game.type.toUpperCase();
                    displayType.innerHTML = 'You are a lucky person. The type ' + typeName + ' exists.';
                    types.push(game);

                    types.find((details) => {
                        if (details.jackpot) {
                            jackpotCheckbox.setAttribute('checked', 'checked');
                        }
                    });
                }
            });
        });
    });
};

console.log(flatten(games));


// Second exercise:
const peopleArray = [
    {id: 123, name: 'dave', age: 23},
    {id: 456, name: 'chris', age: 23},
    {id: 789, name: 'bob', age: 23},
    {id: 101, name: 'tom', age: 23},
    {id: 102, name: 'tim', age: 23}
];

let flat = function flat(array) {
    let newObject = array.reduce((prev, next) => {
        let id = next.id;
        delete next.id;
        prev[id] = next;
        return prev;
    }, {});

    let selectDropDown = document.getElementById('dropDown');
    let idDetails = document.getElementById('idDetails');
    let newKey = [];

    Object.keys(newObject).forEach((key) => {

        let optionDropDown = document.createElement('option');

        optionDropDown.innerHTML = key;

        selectDropDown.appendChild(optionDropDown);

        return newKey.push(key);


    });
    newKey.find((details) => {

        selectDropDown.addEventListener('change', (e) => {
            if (e.target.value === details) {
                const name = `${newObject[details].name.charAt(0).toUpperCase()}${newObject[details].name.slice(1)}`;
                idDetails.innerHTML = 'Let me introduce you to ' + name + '.  He is ' + newObject[details].age + ' years old.';
            }
        });
    })
};
console.log(flat(peopleArray));

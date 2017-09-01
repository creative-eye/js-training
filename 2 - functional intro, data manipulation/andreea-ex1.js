/* Data */
const games = [
    { name: 'alibaba', type: 'pacanele', jackpot: false },
    { name: 'alibaba2', type: 'live', jackpot: false },
    { name: 'gonzo cautare', type: 'poker', jackpot: false },
    { name: 'alibaba', type: 'live', jackpot: true },
    { name: 'dracula', type: 'pacanale', jackpot: false },
    { name: 'dracula', type: 'pacanale', jackpot: true,
        children: [
            { name: 'cosmic fortune', type: 'pacanele', jackpot: true},
            { name: 'gonzo cautare', type: 'poker', jackpot: false }
        ]
    }
];

/*EX01-flatten data*/
function flatenedGames(data, nameProp){
    var gamesFlatenedNames = data.reduce(
        function (gamesName, current) {
            var allName = gamesName.concat(current[nameProp]);
            if (current.children) {
                var children = current.children;
                var childrenFlaten = children.reduce(
                    function (gamesChialdName, currentChiald) {
                        var newChildren = gamesChialdName.concat(currentChiald[nameProp]);
                        return newChildren;
                    }, []);
                var allGameName = allName.concat(childrenFlaten);
                return allGameName;
            }
            return allName;
        }
        , []);
    return gamesFlatenedNames;
}

//*Returne all positive jackpot names
function boolProp(data, bool ) {
    var stockAllTrueJAckpot = [];
    for (var prop in data) {
        if (data[prop]['jackpot'] == bool ){
            var gamesProp = data[prop];
            stockAllTrueJAckpot.push(gamesProp['name']);
            if (data[prop].children) {
                var childrenGames = data[prop].children;
                for (var propChildren in childrenGames) {
                    if (childrenGames[propChildren]['jackpot']) {
                        stockAllTrueJAckpot.push(childrenGames[propChildren]['name']);
                    }
                }
            }
        }
    }
    return stockAllTrueJAckpot;
};

/*EX02-Search by type*/
var gamesFlatenedNames =  flatenedGames(games,'name');
var gamesFlatenedType =  flatenedGames(games,'type');

function search(dataToSearch,data){
    if(typeof(dataToSearch) === "boolean"){
        dataToSearch.toString();
    }else{
        dataToSearch
            .trim()
            .toLowerCase();
    }
    var stock = [];
    for( var item = 0; item < data.length-1; item++){
        if(typeof(data[item]) === "boolean"){
            data[item].toString();
        }else{
            data[item]
                .trim()
                .toLowerCase();
        }
        if(data[item] == dataToSearch){
            stock.push(dataToSearch);
        }
    }
    $('#message').empty();
    return stock;
}

/*Actions and tamplate*/
$('#ButtonName').on('click',function(){
    var getNameData = $('#searhByName').val();
    var flatenedName =  search(getNameData,gamesFlatenedNames);

    if(flatenedName[0] == getNameData ){
        $('#messageName').append("<p class='succes'>Selected answer: " + flatenedName[0].toUpperCase() + "</p>");
    }else{
        $('#messageName').append("<p class='error'>Name not found. Please try again!</p>");
    }
});
$('#ButtonType').on('click',function(){
    var getTypeData = $('#searhByType').val();
    var flatenedType =  search(getTypeData,gamesFlatenedType);

    if(flatenedType[0] == getTypeData ){
        $('#messageType').append("<p class='succes'>Type of the game is " + flatenedType[0].toUpperCase() + "</p>");
    }else{
        $('#messageType').append("<p class='error'>Type not found. Please try again!</p>");
    }
});

//Jackpot filter
    var takeTruJackpots = boolProp(games, true);
    var takeFalseJackpots = boolProp(games, false);

    $('#searchJackpot').change(function(){
        if(this.checked == true ){
            var index;
            $('#ListJackpots').empty();
            for(index = 0; index < takeTruJackpots.length; index++ ){
                $('#ListJackpots').append("<li>" + takeTruJackpots[index] + "</li>")
            }
        }else{
            $('#ListJackpots').empty();
            for(index = 0; index < takeFalseJackpots.length; index++ ){
                $('#ListJackpots').append("<li>" + takeFalseJackpots[index] + "</li>")
            }
        }
    });

/*ex2 - Implement a select tag*/
const peopleArray = [
    { id: 123, name: 'dave', age: 23 },
    { id: 456, name: 'chris', age: 23 },
    { id: 789, name: 'bob', age: 23 },
    { id: 101, name: 'tom', age: 23 },
    { id: 102, name: 'tim', age: 23 }
];

peopleArray.map(
        function(item) {
            return $('#selectPeople').append("<option value=" + item.id + ">" + item.id +  "</option>");
        }
);

$('#selectPeople').change(function(e){
    var getValue = $('#selectPeople').val();
    $('#listPeople').empty();
    if($('#selectPeople').val() != '' ){
         peopleArray.map(
            function(item) {
                if(getValue == item.id){
                    return $('#listPeople').append("<li id= item_ " + item.id + ">" + item.name.toUpperCase() + " " + item.age + " ani</li>");
                }
            }
        );
    }
});

/*Ex2 - Convert the array to an object*/
peopleArray.reduce(
    function (newPeopleObj, current, item ) {
        newPeopleObj[item] = current;
        return newPeopleObj;
    },{}
);

/*and load data from the object with id's as keys*/
/*var keys = Object.keys(peopleObject);*/


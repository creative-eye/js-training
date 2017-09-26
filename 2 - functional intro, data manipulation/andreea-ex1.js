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

//EX1
function filterByType(data,typeToSearch,childrenKey){
    let all = [];
    for(let index = 0; index < data.length; index++){
        let children = data[index][childrenKey];
        all.push(data[index][typeToSearch]);
        if( children ){
            for ( let k in children ) {
                all.push(children[k][typeToSearch]);
            }
        }
    }
    return all;
}
var searchByName = filterByType(games, 'name', 'children' );
var searchByType = filterByType(games, 'type', 'children');
var searchByJackpot = filterByType(games, 'jackpot', 'children' );

function filterByBool(whatToSerach,bollToSearch, bool){
    var allBool = [];
    for (let index = 0; index < whatToSerach.length; index++){
        if(bollToSearch[index] === bool ){
            allBool.push(whatToSerach[index]);
        }
    }
    return allBool;
}

//Search after string in array
function filterItems(arrayToSearch, query){
   return arrayToSearch.filter(function(el){
       return el.toLowerCase().indexOf(query.toLocaleLowerCase()) > -1;
   })
}

/*Actions and tamplate*/
$('#ButtonName').on('click',function(){
    var getNameData = $('#searhByName').val();
    var serachName =  filterItems(searchByName,getNameData);
    $('#messageName').empty();
    if( serachName[0] === getNameData ){
        $('#messageName').append("<p class='succes'>Selected answer: " + serachName[0].toUpperCase() + "</p>");
    }else{
        $('#messageName').append("<p class='error'>Name not found. Please try again!</p>");
    }
});

$('#ButtonType').on('click',function(){
    var getTypeData = $('#searhByType').val();
    var serachType =  filterItems(searchByType,getTypeData);
    $('#messageType').empty();
    if(serachType[0] === getTypeData ){
        $('#messageType').append("<p class='succes'>Type of the game is " + serachType[0].toUpperCase() + "</p>");
    }else{
        $('#messageType').append("<p class='error'>Type not found. Please try again!</p>");
    }
});
var takeTrueJackpots = filterByBool( searchByName, searchByJackpot, true);
var takeFalseJackpots = filterByBool( searchByName, searchByJackpot, false);

//Jackpot filter
    $('#searchJackpot').change(function(){
        if(this.checked === true ){
            var index;
            $('#ListJackpots').empty();
            for(index = 0; index < takeTrueJackpots.length; index++ ){
                $('#ListJackpots').append("<li>" + takeTrueJackpots[index] + "</li>")
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
var people = peopleArray.reduce(
    function (newPeopleObj, current, item ) {
        newPeopleObj[item] = current;
        return newPeopleObj;
    },{}
);

/*Convert the array to an object and load data from the object with id's as keys*/
function loadObjAsKey(data){
    var people = data.reduce(
        function (newPeopleObj, current, item, array ) {
            array[item] = current.id;
            newPeopleObj[array[item]] = current;
            return  newPeopleObj;
        },{}
    );
    return people;
}

var loadObjKey = loadObjAsKey(peopleArray);
    for (var key in loadObjKey) {
            if (loadObjKey.hasOwnProperty(key)) {
                var objKeyId = loadObjKey[key].id;
                $('#selectPeopleKey').append("<option value=" + objKeyId + ">" + objKeyId + "</option>");
            }
    }

$('#selectPeopleKey').change(function() {
    var getValue = $('#selectPeopleKey').val();
    $('#listPeople').empty();
    for (var key in loadObjKey) {
        if (loadObjKey.hasOwnProperty(key)) {
            if (getValue == loadObjKey[key]) {
                $('#listPeopleKey').append("<li id= item_ " + loadObjKey[key] + ">" + loadObjKey[key].name.toUpperCase() + " " + loadObjKey[key].age + " ani</li>");
            }
        }
    }
});


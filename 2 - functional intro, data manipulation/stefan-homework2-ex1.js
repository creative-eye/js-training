console.log('JS ready!');
const games = [
    { name: 'alibaba', type: 'pacanele', jackpot: false },
    { name: 'alibaba2', type: 'live', jackpot: false },
    { name: 'gonzo cautare', type: 'poker', jackpot: false },
    { name: 'alibaba', type: 'live', jackpot: true },
    { name: 'dracula', type: 'pacanale', jackpot: false },
    { name: 'dracula', type: 'pacanale', jackpot: true,
        children: [{ name: 'cosmic fortune', type: 'pacanele', jackpot: true }, { name: 'gonzo cautare', type: 'poker', jackpot: false }]
    }
];

var currentArr = flatten(games);

function flatten (arr) {
    return arr.reduce(function(a, b){
        if(b.children){
            a.push(b);
            return a.concat(b.children)
        } else {
            return a.concat(b);
        }
    }, [])
}

function deepClone (obj) {
    let result = Object.assign({}, obj);
    return result;
}

function filterGames (valueType, value, arr){
    let flattened = flatten(arr);
    let result = [];
    if(value){
        if(typeof value == 'boolean'){
            arr.filter(function(elem){
                if(elem[valueType] === value){
                    result.push(elem)
                }
            });
        } else {
            flattened.filter(function(elem){
                if(elem[valueType].toLowerCase().indexOf(value.toLowerCase()) > -1){
                    result.push(elem)
                }
            });
        }
        return result
    } else {
        console.error('nothing found');
        return arr
    }
}

function render(arr){
    console.log('this', this);
    $('.List').html("");
    if(arr.length > 0){
        return arr.forEach(function(item){
            $('.List').append(`<li class="ListItem">name: ${item.name} ; type: ${item.type} ; jackpot: ${item.jackpot}</li>`)
        })
    } else {
        $('.List').append(`<div class="ListItem NothingFound">No items found</div>`)
    }
}
render(currentArr);

$('.Search').on('click', function(){
    let nameInput = $('.SearchByNameInput');
    let typeInput = $('.SearchByTypeInput');
    currentArr = [];
    if(nameInput[0].value && typeInput[0].value){
        currentArr = filterGames('type', typeInput[0].value, filterGames('name', nameInput[0].value, games));
        return render(currentArr)
    } else if (nameInput[0].value && !typeInput[0].value){
        currentArr = filterGames('name', nameInput[0].value, games);
        return render(currentArr)
    } else if (!nameInput[0].value && typeInput[0].value){
        currentArr = filterGames('type', typeInput[0].value, games);
        return render(currentArr)
    } else {
        currentArr = flatten(games);
        return render(currentArr);
    }
});

$('.JackpotsCheck').change(function(e){
    if(e.target.checked){
        render(filterGames('jackpot', true, currentArr))
    } else {
        render(currentArr);
    }
});
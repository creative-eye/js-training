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

function filterGames (value, arr){
    let flattened = flatten(arr);
    let result = [];
    if(value){
        flattened.filter(function(elem){
            if(elem.name.toLowerCase().indexOf(value.toLowerCase()) > -1 || elem.type.toLowerCase().indexOf(value.toLowerCase()) > -1){
                //       console.log(elem)
                result.push(elem)
            }
        });
        return result
    } else {
        console.error('nothing found');
        return arr
    }
}

function render(){

}
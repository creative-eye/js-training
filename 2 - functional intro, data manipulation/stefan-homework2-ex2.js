console.log('JS Ready!');
const peopleArray = [
    { id: 123, name: 'dave', age: 23 },
    { id: 456, name: 'chris', age: 23 },
    { id: 789, name: 'bob', age: 23 },
    { id: 101, name: 'tom', age: 23 },
    { id: 102, name: 'tim', age: 23 }
];

function transformArrToObj (arr){
    let result = {};
    arr.forEach(function(item){
        var key = item.id;
        result[key] = item;
    });
    return result;
}

const peopleArrayTransformed = transformArrToObj(peopleArray);

function renderSelect (obj){
    for(var key in obj){
        console.log('key', key);
        $('.SelectID').append(`<option value="${obj[key].id}">${obj[key].id}</option>`)
    }

}
renderSelect(peopleArrayTransformed);

$('.SelectID').change(function (e) {
    let currentValue = e.target.value;
    $('.DisplayID').html('');
    $('.DisplayID').append(`<p>name: ${peopleArrayTransformed[currentValue].name}</p><p>age: ${peopleArrayTransformed[currentValue].age}</p>`);
    console.log('e', e.target.value);
    console.log('peopleArrayTransformed', peopleArrayTransformed[currentValue]);
});
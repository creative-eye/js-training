## Scope
This homework focuses on data manipulation in a functional way. Main purpose of the exercises is to learn how to manipulate data chunks and chain methods.

## Reading material:
> Array native methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
> Underscore alternatives: https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore
> Functional data manipulation: http://applandeo.com/blog/functional-like-data-manipulation-javascript/

### Requirements 1st exercise:
Given the following data structure:
```
const games = [
    { name: 'alibaba', type: 'pacanele', jackpot: false },
    { name: 'alibaba2', type: 'live', jackpot: false },
    { name: 'gonzo cautare', type: 'poker', jackpot: false },
    { name: 'alibaba', type: 'live', jackpot: true },
    { name: 'dracula', type: 'pacanele', jackpot: false },
    { name: 'dracula', type: 'pacanele', jackpot: true,
        children: [{ name: 'cosmic fortune', type: 'pacanele', jackpot: true }, { name: 'gonzo cautare', type: 'poker', jackpot: false },] }
];
```
Implement a filter bar that consists of:
- 1 input field for search by name;
- 1 input field for search by type;
- 1 checkbox for jackpots;
The result should be injected to DOM as is. You are free to use any library you want for DOM manipulation (eg: jQuery), but no library for filters, only JavaScript native Array methods should be used.
Notes:
- Data should be flattened before performing any filters;
- You are free to choose the strategy for implementation (eg: ES5/ES6 classes, plain ol' js functions, etc). Please motivate your approach.
- Bonus points:
    - Implement deepClone method for objects;
    - Implement caching/ [memoization](https://www.sitepoint.com/implementing-memoization-in-javascript/)

### Requirements 2nd exercise:
Given the following data structure:
```
const peopleArray = [
    { id: 123, name: 'dave', age: 23 },
    { id: 456, name: 'chris', age: 23 },
    { id: 789, name: 'bob', age: 23 },
    { id: 101, name: 'tom', age: 23 },
    { id: 102, name: 'tim', age: 23 }
];
```
Implement a select tag that displays all the id's from the array and when a certain id is selected, display the corespondent data into the DOM.

Bonus points: Convert the array to an object and load data from the object with id's as keys.

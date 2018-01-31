const stations = require('./stations.json');
const minSubset = require('./min-subset');

console.time('Elapsed');

const solution = minSubset(stations);

if (solution === null) {
  console.log('No solution was found.');
} else {
  console.log('Solution:', solution.join(', '));
  console.log('Total stations:', solution.length);
}

console.timeEnd('Elapsed');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


String.prototype.replaceToX = function () {
  return this.replace(/[a-zA-Z0-9-.]/g, 'x')
}
// prototype array max
Array.prototype.max = function () {
  return Math.max(...this)
}
// prototype array min
Array.prototype.min = function () {
  return Math.min(...this)
}

Array.prototype.diff = function (a) {
  return this.filter(function (i) {
    return a.indexOf(i) === -1;
  });
};


Number.prototype.double = function () {
  return this * 2
}

// Difference Between 2 JavaScript Arrays
var a = [1,2,3,4,5,6,7,8,9]
var b = [1,2,4,5,7,8,9]
console.log(a.diff(b))

console.log([1, 2, 3, 4, 5, 10].max())
console.log([1, 2, 3, 4, 5, 10].min())
let colors= ['red', 'green', 'blue', 'yellow', 'purple']

console.log(colors[0]);
console.log(colors[2]);
console.log(colors[4]);

    // 1. Add a new color to the end of the array colors.push('orange'); console.log(colors); // ['red', 'green', 'blue', 'yellow', 'purple', 'orange'] // 2. Remove the first color from the array colors.shift(); console.log(colors); // ['green', 'blue', 'yellow', 'purple', 'orange'] // 3. Add a new color to the beginning of the array colors.unshift('pink'); console.log(colors); // ['pink', 'green', 'blue', 'yellow', 'purple', 'orange'] // 4. Remove the last color from the array colors.pop(); console.log(colors); // ['pink', 'green', 'blue', 'yellow', 'purple'] // 5. Find the index of a specific color (e.g., "blue") let index = colors.indexOf('blue'); console.log(index); // 2 // 6. Create a new array
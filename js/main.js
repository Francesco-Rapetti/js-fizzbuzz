const container = document.getElementById('container');

for (let i = 1; i <= 100; i++) {
    const newBlock = document.createElement('p');

    if (i % 3 === 0 && i % 5 == 0) {
        newBlock.innerHTML = 'FizzBuzz';
    }
    else if (i % 3 === 0) {
        newBlock.innerHTML = 'Fizz';
    }
    else if (i % 5 === 0) {
        newBlock.innerHTML = 'Buzz';
    }
    else {
        newBlock.innerHTML = i;
    }

    container.append(newBlock);
}
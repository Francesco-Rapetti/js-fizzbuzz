const container = document.getElementById('container');

for (let i = 1; i <= 100; i++) {
    const newBlock = document.createElement('p');
    newBlock.className = 'glass col-1 mx-2';

    if (i % 3 === 0 && i % 5 == 0) {
        newBlock.classList.add('bg-danger');
        newBlock.classList.add('text-black');
        newBlock.classList.add('glass-opacity');
        newBlock.innerHTML = 'FizzBuzz';
    }
    else if (i % 3 === 0) {
        newBlock.classList.add('bg-orange')
        newBlock.classList.add('text-black');
        newBlock.classList.add('glass-opacity');
        newBlock.innerHTML = 'Fizz';
    }
    else if (i % 5 === 0) {
        newBlock.classList.add('bg-purple')
        newBlock.classList.add('text-black');
        newBlock.classList.add('glass-opacity');
        newBlock.innerHTML = 'Buzz';
    }
    else {
        newBlock.innerHTML = i;
    }

    container.append(newBlock);
}
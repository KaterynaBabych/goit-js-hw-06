let counterValue = 0;

const refs = {
    decrementNumber: document.querySelector('[data-action="decrement"]'),
    incrementNumber: document.querySelector('[data-action="increment"]'),
    counterValue: document.querySelector('#value')
};

refs.decrementNumber.addEventListener('click', onDecrementNumber);

refs.incrementNumber.addEventListener('click', onIncrementNumber);

function onDecrementNumber(event) {
    counterValue -= 1;
    
    refs.counterValue.textContent = counterValue;
};

function onIncrementNumber(event) {
    counterValue += 1;

    refs.counterValue.textContent = counterValue;
};


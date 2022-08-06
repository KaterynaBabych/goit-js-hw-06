const refs = {
    inputName: document.querySelector('#name-input'),
    outputName: document.querySelector('#name-output')
}

refs.inputName.addEventListener('input', onInputName);

function onInputName(event) {
        
    if (event.currentTarget.value) {
      refs.outputName.textContent = event.currentTarget.value;
    } else {
        refs.outputName.textContent = "Anonymous"
    };
};


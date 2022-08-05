const refs = {
    inputName: document.querySelector('#name-input'),
    outputName: document.querySelector('#name-output')
}

refs.inputName.addEventListener('input', onInputName);

refs.outputName.addEventListener('input', onOutputName);

function onInputName(value) {
    refs.outputName.textContent = event.currentTarget.value;
};

function onOutputName(value) {
    if (refs.inputName.length === 0) {
       return refs.outputName.textContent = "Anonymous";
}
};
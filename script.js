document.getElementById('unlockButton').addEventListener('click', function() {
    const combinationInput = document.getElementById('combination').value;
    const correctCombination = '1234'; // Altere a combinação aqui

    const content = document.getElementById('content');
    const error = document.getElementById('error');

    if (combinationInput === correctCombination) {
        content.classList.remove('hidden');
        error.classList.add('hidden');
    } else {
        error.classList.remove('hidden');
        content.classList.add('hidden');
    }
});

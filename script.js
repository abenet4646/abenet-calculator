const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            result.value += button.textContent;
        } else if (button.classList.contains('operation')) {
            result.value += button.textContent;
        } else if (button.classList.contains('clear')) {
            result.value = '';
        } else if (button.classList.contains('equal')) {
            try {
                result.value = eval(result.value);
            } catch (error) {
                result.value = 'Error';
            }
        }
    });
});
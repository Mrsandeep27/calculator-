let string = "";
let buttons = document.querySelectorAll('.button');
let input = document.querySelector('input');
let openParen = true; // Track which parenthesis to insert

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerText;

        if (value === '=') {
            try {
                string = eval(string.replace(/X/g, '*'));
            } catch {
                string = "Error";
            }
            input.value = string;
        } else if (value === 'AC') {
            string = "";
            input.value = string;
        } else if (value === 'back') {
            string = string.slice(0, -1);
            input.value = string;
        } else if (value === '%') {
            try {
                string = (eval(string.replace(/X/g, '*')) / 100).toString();
            } catch {
                string = "Error";
            }
            input.value = string;
        } else if (value === '()') {
            string += openParen ? '(' : ')';
            openParen = !openParen;
            input.value = string;
        } else if (value === 'X') {
            string += '*';
            input.value = string;
        } else {
            string += value;
            input.value = string;
        }
    });
});
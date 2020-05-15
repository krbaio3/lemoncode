import './ejercicio2.scss';

document.getElementById("myButton").addEventListener("click", changeTheme);
let changeBoolTheme = true;

function changeTheme() {

    changeBoolTheme ? document.getElementById('light').id = 'alternative' : document.getElementById('alternative').id = 'light';

    changeBoolTheme = !changeBoolTheme;
}

let calculation = '';

//Adding event listeners for mouse event
let calcBtn = document.querySelectorAll(".calc-btn");
calcBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        let val = btn.getAttribute("id");
        updateCalculation(val);
    })
});

//Adding event listener for keyboard event
document.body.addEventListener("keydown", (e) => {
    let val = e.key;
    console.log(val);
    if (Number(val) || val === '.' || val === '(' || val === ')' || val === '+' || val === '-' || val === '*' || val === '/') {
        updateCalculation(val);
    } else if(val === 'Backspace'){
        updateCalculation('delete');
    } else if (val === 'Delete'){
        updateCalculation('clear');
    } else if (val === 'Enter'){
        updateCalculation('=');
    }
});

function updateCalculation(value) {
    let display = document.querySelector('.display');
    if (value === '=') {
        display.innerHTML = `${truncateFloat(eval(calculation),3)}`;
        calculation = `${truncateFloat(eval(calculation),3)}`;
    } else if (value === 'clear') {
        calculation = '';
        display.innerHTML = `History Cleared !!`;
        setTimeout(()=>{
            display.innerHTML = `<br>`;
        }, 1500)
    } else if (value === 'delete'){
        calculation = calculation.slice(0,-1);
        display.innerHTML = calculation;
    } else {
        calculation += value;
        display.innerHTML = calculation;
    }
}

function truncateFloat(number, n) {
    const multiplier = Math.pow(10, n);
    return Math.trunc(number * multiplier) / multiplier;
}
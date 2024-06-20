const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const formulaText = document.getElementById('formula-text');
const convertButton = document.getElementById('convert');
const resetButton = document.getElementById('reset');
const reverseButton = document.getElementById('reverse');

function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

function updateFormula(celsius, fahrenheit) {
    const formula = `${celsius}°C * (9/5) + 32 = ${fahrenheit}°F`;
    formulaText.textContent = formula;
}

convertButton.addEventListener('click', () => {
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = celsiusToFahrenheit(celsius);
    fahrenheitInput.value = fahrenheit.toFixed(2);
    updateFormula(celsius, fahrenheit.toFixed(2));
});

resetButton.addEventListener('click', () => {
    celsiusInput.value = '';
    fahrenheitInput.value = '';
    formulaText.textContent = '';
});

reverseButton.addEventListener('click', () => {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = fahrenheitToCelsius(fahrenheit);
    celsiusInput.value = celsius.toFixed(2);
    updateFormula(celsius.toFixed(2), fahrenheit);
});
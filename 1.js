function celsiusToFahrenheit(celsius) {
    return (9 / 5) * celsius + 32;
}

let celsius = parseFloat(prompt("Введите температуру в градусах Цельсия:"));
let fahrenheit = celsiusToFahrenheit(celsius);

fahrenheit = fahrenheit.toFixed(1);
alert(`Цельсий: ${celsius}, Фаренгейт: ${fahrenheit}`);
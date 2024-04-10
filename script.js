function convertCurrency() {
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const amount = parseFloat(document.getElementById("amount").value);

    // Fetch API to get exchange rates
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.rates[toCurrency];
            const convertedAmount = amount * exchangeRate;
            document.getElementById("convertedAmount").textContent = convertedAmount.toFixed(2) + " " + toCurrency;
        })
        .catch(error => {
            console.error("Error fetching exchange rates:", error);
        });
}

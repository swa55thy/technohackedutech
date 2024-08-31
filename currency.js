function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;

    // Log the selected currencies and amount
    console.log(`Amount: ${amount}, From: ${fromCurrency}, To: ${toCurrency}`);

    const exchangeRates = {
        USD: { EUR: 0.85, GBP: 0.75, USD: 1, INR: 73.57 },
        EUR: { USD: 1.18, GBP: 0.88, EUR: 1, INR: 87.17 },
        GBP: { USD: 1.34, EUR: 1.14, GBP: 1, INR: 99.13 },
        INR: { USD: 0.014, EUR: 0.011, GBP: 0.010, INR: 1 }
    };

    // Log the exchange rate table
    console.log(`Exchange Rates:`, exchangeRates);

    const rate = exchangeRates[fromCurrency][toCurrency];
    
    // Check if the rate is undefined (invalid currency pair)
    if (rate === undefined) {
        console.error(`No exchange rate available for ${fromCurrency} to ${toCurrency}`);
        document.getElementById("result").innerText = "Invalid currency conversion.";
        return;
    }

    const convertedAmount = amount * rate;

    // Log the conversion details
    console.log(`Conversion: ${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`);

    document.getElementById("result").innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
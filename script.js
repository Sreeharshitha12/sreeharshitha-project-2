const quotes = [
    '"I am Iron Man."',
    '"We are Groot."',
    '"Hulk smash!"',
    '"I can do this all day."',
    '"Wakanda Forever!"'
];

function displayRandomQuote() {
    const quoteDisplay = document.getElementById('quoteDisplay');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
}

displayRandomQuote();

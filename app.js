document.getElementById('analyzeBtn').addEventListener('click', function() {
    const breakfastOptions = [
        'Holy Bagel',
        'Chaiiwala',
        'Ole and Steen',
        'Olive Branch',
        'Paris Cafe',
        'Subway',
        'Leon',
        'Greggs',
        'Prett',
        'Its All Greek to Me',
        'Meds',
        'Bricklane Bagel Company',
        'Joe and the Juice',
        'Pret a Manger',
        'The Breakfast Club',
        'The Milk Tree',
        'Poke House',
        'Paul',
        'Aunt Sallys Cafe'
    ];
    const randomIndex = Math.floor(Math.random() * breakfastOptions.length);
    const suggestion = breakfastOptions[randomIndex];
    document.getElementById('result').textContent = `Today's breakfast suggestion: ${suggestion}`;
});

document.getElementById('analyzeBtn').addEventListener('click', function() {
    const breakfastOptions = [
        'Oatmeal with fruits',
        'Avocado toast',
        'Greek yogurt with honey',
        'Eggs and spinach',
        'Smoothie bowl',
        'Pancakes with berries',
        'Granola and milk',
        'Banana and peanut butter',
        'Breakfast burrito',
        'Classic omelette'
    ];
    const randomIndex = Math.floor(Math.random() * breakfastOptions.length);
    const suggestion = breakfastOptions[randomIndex];
    document.getElementById('result').textContent = `Today\'s breakfast suggestion: ${suggestion}`;
});

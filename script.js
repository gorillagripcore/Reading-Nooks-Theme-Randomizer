// Reveal theme function
function revealTheme() {
    // Get theme from JSON file
    fetch('themes.json')
        .then(response => response.json())
        .then(data => {
            const theme = data.themes[Math.floor(Math.random() * data.themes.length)];
            document.getElementById('theme').innerText = 'Your theme is: ' + theme;

            // Remove the theme from the list
            const themeIndex = data.themes.indexOf(theme);
            if (themeIndex > -1) {
                data.themes.splice(themeIndex, 1); // Remove the theme from available themes
            }

            // Store the used theme in localStorage
            let usedThemes = JSON.parse(localStorage.getItem('selectedThemes')) || [];
            usedThemes.push(theme);
            localStorage.setItem('selectedThemes', JSON.stringify(usedThemes));

            // Log the theme change for testing
            console.log('Selected themes:', usedThemes);
        });
}

// Function to clear all data from localStorage
function clearData() {
    // Clear the localStorage
    localStorage.clear();
    document.getElementById('theme').innerText = '';  // Clear the theme display
    console.log('LocalStorage has been cleared');
}

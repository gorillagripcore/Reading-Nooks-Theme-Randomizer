function revealTheme() {
    fetch('themes.json')
        .then(response => response.json())
        .then(data => {
            const theme = data.themes[Math.floor(Math.random() * data.themes.length)];
            document.getElementById('theme').innerText = 'Your theme is: ' + theme;

            const themeIndex = data.themes.indexOf(theme);
            if (themeIndex > -1) {
                data.themes.splice(themeIndex, 1); 
            }

            let usedThemes = JSON.parse(localStorage.getItem('selectedThemes')) || [];
            usedThemes.push(theme);
            localStorage.setItem('selectedThemes', JSON.stringify(usedThemes));

            console.log('Selected themes:', usedThemes);
        });
}

function clearData() {
    localStorage.clear();
    document.getElementById('theme').innerText = '';
    console.log('LocalStorage has been cleared');
}

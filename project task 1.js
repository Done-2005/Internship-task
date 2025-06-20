const markdownInput = document.getElementById('markdown-input');
const livePreview = document.getElementById('live-preview');
const themeButtons = document.querySelectorAll('.theme-button');

// Update live preview on keypress
markdownInput.addEventListener('input', () => {
    const markdownText = markdownInput.value;
    livePreview.innerHTML = marked.parse(markdownText);
});

// Apply theme on button click
themeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const themeName = button.id.replace('-theme-btn', '');
        document.body.classList.remove('theme-dark', 'theme-minimalist', 'theme-retro');
        document.body.classList.add(`theme-${themeName}`);
    });
});


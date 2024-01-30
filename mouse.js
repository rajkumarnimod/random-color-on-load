//  -------------------rightclick off ----------------- 
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

//  -------------------keyboard click off ----------------- 
document.addEventListener("keydown", function (e) {
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        e.preventDefault();
    }
});

// ------select text option off ----------

//   rendom color ---------------- 
function randomColor() {

    // Array of colors
    const colors = [
        '#a0e9da7b',
        '#edc0955d',
        '#b192bc37',
        '#dbaf685e',
        '#78e5a53c',
        '#e2918846',
        '#98c6e534'
    ];

    // Function to get a random color from the array
    function getRandomColor() {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    // Function to set a random color as the background
    function setRandomBackgroundColor() {
        const randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor;
    }

    // Set a random background color on page load or reload
    setRandomBackgroundColor();

    // Add an event listener for page reload (F5 or browser reload button)
    window.addEventListener('beforeunload', setRandomBackgroundColor);



}
randomColor();

  

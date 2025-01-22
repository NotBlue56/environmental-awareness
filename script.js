// Function to show additional information when the button is clicked
function showInfo(section) {
    const infoElement = document.getElementById(section + '-info');
    if (infoElement.style.display === 'none') {
        infoElement.style.display = 'block';
    } else {
        infoElement.style.display = 'none';
    }
}

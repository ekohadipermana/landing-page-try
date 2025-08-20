const cards = document.querySelectorAll('.card');

// Add a click event listener to each card
// Find the currently active card
// document.querySelector() finds the first element that matches the selector
// Check if an active card was found and remove the 'active' class
// Add the 'active' class to the card that was just clicked
// 'this' inside an event listener refers to the element that triggered the event

cards.forEach(card => {
    card.addEventListener('click', () => {
    const currentActiveCard = document.querySelector('.card.active');
    if (currentActiveCard) {
        currentActiveCard.classList.remove('active');
    }        
    card.classList.add('active');
    });
});
const cards = document.querySelectorAll('.card');

    // Add a click event listener to each card
cards.forEach(card => {
    card.addEventListener('click', () => {
    // Find the currently active card
    // document.querySelector() finds the first element that matches the selector
    const currentActiveCard = document.querySelector('.card.active');

    // Check if an active card was found and remove the 'active' class
    if (currentActiveCard) {
        currentActiveCard.classList.remove('active');
    }
    
    // Add the 'active' class to the card that was just clicked
    // 'this' inside an event listener refers to the element that triggered the event
    card.classList.add('active');
    });
});
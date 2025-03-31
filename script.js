// Simple animation for cart button
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (e) => {
    e.target.textContent = 'ADDED!';
    setTimeout(() => {
      e.target.textContent = 'ADD TO CART';
    }, 2000);
  });
});

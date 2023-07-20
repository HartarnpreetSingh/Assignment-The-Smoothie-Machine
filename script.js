document.addEventListener('DOMContentLoaded', function() {
  const orderButton = document.getElementById('orderButton');
  orderButton.addEventListener('click', createSmoothie);
});

class Smoothie {
  constructor(name, baseIngredient, additionalIngredients, sweetnessLevel) {
      this.name = name || this.generateRandomName();
      this.baseIngredient = baseIngredient;
      this.additionalIngredients = additionalIngredients.split(',').map(ingredient => ingredient.trim());
      this.sweetnessLevel = parseInt(sweetnessLevel) || 5;
      this.price = this.calculatePrice();
  }

  generateRandomName() {
      const adjectives = ['Delicious', 'Refreshing', 'Tropical', 'Exotic', 'Healthy', 'Fruity'];
      const fruits = ['Smoothie', 'Fusion', 'Blend', 'Crush', 'Burst', 'Splash'];
      const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
      const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
      return `${randomAdjective} ${randomFruit}`;
  }

  calculatePrice() {
      const basePrice = 4.99; // Price for the base ingredient
      const additionalPrice = 1.5; // Price for each additional ingredient
      return basePrice + (additionalPrice * this.additionalIngredients.length);
  }

  getDescription() {
      const additionalIngredientsString = this.additionalIngredients.length > 0
          ? ` with ${this.additionalIngredients.join(', ')}`
          : '';
      return `You ordered a ${this.sweetnessLevel}-sweetness level smoothie called '${this.name}' with ${this.baseIngredient}${additionalIngredientsString}. The total price is $${this.price.toFixed(2)}.`;
  }
}

function createSmoothie() {
  const smoothieName = document.getElementById('smoothieName').value;
  const baseIngredient = document.getElementById('baseIngredient').value;
  const additionalIngredients = document.getElementById('additionalIngredients').value;
  const sweetnessLevel = document.getElementById('sweetnessLevel').value;

  const smoothie = new Smoothie(smoothieName, baseIngredient, additionalIngredients, sweetnessLevel);

  const smoothieOutput = document.getElementById('smoothieOutput');
  smoothieOutput.innerHTML = `
      <p>${smoothie.getDescription()}</p>
      <img src="smoothie.jpg" alt="Smoothie Image" id="smoothieImage">
  `;

  resetForm();
}

function resetForm() {
  document.getElementById('smoothieForm').reset();
}

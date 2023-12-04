abstract class Recipes {
    name: string;
    type: 'vegetarian' | 'regular';
  
    constructor(name: string, type: 'vegetarian' | 'regular') {
      this.name = name;
      this.type = type;
    }
  
    // Абстрактные методы
    abstract showRecipe(): void;
    abstract showIngredients(): void;
  }
class Salad extends Recipes {
    ingredients: string;
    recipe: string;
  
    constructor(name: string, type: 'vegetarian' | 'regular', ingredients: string, recipe: string) {
      super(name, type);
      this.ingredients = ingredients;
      this.recipe = recipe;
    }
  
    showRecipe(): void {
      console.log(`Recipe for ${this.name}: ${this.recipe}`);
    }
  
    showIngredients(): void {
      console.log(`Ingredients for ${this.name}: ${this.ingredients}`);
    }
  }
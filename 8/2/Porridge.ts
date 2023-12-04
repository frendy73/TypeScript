class Porridge extends Persons implements Recipes {
    private ingredients: string;
    private recipe: string;
  
    constructor(fullName: string, dateOfBirth: string, address: string, ingredients: string, recipe: string) {
      super(fullName, dateOfBirth, address);
      this.ingredients = ingredients;
      this.recipe = recipe;
    }
  
    showRecipe(): void {
      console.log(`Porridge Recipe: ${this.recipe}`);
    }
  
    showIngredients(): void {
      console.log(`Porridge Ingredients: ${this.ingredients}`);
    }
  }
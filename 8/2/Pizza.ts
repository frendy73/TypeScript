class Pizza extends Persons implements Recipes {
    private ingredients: string;
    private recipe: string;
  
    constructor(fullName: string, dateOfBirth: string, address: string, ingredients: string, recipe: string) {
      super(fullName, dateOfBirth, address);
      this.ingredients = ingredients;
      this.recipe = recipe;
    }
  
    showRecipe(): void {
      console.log(`Pizza Recipe: ${this.recipe}`);
    }
  
    showIngredients(): void {
      console.log(`Pizza Ingredients: ${this.ingredients}`);
    }
  }
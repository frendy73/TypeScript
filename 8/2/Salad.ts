class Salad extends Persons implements Recipes {
    private ingredients: string;
    private description: string;
  
    constructor(fullName: string, dateOfBirth: string, address: string, ingredients: string, description: string) {
      super(fullName, dateOfBirth, address);
      this.ingredients = ingredients;
      this.description = description;
    }
  
    showRecipe(): void {
      console.log(`Salad Recipe: ${this.description}`);
    }
  
    showIngredients(): void {
      console.log(`Salad Ingredients: ${this.ingredients}`);
    }
  }
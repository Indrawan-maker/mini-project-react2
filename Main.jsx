import React from "react"
import ResultRecipe from "./component/ResultRecipe"
import RecipeList from "./component/RecipeList"

export default function Main() {
        const [ingredients, setIngredients] = React.useState([])
    
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    const [recipeShown, setRecipeShown] = React.useState(false)

    function toggleRecipeShown() {
        setRecipeShown( prevShown => !prevShown)}

    function signUp(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients( prevIngredient => [...prevIngredient, newIngredient])

    }
    return(
        <main>
            <form action={signUp}>
                <input 
                type="text" 
                placeholder="e.g. oregano" 
                aria-label="Add ingreadient"
                name="ingredient"
                />
                <button className="main-btn">Add Ingredient</button>
            </form>
            { ingredientsListItems.length > 0 && <RecipeList
            item={ingredients}
            listItems={ingredientsListItems}
            handleToggle={toggleRecipeShown}
            />}
                        
            {recipeShown && <ResultRecipe />}


        </main>
    ) 
}
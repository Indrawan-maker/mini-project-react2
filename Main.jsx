import React from "react"

export default function Main() {
        const [ingredients, setIngredients] = React.useState([])
    
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients( ingredient => [...ingredient, newIngredient])
    }
    return(
        <main>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="e.g. oregano" 
                aria-label="Add ingreadient"
                name="ingredient"
                />
                <button className="main-btn">Add Ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    ) 
}
export default function Main() {
        const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient)
        console.log(ingredients)
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
        </main>
    ) 
}
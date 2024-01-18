
const showInfo = (recipes) => {
    const rowHead = document.createElement('tr')
    const headElement =  document.createElement('th')
    rowHead.textContent = recipes
    recipes.unshift({name: "Name", ingredients: "Ingredients"})

    let table = document.getElementById("table")

    recipes.map((recipe) => {
        
        const row = document.createElement('tr')
        const nameCell = document.createElement('td')
        const nameCell2 = document.createElement('td')

        nameCell.textContent = recipe.name
        nameCell2.textContent = recipe.ingredients
        row.appendChild(nameCell)
        row.appendChild(nameCell2)
        //document.body.append(row)
        table.appendChild(row)
    })

}

async function getRecipies(){
    try{
          let responseNames = await fetch('https://dummyjson.com/recipes')

        let namesJson = await responseNames.json()

        let names = namesJson.recipes
        let ingredients = namesJson.recipes.ingredients
     //   console.log(namesJson.recipes, namesJson.recipes[0].ingredients, "Json response")
      //  console.log(namesJson.recipes[0])
      console.log(names)
        showInfo(names)
    } catch (error) {
        console.log("There is an error", error)
    }
}

getRecipies()
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const RecipeSearch = () => {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [memo, setMemo] = useState({});
  const [showRecipe, setShowRecipe] = useState(false);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const fetchData = async (searchText) => {
      if (memo[searchText]) {
        setRecipes(memo[searchText]);
        return;
      }

      const response = await axios.get(
        `https://dummyjson.com/recipes/search?q=${searchText}`
      );
      if (response.data.recipes) {
        const allRecipes = response.data.recipes;
        setRecipes(allRecipes);
        setMemo((prev) => ({ ...prev, [searchText]: allRecipes }));
      }
    };

    const timer = setTimeout(fetchData(search), 300);

    return () => clearTimeout(timer);
  }, [search, memo]);

  return (
    <div className="recipe__container">
      <input
        value={search}
        placeholder="search your recipe"
        className="recipe__input"
        onChange={handleInputChange}
        onFocus={() => setShowRecipe(true)}
        onBlur={() => setShowRecipe(false)}
      />
      {showRecipe && recipes.length > 0 && (
        <div className="recipes__list_container">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe__item">
              {recipe.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeSearch;

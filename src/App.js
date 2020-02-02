import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from "./recipe";

const App = () => {
  const App_ID = "e25c74da";
  const App_KEY = "99222b5f4ec4f71cc6a5cc2afa2a3f8e";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  const [joke, setJoke] = useState('');

  useEffect(() => {
    getRecipes();
    }, [query]);
  useEffect(() =>{
    cn();
  },[]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);

  }
  const cn = async () =>{
    const cn_return = await fetch('https://api.chucknorris.io/jokes/random');
    const joke = await cn_return.json();
    console.log(joke['value'])
    setJoke(joke['value'])
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('');
  }
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input 
          className="search-bar" 
          type="text"
          value={search}
          onChange={updateSearch}
         />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="center">
        <h1>{joke}</h1>
      </div>
      <div className="recipes">

        {recipes.map((recipe, x) => (
          <Recipe
            key={x}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>

    </div>
  );
};

export default App;

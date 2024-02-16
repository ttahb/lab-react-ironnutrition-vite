import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import { Row, Divider } from "antd";
import SearchBar from "./components/SearchBar";

function App() {

  const [foods, setFoods] = useState(foodsJson);
  const [foodData, setFoodData] = useState(foodsJson);
  const [searchQuery, setSearchQuery] = useState('');

  const deleteFood = (foodId) => {
    const filteredList = foods.filter(food=> food.id !== foodId);
    setFoods(filteredList);
    setFoodData(filteredList);
  }

  const addFood = (food) => {
    const updatedFoodList = [...foods, food];
    setFoods(updatedFoodList);
    setFoodData(updatedFoodList);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setFoodData(foodData);
    if(query === ''){
      setFoods(foodData);
      setSearchQuery('');
    } else {
      const filteredFood =[...foodData].filter(food => {
        return food.name.toLowerCase().startsWith(query.toLowerCase());
      })
      setSearchQuery(query);
      setFoods(filteredFood);
    }
   
  }

  return (
    <div>
      <AddFoodForm addFood={addFood}/>
      <SearchBar handleSearch={handleSearch}/>
      <Divider>Food List</Divider>
      <div className="list">
      {
        foods.length === 0 ? 
        <div>
          <h4>Oops! There is no more content to display.</h4>
          <img src="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150544943.jpg?size=626&ext=jpg&ga=GA1.1.295423526.1708112866&semt=ais" height={300} width={400} alt="no content"/>
        </div>:
        foods.map(food => {
          return (
            <Row key={food.id} style={{ width: "25vw", justifyContent: "center" }}>
              <FoodBox  food={food} deleteFood={deleteFood} />
            </Row>
          )
        })
        
      }
      </div>
      
    </div>
  );
}

export default App;

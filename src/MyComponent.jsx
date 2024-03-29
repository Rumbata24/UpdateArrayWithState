import { useState } from "react";

const MyComponent = () => {
  const [foods, setFoods] = useState(["Apple", "orange", "Banana"]);

  const handleAddFood = () => {
    const newFood = document.getElementById("food").value;
    document.getElementById("food").value = "";

    setFoods((f) => [...foods, newFood]);
  };

  const handleRemoveFood = (index) => {
    setFoods(foods.filter((_, i) => i !== index));
  };
  return (
    <>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <li onClick={() => handleRemoveFood(index)} key={index}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" name="" id="food" placeholder="Enter food" />
      <button onClick={handleAddFood}>Add Food</button>
    </>
  );
};

export default MyComponent;

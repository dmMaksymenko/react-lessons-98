const DrinksCounter = ({ handleLogDrink }) => {
  return (
    <div>
      <button onClick={() => handleLogDrink("beer")}> Beer</button>
      <button onClick={() => handleLogDrink("whiskey")}>Whiskey</button>
      <button onClick={() => handleLogDrink("wine")}>Wine</button>
    </div>
  );
};

export default DrinksCounter;

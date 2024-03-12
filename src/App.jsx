import { useState } from "react";
import DrinksCounter from "./components/DrinksCounter/DrinksCounter";
import DrinksValues from "./components/DrinksValues/DrinksValues";
import MailBox from "./components/MailBox";

const meestExpressUsers = [
  { id: "1", userEmail: "max@example.com" },
  { id: "2", userEmail: "alla@example.com" },
  { id: "3", userEmail: "matviy@example.com" },
];

const novaPoshtaUsers = [
  { id: "11", userEmail: "oleg@example.com" },
  { id: "22", userEmail: "vanya@example.com" },
  { id: "33", userEmail: "lola@example.com" },
];

const ukrPoshtaUsers = [
  { id: "111", userEmail: "vasya@example.com" },
  { id: "222", userEmail: "vika@example.com" },
  { id: "333", userEmail: "katya@example.com" },
];

function App() {
  const [counter, setCounter] = useState(0);
  const [drinks, setDrinks] = useState({ beer: 0, whiskey: 0, wine: 0 });

  const handleLogDrink = (drinkName) => {
    if (drinks[drinkName] === 2 && drinkName === "beer") {
      alert("Sorry exceeded the limit. Please choose other drink");
      return;
    }
    console.log("DrinkName: ", drinkName);
    setDrinks({ ...drinks, [drinkName]: drinks[drinkName] + 1 });
  };

  const handleIncrementCounter = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  const handleDecrementCounter = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
    console.log(counter);
  };

  const drinksTotal = drinks.beer + drinks.whiskey + drinks.wine;
  return (
    <div className="app-container">
      <button onClick={handleIncrementCounter}>Counter: {counter}</button>
      <button onClick={handleDecrementCounter}>Counter: {counter}</button>

      <DrinksValues drinks={drinks} total={drinksTotal} />
      <DrinksCounter handleLogDrink={handleLogDrink} />
      {/* <button onClick={handleClick}>Click me</button>
      <button onClick={() => handleLogClick(1)}>
        Click to log my number: 1
      </button>
      <MailBox
        boxUsers={meestExpressUsers}
        boxTitle="Meast Express"
        mailBoxCount={3}
      />
      <MailBox
        boxUsers={novaPoshtaUsers}
        boxTitle="Nova Poshta"
        mailBoxCount={5}
      />
      <MailBox boxUsers={ukrPoshtaUsers} boxTitle="UKR Poshta" /> */}
    </div>
  );
}

export default App;

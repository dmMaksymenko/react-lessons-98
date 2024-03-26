import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [drinks, setDrinks] = useState(() => {
    const stringifiedDrinks = localStorage.getItem("drinksValues");
    const parsedDrinks = JSON.parse(stringifiedDrinks) ?? initialDrinks;
    return parsedDrinks;
  });
  const [isVisibleBar, setIsVisibleBar] = useState(false);

  const handleLogDrink = (drinkName) => {
    if (drinks[drinkName] === 2 && drinkName === "beer") {
      alert("Sorry exceeded the limit. Please choose other drink");
      return;
    }
    console.log("DrinkName: ", drinkName);
    setDrinks({ ...drinks, [drinkName]: drinks[drinkName] + 1 });
  };
  const handleResetDrinks = () => {
    setDrinks();
  };
  // const handleIncrementCounter = () => {
  //   setCounter(counter + 1);
  //   console.log(counter);
  // };

  // const handleDecrementCounter = () => {
  //   if (counter === 0) return;
  //   setCounter(counter - 1);
  //   console.log(counter);
  // };
  const onToggleMinibarVisibility = () => {
    setIsVisibleBar(!isVisibleBar);
  };
  const drinksTotal = Object.values(drinks).reduce(
    (acc, curr) => acc + curr,
    0
  );

  useEffect(() => {
    localStorage.setItem("drinksValues", JSON.stringify(drinks));
  }, [drinks]);
  return (
    <div>
      {/* <button onClick={handleIncrementCounter}>Counter: {counter}</button>
      <button onClick={handleDecrementCounter}>Counter: {counter}</button> */}
      <button onClick={onToggleMinibarVisibility}>
        {isVisibleBar ? "Hide" : "Show"} mini-bar
      </button>
      {isVisibleBar && (
        <>
          {" "}
          <DrinksValues drinks={drinks} total={drinksTotal} />
          <DrinksCounter
            onToggleMinibarVisibility={onToggleMinibarVisibility}
            handleLogDrink={handleLogDrink}
            handleResetDrinks={handleResetDrinks}
          />{" "}
        </>
      )}

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

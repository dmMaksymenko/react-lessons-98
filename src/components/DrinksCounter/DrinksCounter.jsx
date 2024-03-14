import { useEffect } from "react";
const DrinksCounter = ({
  handleResetDrink,
  onToggleMinibarVisibility,
  handleLogDrink,
}) => {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.code === "Escape") {
        onToggleMinibarVisibility();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onToggleMinibarVisibility]);
  return (
    <div>
      <button onClick={() => handleLogDrink("beer")}> Beer</button>
      <button onClick={() => handleLogDrink("whiskey")}>Whiskey</button>
      <button onClick={() => handleLogDrink("wine")}>Wine</button>
      <button onClick={handleResetDrink}>Reset</button>
    </div>
  );
};

export default DrinksCounter;

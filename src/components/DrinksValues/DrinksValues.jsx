import { useEffect } from "react";

const DrinksValues = ({ drinks, total }) => {
  useEffect(() => {
    console.log(`TOtal drinks values ${total}`);
  }, [total]);
  return (
    <ul>
      <li>Beer: {drinks.beer}</li>
      <li>Whiskey: {drinks.whiskey}</li>
      <li>Wine: {drinks.wine}</li>
      <li>Total: {total}</li>
    </ul>
  );
};

export default DrinksValues;

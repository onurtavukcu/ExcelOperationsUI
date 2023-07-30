import React, { useState } from "react";

export default function useCounter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);

  const NegativeContent = () => {
    if (count < 0) {
      return <div>Sayı negatif</div>;
    }
    return null;
  };
  return {
    count,
    increment,
    decrement,
    NegativeContent,
  };
}

function App() {
  const { count, increment, decrement, NegativeContent } = useCounter();
  return (
    <div>
      <button onClick={decrement}> azalt</button>
      <div>count</div>
      <button onClick={increment}> arttır</button>
      <NegativeContent />
    </div>
  );
}

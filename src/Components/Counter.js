import { useState } from "react";
import list from "./List";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [currency, setCurrency] = useState(0);
  const [amount, setAmount] = useState(1);

  const increaseTwo = () => {
    setCounter(counter + 1);
    setCurrency(currency + amount);
  };

  return (
    <div>
      <div className="card">
        <h2>Conter: {counter}</h2>
        <h2>Currency: {currency}</h2>
        <p>amount: {amount}</p>
        <button className="button" onClick={increaseTwo}>
          Add
        </button>
      </div>
      <div className="card2">
        {list.map((item, index) => {
          if (currency >= item.price * (index + amount)) {
            return (
              <h1
                className="upgrade"
                key={index}
                onClick={() => {
                  setCurrency(currency - item.price * (index + amount));
                  setAmount(amount + (index + 1));
                }}
              >
                <p style={{ fontSize: "10px" }}>
                  this will cost {item.price * (index + amount)}
                  <p>it will make the amount = {amount + (index + 1)}</p>
                </p>

                {item.name}
              </h1>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Counter;

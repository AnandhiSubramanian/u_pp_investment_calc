import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 100,
    expectedReturn: 12,
    duration: 10,
  });

  const isInputValid = userInput.duration >= 1;

  function handleInput(param, value) {
    setUserInput(() => {
      return { ...userInput, [param]: +value };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleInput} />
      {isInputValid && <Results data={userInput} />}
      {!isInputValid && <p className="center">Please enter valid duration!!</p>}
    </>
  );
}

export default App;

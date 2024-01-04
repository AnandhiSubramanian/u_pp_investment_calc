import { useState } from "react";

export default function UserInput({ userInput, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInv">Initial Investment</label>
          <input
            type="number"
            id="initialInv"
            value={userInput.initialInvestment}
            onChange={(event) => onChange("initialInv", event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="annualInv">Annual Investment</label>
          <input
            type="number"
            id="annualInv"
            value={userInput.annualInvestment}
            onChange={(event) => onChange("annualInv", event.target.value)}
          />
        </p>
      </div>

      <div className="user-input">
        <p>
          <label htmlFor="rate">Rate of return</label>
          <input
            type="number"
            id="rate"
            value={userInput.expectedReturn}
            onChange={(event) => onChange("rate", event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration}
            onChange={(event) => onChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}

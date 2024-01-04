import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

export default function Results({ data }) {
  console.log(data);
  const results = calculateInvestmentResults(data);
  const initialInv =
    results[0].valueEndOfYear -
    results[0].annualInvestment -
    results[0].interest;
  console.log(results);
  return (
    <>
      <table id="result">
        <thead>
          <th>Year</th>
          <th>Investment capital</th>
          <th>Interest (year)</th>
          <th>Total Interest </th>
          <th>Investment value</th>
        </thead>
        <tbody>
          {results.map((result) => {
            const totalInterest =
              result.valueEndOfYear -
              result.annualInvestment * result.year -
              initialInv;
            return (
              <tr key={result.year}>
                <td>{result.year}</td>
                <td>
                  {formatter.format(result.valueEndOfYear - totalInterest)}
                </td>
                <td>{formatter.format(result.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(result.valueEndOfYear)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

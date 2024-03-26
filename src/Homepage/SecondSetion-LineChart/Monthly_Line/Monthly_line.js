import { useState } from "react";
import Monthly_expense from "../../../data/Monthly_expense";
import LineChart from "../../../asset/Chart/LineChart";
export function Monthly_line() {
  const monthlyExpense = [];
  Monthly_expense.forEach((item) => {
    const { datetime, amount } = item;
    monthlyExpense.push({ datetime, amount });
  });
  const [monthlySpendingData, setMonthlySpendingData] = useState({
    labels: Monthly_expense.map((data) => data.datetime),
    datasets: [
      {
        label: "Statistic of the month",
        data: Monthly_expense.map((data) => data.amount),
        backgroundColor: "#4897D8",
      },
    ],
  });
  return (
    <>
      <LineChart data={monthlySpendingData} />
    </>
  );
}

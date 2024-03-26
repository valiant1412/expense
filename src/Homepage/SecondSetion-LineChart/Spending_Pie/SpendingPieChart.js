import Spending_money from "../../../data/Spending_money";
import { useState } from "react";
import PieChart from "../../../asset/Chart/PieChart";
import { GenerateColor } from "../../../Utilities/GenerateColor";
export function SpendingPieChart() {
  const daily_expense = [];
  const amountSet = new Set();

  Spending_money.forEach((item) => {
    const { purpose, amount } = item;
    if (!amountSet.has(purpose)) {
      amountSet.add(purpose);
      daily_expense.push({ purpose, amount });
    } else {
      const expenseAmount = daily_expense.find(
        (item) => item.purpose === purpose
      );
      expenseAmount.amount += amount;
    }
  });
  const [dailySpendingData, setDailySpendingData] = useState({
    labels: daily_expense.map((data) => data.purpose),
    datasets: [
      {
        label: "Amount of money used in the day",
        data: daily_expense.map((data) => data.amount),
        backgroundColor: daily_expense.map(() => GenerateColor()),
      },
    ],
  });
  return (
    <div>
      <PieChart data={dailySpendingData} />
    </div>
  );
}

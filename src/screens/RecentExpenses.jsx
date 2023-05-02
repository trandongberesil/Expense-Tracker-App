import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../utils/date';

export default function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpense = expensesCtx.expenses.filter((expense) => {
    const today = new Date();

    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expensesPeriod='Last 7 days'
      expenses={recentExpense}
      fallbackText={'No expenses registed for last 7 days'}
    />
  );
}

const incomeColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d'];
const expenseColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];

export const incomeCategories = [
  { type: 'Business', amount: 0, color: incomeColors[0], icon: '💼' },
  { type: 'Investments', amount: 0, color: incomeColors[1], icon: '💸' },
  { type: 'Extra income', amount: 0, color: incomeColors[2], icon: '💰' },
  { type: 'Deposits', amount: 0, color: incomeColors[3], icon: '💳' },
  { type: 'Lottery', amount: 0, color: incomeColors[4], icon: '🎟' },
  { type: 'Gifts', amount: 0, color: incomeColors[5], icon: '🎁' },
  { type: 'Salary', amount: 0, color: incomeColors[6], icon: '💲' },
  { type: 'Savings', amount: 0, color: incomeColors[7], icon: '📦' },
  { type: 'Rental income', amount: 0, color: incomeColors[8], icon: '🏘' },
];

export const expenseCategories = [
  { type: 'Bills', amount: 0, color: expenseColors[0], icon: '🧾' },
  { type: 'Car', amount: 0, color: expenseColors[1], icon: '🚗' },
  { type: 'Clothes', amount: 0, color: expenseColors[2], icon: '👚' },
  { type: 'Travel', amount: 0, color: expenseColors[3], icon: '🏖' },
  { type: 'Food', amount: 0, color: expenseColors[4], icon: '🍕' },
  { type: 'Shopping', amount: 0, color: expenseColors[5], icon: '🛍' },
  { type: 'House', amount: 0, color: expenseColors[6], icon: '🏡' },
  { type: 'Entertainment', amount: 0, color: expenseColors[7], icon: '🎭' },
  { type: 'Phone', amount: 0, color: expenseColors[8], icon: '☎' },
  { type: 'Pets', amount: 0, color: expenseColors[9], icon: '🐶' },
  { type: 'Other', amount: 0, color: expenseColors[10], icon: '💱' },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};
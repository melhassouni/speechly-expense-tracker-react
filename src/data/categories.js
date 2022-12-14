const incomeColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d'];
const expenseColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];

export const incomeCategories = [
  { type: 'Business', amount: 0, color: incomeColors[0], icon: '๐ผ' },
  { type: 'Investments', amount: 0, color: incomeColors[1], icon: '๐ธ' },
  { type: 'Extra income', amount: 0, color: incomeColors[2], icon: '๐ฐ' },
  { type: 'Deposits', amount: 0, color: incomeColors[3], icon: '๐ณ' },
  { type: 'Lottery', amount: 0, color: incomeColors[4], icon: '๐' },
  { type: 'Gifts', amount: 0, color: incomeColors[5], icon: '๐' },
  { type: 'Salary', amount: 0, color: incomeColors[6], icon: '๐ฒ' },
  { type: 'Savings', amount: 0, color: incomeColors[7], icon: '๐ฆ' },
  { type: 'Rental income', amount: 0, color: incomeColors[8], icon: '๐' },
];

export const expenseCategories = [
  { type: 'Bills', amount: 0, color: expenseColors[0], icon: '๐งพ' },
  { type: 'Car', amount: 0, color: expenseColors[1], icon: '๐' },
  { type: 'Clothes', amount: 0, color: expenseColors[2], icon: '๐' },
  { type: 'Travel', amount: 0, color: expenseColors[3], icon: '๐' },
  { type: 'Food', amount: 0, color: expenseColors[4], icon: '๐' },
  { type: 'Shopping', amount: 0, color: expenseColors[5], icon: '๐' },
  { type: 'House', amount: 0, color: expenseColors[6], icon: '๐ก' },
  { type: 'Entertainment', amount: 0, color: expenseColors[7], icon: '๐ญ' },
  { type: 'Phone', amount: 0, color: expenseColors[8], icon: 'โ' },
  { type: 'Pets', amount: 0, color: expenseColors[9], icon: '๐ถ' },
  { type: 'Other', amount: 0, color: expenseColors[10], icon: '๐ฑ' },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};
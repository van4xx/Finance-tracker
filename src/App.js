import React, { useState } from 'react';
import './App.scss';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';

function App() {
  const [transactions, setTransactions] = useState([]);
  
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const calculateBalance = () => {
    return transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  };

  return (
    <div className="App container">
      <h1>Finance Tracker</h1>
      <Balance balance={calculateBalance()} />
      <TransactionList transactions={transactions} />
      <TransactionForm addTransaction={addTransaction} />
    </div>
  );
}

export default App;

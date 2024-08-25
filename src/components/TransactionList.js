// src/components/TransactionList.js
import React from 'react';

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <div className="transaction-list">
      <h3>Transactions</h3>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index} className={transaction.amount < 0 ? 'expense' : 'income'}>
            {transaction.description} <span>${transaction.amount.toFixed(2)}</span>
            <button className="btn btn-danger btn-sm" onClick={() => deleteTransaction(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;

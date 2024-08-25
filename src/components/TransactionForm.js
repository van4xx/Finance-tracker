// src/components/TransactionForm.js
import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    
    if (!amount) {
      alert("Please enter an amount");
      return;
    }

    addTransaction({
      description,
      amount: parseFloat(amount),
    });
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Amount</label>
        <input
          type="number"
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;

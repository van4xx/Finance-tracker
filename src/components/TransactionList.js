import React from 'react'

const TransactionList = ({transactions}) => {
    return (
        <div className='transaction-list'>
            <h3>Transaction</h3>
            <ul>
                {transactions.map((transaction, index) => (
                <li key={index} className={transaction.amount < 0 ? 'expense' : 'income'}>
                    {transaction.description} <span>${transaction.amount.toFixed(2)}</span>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;
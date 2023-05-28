import React from 'react';

const View = () => {
  const transactions = [
    { id: 1, date: '2023-05-27', description: 'Purchase', amount: 100 },
    { id: 2, date: '2023-05-26', description: 'Withdrawal', amount: -50 },
    { id: 3, date: '2023-05-25', description: 'Deposit', amount: 200 },
  ];

  return (
    <div className="transaction-table-container">
      <table className="transaction-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td className={transaction.amount < 0 ? 'negative' : 'positive'}>
              {transaction.amount}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default View;

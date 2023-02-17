import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  TransactionHistoryLine,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <thead>
        <TransactionHistoryLine>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TransactionHistoryLine>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransactionHistoryLine key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </TransactionHistoryLine>
          );
        })}
      </tbody>
    </TransactionHistoryTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

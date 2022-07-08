import classNames from "classnames";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchTransactions,
  getUserTransactions,
} from "../../redux/transactions";

import { getUserAddress } from "../../redux/user";

import DateAndTime from "../AtomicComponents/DateAndTime";
import { TableRow } from "../AtomicComponents/Table";

const truncateString = (str, firstLength, lastLength) => {
  return (
    str.slice(0, firstLength - 1) + "..." + str.slice(str.length - lastLength)
  );
};

const DateAndTransactionHash = ({ date, transactionHash }) => {
  return (
    <>
      <div className="mb-1">
        <DateAndTime date={date} />
      </div>
      <div>{truncateString(transactionHash, 6, 4)}</div>
    </>
  );
};

const SendAndReceiveDetails = ({ from_address, to_address, userAddress }) => {
  return (
    <>
      <div className="text-[#8b93a7] mb-1">
        {from_address === userAddress ? "Send" : "Receive"}
      </div>
      <div className="text-[#19233c]">
        {from_address === userAddress
          ? truncateString(to_address, 6, 4)
          : truncateString(from_address, 6, 4)}
      </div>
    </>
  );
};

const ETHTransaction = ({ value, from_address, userAddress }) => {
  return (
    <>
      {Number(value) && (
        <div
          className={classNames({
            "text-green-500": from_address !== userAddress,
          })}
        >
          {from_address === userAddress ? "-" : "+"}{" "}
          {(Number(value) * Math.pow(10, -18)).toFixed(2)} ETH
        </div>
      )}
    </>
  );
};

const GasFeePaid = ({
  from_address,
  userAddress,
  value,
  fees_paid,
  gas_quote,
}) => {
  return (
    <>
      {from_address === userAddress && Number(value) && (
        <div className="text-[#8b93a7]">
          Gas Fee {(fees_paid * Math.pow(10, -18)).toFixed(2)} ETH ($
          {gas_quote.toFixed(2)})
        </div>
      )}
    </>
  );
};

function Transactions() {
  const dispatch = useDispatch();
  const userAddress = useSelector(getUserAddress);
  const transactions = useSelector(getUserTransactions);
  console.log({ transactions });

  useEffect(() => {
    dispatch(fetchTransactions({ userAddress }));
  }, [dispatch, userAddress, transactions.length]);

  const getTableRowData = (transaction) => {
    const {
      block_signed_at,
      from_address,
      to_address,
      tx_hash,
      fees_paid,
      gas_quote,
      value,
    } = transaction;
    return [
      <DateAndTransactionHash
        date={block_signed_at}
        transactionHash={tx_hash}
      />,
      <SendAndReceiveDetails
        from_address={from_address}
        to_address={to_address}
        userAddress={userAddress}
      />,
      <ETHTransaction
        value={value}
        from_address={from_address}
        userAddress={userAddress}
      />,
      <GasFeePaid
        from_address={from_address}
        userAddress={userAddress}
        value={value}
        fees_paid={fees_paid}
        gas_quote={gas_quote}
      />,
    ];
  };

  return (
    <>
      <div className="bg-white p-4 rounded-md">
        <table className="w-full text-center">
          {transactions.map((transaction, index) => {
            return (
              <TableRow
                classes={{ tr: index !== 0 && "border-t border-t-[#eff3f8]" }}
                data={getTableRowData(transaction, index)}
              />
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Transactions;

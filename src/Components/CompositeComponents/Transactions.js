import classNames from "classnames";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchTransactions,
  getUserTransactions,
} from "../../redux/transactions";

import { getUserAddress } from "../../redux/user";

import DateAndTime from "../AtomicComponents/DateAndTime";

function Transactions() {
  const dispatch = useDispatch();
  const userAddress = useSelector(getUserAddress);
  const transactions = useSelector(getUserTransactions);
  console.log({ transactions });

  useEffect(() => {
    dispatch(fetchTransactions({ userAddress }));
  }, [dispatch, userAddress, transactions.length]);

  const truncateString = (str, firstLength, lastLength) => {
    return (
      str.slice(0, firstLength - 1) + "..." + str.slice(str.length - lastLength)
    );
  };

  // console.log({ assets });
  return (
    <div>
      <div className="bg-white p-4 rounded-md">
        <table className="w-full text-center">
          {transactions.map((transaction, index) => {
            const {
              block_signed_at,
              from_address,
              to_address,
              tx_hash,
              fees_paid,
              gas_quote,
              value,
            } = transaction;
            return (
              <tr
                className={classNames({
                  "border-t": index === 0 ? false : true,
                  "border-t-[#eff3f8]": true,
                })}
              >
                <td className="py-2 text-xs text-[#8b93a7]">
                  <div className="mb-1">
                    <DateAndTime date={block_signed_at} />
                  </div>
                  <div>{truncateString(tx_hash, 6, 4)}</div>
                </td>
                <td className="py-2 text-xs text-[#19233c]">
                  <div className="text-[#8b93a7] mb-1">
                    {from_address === userAddress ? "Send" : "Receive"}
                  </div>
                  <div className="text-[#19233c]">
                    {from_address === userAddress
                      ? truncateString(to_address, 6, 4)
                      : truncateString(from_address, 6, 4)}
                  </div>
                </td>
                <td className="py-2 text-xs text-[#19233c]">
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
                </td>
                <td className="py-2 text-xs text-[#8b93a7]">
                  {from_address === userAddress && Number(value) && (
                    <div>
                      Gas Fee {(fees_paid * Math.pow(10, -18)).toFixed(2)} ETH
                      ($
                      {gas_quote.toFixed(2)})
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Transactions;

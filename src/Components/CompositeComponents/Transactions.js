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
    transactions.length === 0 && dispatch(fetchTransactions({ userAddress }));
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
          {transactions.map((transaction) => {
            const {
              block_signed_at,
              from_address,
              to_address,
              tx_hash,
              gas_quote,
              value,
            } = transaction;
            return (
              <tr className="border-t border-t-[#eff3f8]">
                <td className="py-2 text-xs text-[#19233c]">
                  <DateAndTime date={block_signed_at} />
                  {truncateString(tx_hash, 6, 4)}
                </td>
                <td className="py-2 text-xs text-[#19233c]">
                  {/* {finalPrice.toFixed(2)} */}
                </td>
                <td className="py-2 text-xs text-[#19233c]">
                  {/* {finalBalance.toFixed(4)} */}
                </td>
                <td className="py-2 text-xs text-[#19233c]">
                  {/* {finalValue.toFixed(2)} */}
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

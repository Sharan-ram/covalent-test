import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchTransactions,
  getUserAddress,
  getUserTransactions,
} from "../../redux/user";

function Transactions() {
  const dispatch = useDispatch();
  const userAddress = useSelector(getUserAddress);
  const transactions = useSelector(getUserTransactions);

  useEffect(() => {
    transactions.length === 0 && dispatch(fetchTransactions({ userAddress }));
  }, [dispatch, userAddress, transactions.length]);

  // console.log({ assets });
  return <div>Transactions</div>;
}

export default Transactions;

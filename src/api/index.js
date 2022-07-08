import axios from "axios";

export const fetchAssets = async ({ chain_id = 1, userAddress }) => {
  const url = `${process.env.REACT_APP_BASE_URL}/${chain_id}/address/${userAddress}/balances_v2/?key=${process.env.REACT_APP_API_KEY}`;
  const res = await axios.get(url);
  return res.data.data.items
    .filter(
      (item) => !(item.quote_rate_24h === null && item.quote_24h === null)
    )
    .map((item) => {
      const price = Number(item.quote_rate);
      const balance =
        Number(item.balance) * Math.pow(10, -item.contract_decimals);
      const value = price * balance;
      return {
        ...item,
        finalPrice: price,
        finalBalance: balance,
        finalValue: value,
      };
    })
    .filter((item) => item.finalValue >= 0.00001);
};

export const fetchTransactions = async ({
  chain_id = 1,
  userAddress,
  pageNumber = 0,
  pageSize = 20,
}) => {
  const url = `${process.env.REACT_APP_BASE_URL}/${chain_id}/address/${userAddress}/transactions_v2/?quote-currency=USD&format=JSON&block-signed-at-asc=false&page-number=${pageNumber}&page-size=${pageSize}&key=${process.env.REACT_APP_API_KEY}`;
  const res = await axios.get(url);
  return res.data.data.items;
};

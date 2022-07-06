import axios from "axios";

export const fetchAssets = async ({ chain_id = 1, userAddress }) => {
  const url = `${process.env.REACT_APP_BASE_URL}/${chain_id}/address/${userAddress}/balances_v2/?key=${process.env.REACT_APP_API_KEY}`;
  const res = await axios.get(url);
  return res.data.data.items
    .filter(
      (item) => !(item.quote_rate_24h === null && item.quote_24h === null)
    )
    .filter((item) => {
      const price = Number(item.quote_rate);
      const balance = Number(item.balance) * Math.pow(10, -18);
      const value = price * balance;
      return value >= 0.00001;
    });
};

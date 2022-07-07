import { useSelector } from "react-redux";
import { getWalletBalance } from "../../redux/user";

function WalletBalance() {
  const walletBalance = useSelector(getWalletBalance);
  const formatNumber = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const formattedWalletBalance = formatNumber.format(walletBalance);
  return <div className="text-3xl font-black">{formattedWalletBalance}</div>;
}

export default WalletBalance;

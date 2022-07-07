import { useSelector } from "react-redux";
import classnames from "classnames";
import { getWalletBalance } from "../../redux/assets";

function WalletBalance({ type = "large" }) {
  const walletBalance = useSelector(getWalletBalance);
  const formatNumber = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const formattedWalletBalance = formatNumber.format(walletBalance);
  return (
    <div
      className={classnames({
        "text-3xl font-black": type === "large",
        "text-base font-bold text-[#19233c]": type === "small",
      })}
    >
      {formattedWalletBalance}
    </div>
  );
}

export default WalletBalance;

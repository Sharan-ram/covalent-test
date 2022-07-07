import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchAssets,
  getUserAddress,
  getUserAssets,
  getWalletBalance,
} from "../../redux/user";

function Assets() {
  const dispatch = useDispatch();
  const userAddress = useSelector(getUserAddress);
  const assets = useSelector(getUserAssets);
  const walletBalance = useSelector(getWalletBalance);
  console.log({ assets });

  useEffect(() => {
    assets.length === 0 && dispatch(fetchAssets({ userAddress }));
  }, [dispatch, userAddress, assets.length]);

  console.log({ assets });
  return (
    <div>
      Wallet {walletBalance}
      <div className="bg-white p-4">
        <table className="w-full text-center">
          <tr className="bg-[#eff3f8]">
            <th className="py-2">Assets</th>
            <th className="py-2">Price</th>
            <th className="py-2">Balance</th>
            <th className="py-2">Value</th>
          </tr>
          {assets.map((asset) => {
            const {
              contract_ticker_symbol,
              logo_url,
              finalPrice,
              finalBalance,
              finalValue,
            } = asset;
            return (
              <tr className="border-t border-t-[#eff3f8]">
                <td className="py-2 text-xs text-[#19233c]">
                  {contract_ticker_symbol}
                </td>
                <td className="py-2 text-xs text-[#19233c]">
                  {finalPrice.toFixed(2)}
                </td>
                <td className="py-2 text-xs text-[#19233c]">
                  {finalBalance.toFixed(4)}
                </td>
                <td className="py-2 text-xs text-[#19233c]">
                  {finalValue.toFixed(2)}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Assets;

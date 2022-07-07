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
      <div className="bg-white p-2">
        <table className="w-full">
          <tr className="bg-[#eff3f8]">
            <th>Assets</th>
            <th>Price</th>
            <th>Balance</th>
            <th>Value</th>
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
              <tr className="border-b-1 border-b-gray-600">
                <td>{contract_ticker_symbol}</td>
                <td>{finalPrice.toFixed(2)}</td>
                <td>{finalBalance.toFixed(4)}</td>
                <td>{finalValue.toFixed(2)}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Assets;

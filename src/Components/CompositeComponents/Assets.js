import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAssets, getUserAssets } from "../../redux/assets";

import { getUserAddress } from "../../redux/user";

import WalletBalance from "./WalletBalance";

import WalletIcon from "../../assets/images/Wallet.svg";

import { TableRowHead } from "../AtomicComponents/Table";
import TickerIconAndSymbol from "./TickerIconAndSymbol";

function Assets() {
  const dispatch = useDispatch();
  const userAddress = useSelector(getUserAddress);
  const assets = useSelector(getUserAssets);

  useEffect(() => {
    dispatch(fetchAssets({ userAddress }));
  }, [dispatch, userAddress, assets.length]);

  console.log({ assets });
  return (
    <div>
      <div className="flex items-center mb-2 justify-between">
        <div className="flex items-center">
          <div className="w-5">
            <img src={WalletIcon} />
          </div>
          <div className="text-xl ml-2">Wallet</div>
        </div>
        <WalletBalance type="small" />
      </div>
      <div className="bg-white p-4 rounded-md">
        <table className="w-full text-center">
          <TableRowHead data={["Assets", "Price", "Balance", "Value"]} />
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
                  <TickerIconAndSymbol
                    icon={logo_url}
                    symbol={contract_ticker_symbol}
                    classes={{
                      iconAndSymbolWrapper:
                        "w-1/3 mx-auto flex justify-start items-center",
                      imageWrapper: "w-5",
                      image: "rounded-full",
                      symbol: "ml-2",
                    }}
                  />
                </td>
                <td className="py-2 text-xs text-[#19233c]">
                  ${finalPrice.toFixed(2)}
                </td>
                <td className="py-2 text-xs text-[#19233c]">
                  {finalBalance.toFixed(4)}
                </td>
                <td className="py-2 text-xs text-[#19233c]">
                  ${finalValue.toFixed(2)}
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

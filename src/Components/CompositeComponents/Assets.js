import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAssets, getUserAddress, getUserAssets } from "../../redux/user";

function Assets() {
  const dispatch = useDispatch();
  const userAddress = useSelector(getUserAddress);
  const assets = useSelector(getUserAssets);

  useEffect(() => {
    assets.length === 0 && dispatch(fetchAssets({ userAddress }));
  }, [dispatch, userAddress, assets.length]);

  console.log({ assets });
  for (let i = 0; i < assets.length; i++) {
    const price = Number(assets[i].quote_rate);
    const balance = Number(assets[i].balance) * Math.pow(10, -18);
    const value = price * balance;
    const token = assets[i].contract_ticker_symbol;
    const item = assets[i];
    console.log({ item, token, price, balance, value });
  }

  return <div>Assets</div>;
}

export default Assets;

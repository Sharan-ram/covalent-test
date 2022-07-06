import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchAssets,
  getUserAddress,
  getUserAssets,
  // getWalletBalance,
} from "../../redux/user";

function Assets() {
  const dispatch = useDispatch();
  const userAddress = useSelector(getUserAddress);
  const assets = useSelector(getUserAssets);
  // const walletBalance = useSelector(getWalletBalance);

  useEffect(() => {
    assets.length === 0 && dispatch(fetchAssets({ userAddress }));
  }, [dispatch, userAddress, assets.length]);

  console.log({ assets });
  return <div>Assets</div>;
}

export default Assets;

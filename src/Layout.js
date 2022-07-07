import { useDispatch } from "react-redux";
import { setUserAddress } from "./redux/user";

import MainContent from "./MainContent";
import { useEffect } from "react";

const SideBar = () => {
  return <div className="w-1/5 bg-white"></div>;
};

const Layout = ({
  match: {
    params: { userAddress = "0x5ed3608242a1e9cccf45198d78ac2c7d54cd484f" },
  },
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUserAddress(userAddress));
  }, [dispatch, userAddress]);

  return (
    <div className="flex w-full">
      <SideBar />
      <MainContent />
    </div>
  );
};

export default Layout;

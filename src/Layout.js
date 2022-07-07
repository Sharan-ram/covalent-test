import { useDispatch } from "react-redux";
import { setUserAddress } from "./redux/user";

import MainContent from "./MainContent";
import { useEffect } from "react";

const SideBar = () => {
  return <div className="w-1/5 bg-white"></div>;
};

const Layout = ({
  match: {
    params: { userAddress = "0x11577a8a5baf1e25b9a2d89f39670f447d75c3cd" },
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

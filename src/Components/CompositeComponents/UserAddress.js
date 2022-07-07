import { useSelector } from "react-redux";
import { getUserAddress } from "../../redux/user";

function UserAddress() {
  const userAddress = useSelector(getUserAddress);
  return <div className="text-sm text-gray-500">{userAddress}</div>;
}

export default UserAddress;

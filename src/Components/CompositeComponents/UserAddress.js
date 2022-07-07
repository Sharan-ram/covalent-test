import { useSelector } from "react-redux";
import { getUserAddress } from "../../redux/user";

import CopyIcon from "../../assets/images/copyIcon.png";

function UserAddress() {
  const userAddress = useSelector(getUserAddress);
  return (
    <div className="flex text-sm text-gray-500 items-center">
      <div>{userAddress}</div>
      <div
        className="w-3 ml-2 cursor-pointer"
        onClick={() =>
          navigator.clipboard.writeText(
            `${window.location.origin}/${userAddress}`
          )
        }
      >
        <img src={CopyIcon} alt="copyIcon" />
      </div>
    </div>
  );
}

export default UserAddress;

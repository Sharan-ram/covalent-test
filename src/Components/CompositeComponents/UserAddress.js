import { useSelector } from "react-redux";
import Tooltip from "rc-tooltip";
import { getUserAddress } from "../../redux/user";
import "rc-tooltip/assets/bootstrap_white.css";

import CopyIcon from "../../assets/images/copyIcon.png";

function UserAddress() {
  const userAddress = useSelector(getUserAddress);
  return (
    <div className="flex text-sm text-gray-500 items-center">
      <div>{userAddress}</div>
      <Tooltip placement="top" overlay={<span>Copy sharable link</span>}>
        <div
          className="w-3 ml-2 cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(
              `${window.location.origin}/${userAddress}`
            );
          }}
        >
          <img src={CopyIcon} alt="copyIcon" />
        </div>
      </Tooltip>
    </div>
  );
}

export default UserAddress;

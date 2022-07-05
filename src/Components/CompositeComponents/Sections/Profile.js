import Avatar from "../../AtomicComponents/Avatar";
import UserAddress from "../UserAddress";
import WalletBalance from "../WalletBalance";

function ProfileSection() {
  return (
    <div className="py-6 flex items-center">
      <div className="w-1/6">
        <Avatar />
      </div>
      <div className="w-3/6">
        <UserAddress />
      </div>
      <div className="w-2/6">
        <WalletBalance />
      </div>
    </div>
  );
}

export default ProfileSection;

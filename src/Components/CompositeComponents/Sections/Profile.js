import Avatar from "../../AtomicComponents/Avatar";
import UserAddress from "../UserAddress";
import WalletBalance from "../WalletBalance";

function ProfileSection() {
  return (
    <div className="py-6 flex">
      <Avatar />
      <UserAddress />
      <WalletBalance />
    </div>
  );
}

export default ProfileSection;

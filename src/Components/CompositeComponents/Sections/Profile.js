import Avatar from "../../AtomicComponents/Avatar";
import UserAddress from "../UserAddress";
import WalletBalance from "../WalletBalance";

function ProfileSection() {
  return (
    <div className="w-5/6 mx-auto py-6 flex items-center">
      <div className="w-1/12">
        <Avatar />
      </div>
      <div className="w-7/12 px-8">
        <UserAddress />
      </div>
      <div className="w-4/12 text-right">
        <WalletBalance />
      </div>
    </div>
  );
}

export default ProfileSection;
